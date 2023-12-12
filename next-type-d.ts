export interface Product {
  productId: string;
  productName: string;
  productDescription: string;
  steps: {
    person: {
      personName: string;
      personId: string;
    };
    step: number;
  }[];
}
