"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import {
  deleteStepsFromProduct,
  addStepToProduct,
  fetchProducts,
} from "../../../redux/slices/productSlice";
import { Step, Product } from "../../../../../next-type-d";
import SelectOption from "../../../components/Global/SelectOption/SelectOption";
import Input from "../../../components/Global/Input/Input";
import Button from "../../../components/Global/Button/Button";
import toast from "react-hot-toast";

const ModifyStepsForm = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [numberOfSteps, setNumberOfSteps] = useState<string>("");

  const productOptions = products.map((product) => product.productName);
  const relatedProduct = products.find(
    (product) => product.productName === selectedProduct
  );
  const productId = relatedProduct?.id;

  const handleAddStep = () => {
    if (selectedProduct === "") {
      // Handle validation or show an error message
      toast.error("All fields must be filled !");
      return;
    }
    if (selectedProduct && numberOfSteps) {
      const newStep: Step = {
        person: { personName: "", personId: "" },
        state: "default",
        step: 0, // The actual step will be assigned in the addStepToProduct thunk
        file: null,
      };

      dispatch(
        addStepToProduct({
          productId: productId!,
          newStep,
          numberOfSteps: Number(numberOfSteps),
        })
      );

      toast.success(`${numberOfSteps} Steps added successfully`);
      resetInputs();
    }
  };

  const handleDeleteSteps = () => {
    if (selectedProduct === "") {
      // Handle validation or show an error message
      toast.error("All fields must be filled !");
      return;
    }
    if (+numberOfSteps > relatedProduct?.steps?.length!) {
      toast.error("Entered number is bigger than stest number !");
    }
    if (
      relatedProduct &&
      +numberOfSteps > 0 &&
      +numberOfSteps <= relatedProduct?.steps?.length
    ) {
      dispatch(
        deleteStepsFromProduct({
          productId: productId!,
          numberOfSteps: Number(numberOfSteps),
        })
      );

      toast.success(`${numberOfSteps} Steps deleted successfully`);
      resetInputs();
    }
  };

  const resetInputs = () => {
    setNumberOfSteps("");
    setSelectedProduct("");
  };

  return (
    <div className="h-[calc(100vh - 120px)] max-w-[600px] bg-light p-10 m-auto mt-10 rounded-radius-large">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 mb-6">
          <h6 className="text-center text-primary-dark">
            You Can Add Notification here !
          </h6>
          <small className="text-center text-primary-main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            delectus?
          </small>
        </div>
        <SelectOption
          label="Select Product"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          options={["", ...productOptions]}
          required={true}
          bgColor="bg-light"
        />
        <Input
          label="Number of Steps"
          type="number"
          min={1}
          value={numberOfSteps.toString()}
          onChange={(e) => setNumberOfSteps(e.target.value)}
          placeHolder={`Current number of steps : ${
            relatedProduct ? relatedProduct.steps.length : 0
          }`}
          required={true}
          bgColor="bg-light"
        />
        <div className="flex flex-col gap-2">
          <Button variant="primary-main" size="large" onClick={handleAddStep}>
            Add Step
          </Button>

          <Button variant="reject" size="large" onClick={handleDeleteSteps}>
            Delete Steps
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModifyStepsForm;
