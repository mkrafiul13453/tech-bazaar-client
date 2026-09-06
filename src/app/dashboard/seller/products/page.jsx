
import AddProductModal from '@/components/dashboard/seller/AddProductModal';
import { getProducts } from '@/lib/api/products';
import { ProductsTable } from './ProductsTable';

const SellerProductsPage = async ({searchParams}) => {
    const params = await searchParams;
    console.log(params);
    const products = await getProducts(params.page);
    console.log("products", products);
    return (
        <div>
            <div className='text-2xl font-bold'>Seller Products</div>
            <AddProductModal />
            <ProductsTable productsData={products}/>
        </div>
    );
};

export default SellerProductsPage;