import { getProductById } from "@/lib/api/products";
import Image from "next/image";
import React from "react";

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;

    console.log("id", id);

    const product = await getProductById(id);

    console.log("product", product);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-md p-6">

                {/* Product Image */}
                <div className="relative w-full h-[400px]">
                    <Image
                        src={product.image}
                        alt={product.title || "Product image"}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                {/* Product Information */}
                <div className="flex flex-col justify-center">

                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        {product.title}
                    </h1>

                    <p className="text-gray-600 text-lg leading-7 mb-6">
                        {product.description}
                    </p>

                    <p className="text-3xl font-bold text-blue-600 mb-6">
                        ${product.price}
                    </p>

                    <form method="POST" action="/api/payment">
                        <input type="hidden" defaultValue={product.price}name="price" />
                        <input type="hidden" defaultValue={product.title}name="title" />
                        <input type="hidden" defaultValue={product.id}name="productId" />
                        <button type={"submit"} className="bg-blue-600 text-white border-2 font-semibold py-3 px-6 rounded-lg transition mb-6 ">
                            Buy Now
                        </button>
                    </form>
                    {/* <button className=" hover:bg-blue-700 text-black border-2 font-semibold py-3 px-6 rounded-lg transition mb-6">
                        Add to Cart
                    </button> */}

                </div>

            </div>
        </div>
    );
};

export default ProductDetailsPage;