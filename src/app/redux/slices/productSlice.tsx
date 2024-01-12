import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
// import { RootState } from '../store';
import { Product, Step } from "../../../../next-type-d";

const API_URL = "http://127.0.0.1:3500"; // Adjust the API URL based on your prot

export interface InitialStateType {
  products: Product[];
  status: string;
  error: null | string;
}
const initialState: InitialStateType = {
  products: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId: string) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({
    productId,
    updatedStep,
  }: {
    productId: string;
    updatedStep: Step;
  }) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    const updatedProduct = response.data;

    // Find the index of the step to update
    const stepIndex = updatedProduct.steps.findIndex(
      (step: Step) => step.step === updatedStep.step
    );

    // If the step is found, update it
    if (stepIndex !== -1) {
      updatedProduct.steps[stepIndex] = updatedStep;
    }

    // Now, update the product on the server
    await axios.put(`${API_URL}/products/${productId}`, updatedProduct);

    // Return the updated step
    return { productId, updatedStep };
  }
);

export const addStepToProduct = createAsyncThunk(
  "products/addStepToProduct",
  async ({ productId, newStep }: { productId: string; newStep: Step }) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    const productToUpdate = response.data;

    // Find the maximum step number in the current steps array
    const maxStep = Math.max(
      ...productToUpdate.steps.map((step: Step) => step.step),
      0
    );

    // Set the step property of the newStep to be one greater than the maximum step
    newStep.step = maxStep + 1;

    // Add the newStep to the steps array
    productToUpdate.steps.push(newStep);

    // Now, update the product on the server
    await axios.put(`${API_URL}/products/${productId}`, productToUpdate);

    // Return the updated product
    return { productId, updatedProduct: productToUpdate };
  }
);

export const deleteStepsFromProduct = createAsyncThunk(
  "products/deleteStepsFromProduct",
  async ({
    productId,
    numberOfSteps,
  }: {
    productId: string;
    numberOfSteps: number;
  }) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    const productToUpdate = response.data;

    // Remove the specified number of steps from the beginning of the steps array
    productToUpdate.steps.splice(0, numberOfSteps);

    // Now, update the product on the server
    await axios.put(`${API_URL}/products/${productId}`, productToUpdate);

    // Return the updated product
    return { productId, updatedProduct: productToUpdate };
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = "something went wrong";
      })

      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        // No need to update the entire state, only update the specific step
        const productId = action.payload.productId;
        const updatedStep = action.payload.updatedStep;

        state.products = state.products.map((product: Product) =>
          product.id === productId
            ? {
                ...product,
                steps: product.steps.map((step: Step) =>
                  step.step === updatedStep.step ? updatedStep : step
                ),
              }
            : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to update product";
      })
      // fetch single product
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = [action.payload]; // Assuming you store a single product in an array
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = "Failed to fetch product";
      })
      // addCase for addStepToProduct
      .addCase(addStepToProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addStepToProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { productId, updatedProduct } = action.payload;

        // Update the state with the modified product
        state.products = state.products.map((product: Product) =>
          product.id === productId ? updatedProduct : product
        );
      })
      .addCase(addStepToProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to add step to product";
      })
      // addCase for deleteStepsFromProduct
      .addCase(deleteStepsFromProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteStepsFromProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { productId, updatedProduct } = action.payload;

        // Update the state with the modified product
        state.products = state.products.map((product: Product) =>
          product.id === productId ? updatedProduct : product
        );
      })
      .addCase(deleteStepsFromProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to delete steps from product";
      });
  },
});

export default productSlice.reducer;
