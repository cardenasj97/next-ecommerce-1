import { ProductType } from "@/app/home/Product";

export type CartItem = ProductType & {
  quantity: number;
};
