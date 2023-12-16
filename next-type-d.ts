export interface Product {
  id: string;
  productName: string;
  productDescription: string;
  steps: Step[];
}

export interface Step {
  person: Person;
  state: string;
  step: number;
  file:File|null;
}
export interface Person {
  personName: string;
  personId: string;
}
