import { data } from "../data/data.json";
import Navbar from "./components/Navbar";
import Product from "./home/Product";

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen">
      <Navbar />
      <div className="p-4 max-w-screen-2xl m-auto">
        <h2 className="font-bold text-2xl mb-2">Featured Products</h2>
        <div className="flex gap-6 flex-wrap">
          {data.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
      </div>
    </main>
  );
}
