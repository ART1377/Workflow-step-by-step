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
    const response = await axios.put(
      `${API_URL}/notifications/${notificationId}`
    );
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
      .addCase(markAsRead.fulfilled, (state, action) => {
        const index = state.notifications.findIndex(
          (n) => n.id === action.payload
        );
        const notification = state.notifications.find(
          (n: Notification) => n.id === action.payload
        );

        if (index !== -1) {
          state.notifications[index] = { ...notification!, read: true };
        }
      });
  },
});

export default notificationsSlice.reducer;
