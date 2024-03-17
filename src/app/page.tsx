import { data } from "../data/data.json";
import Product from "./home/Product";

export default function Home() {
  return (
    <>
      <h2 className="font-bold text-2xl mb-2">Featured Products</h2>
      <div className="flex gap-6 flex-wrap">
        {data.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}
