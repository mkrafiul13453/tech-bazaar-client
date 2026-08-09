import AddProductModal from '@/components/dashboard/seller/AddProductModal';
import React from 'react';

const SellerProductsPage = () => {
    return (
        <div>
            <div className='text-2xl font-bold'>Seller Products</div>
            <AddProductModal />
        </div>
    );
};

export default SellerProductsPage;