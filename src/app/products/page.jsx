import { allProducts } from "@/lib/api/products";
import React from "react";
import ProductCard from "@/components/ProductCard";
import SearchProducts from "@/components/SearchProducts";

const BrowseProducts = async ({ searchParams }) => {
    const { search } = await searchParams; 
    const products = await allProducts(search);

    // console.log("products", products);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-3xl font-bold text-center mb-10">
                Browse Products
            </h1>
            <div className="flex justify-center items-center mb-4">
                <SearchProducts />
            </div>
            <div className="mb-10">
                {search && <h1 className="font-bold " >Here found {products?.length} products for your search</h1>}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products?.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>

        </div>
    );
};

export default BrowseProducts;