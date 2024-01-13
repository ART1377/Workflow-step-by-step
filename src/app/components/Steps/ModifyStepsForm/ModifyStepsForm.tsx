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
    if (selectedProduct) {
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
    }
  };

  console.log(relatedProduct);

  return (
    <div className="flex flex-col gap-8">
      <SelectOption
        label="Select Product"
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
        options={["", ...productOptions]}
        required={true}
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
      />
      <Button variant="reject" size="large" onClick={handleDeleteSteps}>
        Delete Steps
      </Button>
      <Button variant="primary-main" size="large" onClick={handleAddStep}>
        Add Step
      </Button>
    </div>
  );
};

export default ModifyStepsForm;
