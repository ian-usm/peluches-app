import { products } from "@/lib/products";
import Link from "next/link";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="mt-10 text-center">Producto no encontrado</div>;
  }

  return (
    <div className="mt-12 w-full max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">

      {/* imagen */}
      <div className="w-full max-w-md aspect-square border-4 border-red-800 p-8 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-full"
        />
      </div>

      {/* info */}
      <div className="flex flex-col gap-6 max-w-md">

        <h1 className="text-3xl text-red-800">
          {product.name}
        </h1>

        <p className="text-xl">
          ${product.price}
        </p>

        <p>
          {product.description}
        </p>

        <a
          href=""
          target="_blank"
          className="border-2 border-red-800 px-6 py-3 text-center hover:scale-105 transition"
        >
          Lo quiero!
        </a>

        <Link
          href="/productos"
          className="border-2 border-red-800 px-6 py-3 text-center hover:scale-105 transition"
        >
          Volver
        </Link>

      </div>

    </div>
  );
}