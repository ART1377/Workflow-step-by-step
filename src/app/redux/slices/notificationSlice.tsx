import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Notification, Notifications } from "../../../../next-type-d";
import axios from "axios";

const API_URL = "http://127.0.0.1:3500"; // Adjust the API URL based on your prot

export interface NotificationsState {
  notifications: Notification[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
}

const initialState: NotificationsState = {
  notifications: [],
  status: "idle",
  error: null,
};

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    const response = await axios.get(`${API_URL}/notifications`);
    return response.data;
  }
);

export const markAsRead = createAsyncThunk(
  "notifications/markAsRead",
  async (notificationId: string) => {
    const response = await axios.get(
      `${API_URL}/notifications/${notificationId}`
    );
    const notification = response.data;

    const updateNotification = { ...notification, read: true };

    // Now, update the notification on the server
    await axios.put(
      `${API_URL}/notifications/${notificationId}`,
      updateNotification
    );

    return notification?.id;
  }
);

export const addNotification = createAsyncThunk(
  "notifications/addNotification",
  async (newNotification) => {
    const response = await axios.post(`${API_URL}/notifications`, newNotification);
    return response.data;
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch notifications";
      })
      .addCase(markAsRead.pending, (state) => {
        state.status = "loading";
      })
      .addCase(markAsRead.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.notifications.findIndex(
          (n) => n.id === action.payload
        );
        const notification = state.notifications.find(
          (n: Notification) => n.id === action.payload
        );

        if (index !== -1) {
          state.notifications[index] = { ...notification!, read: true };
        }
      })
      .addCase(addNotification.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNotification.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Assuming the response contains the newly added notification
        state.notifications.push(action.payload);
      })
      .addCase(addNotification.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to add notification";
      });
  },
});

export default notificationsSlice.reducer;
