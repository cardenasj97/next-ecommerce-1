import { ProductType } from "@/app/home/types";

export type CartItemType = ProductType & {
  quantity: number;
  totalAmount: number;
};
