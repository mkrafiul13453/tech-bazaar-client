
import AddProductModal from '@/components/dashboard/seller/AddProductModal';
import { getProducts } from '@/lib/api/products';
import { ProductsTable } from './ProductsTable';

const SellerProductsPage = async () => {
    const products = await getProducts();
    console.log("products", products);
    return (
        <div>
            <div className='text-2xl font-bold'>Seller Products</div>
            <AddProductModal />
            <ProductsTable products={products} />
        </div>
    );
};

export default SellerProductsPage;