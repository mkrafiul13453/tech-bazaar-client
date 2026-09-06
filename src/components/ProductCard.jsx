import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
    const { title, price, image, description } = product;

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">

            {/* Product Image */}
            <div className="relative w-full h-56">
                <Image
                    src={image}
                    alt={title || "Product image"}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Product Information */}
            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between">

                    {/* Price */}
                    <p className="text-xl font-bold text-gray-900">
                        ${price}
                    </p>

                    {/* Buy Now Button */}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200">
                        Buy Now
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;