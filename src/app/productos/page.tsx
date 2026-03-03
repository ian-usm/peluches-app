import { products } from "@/lib/products";

export default function ProductosPage() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="aspect-square border-4 border-red-800 hover:scale-105 transition flex flex-col items-center justify-center p-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-full"
          />

          <h3 className="mt-3 text-lg">{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}