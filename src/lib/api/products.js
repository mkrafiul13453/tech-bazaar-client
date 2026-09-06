import { getTokenServer } from "../getTokenServer";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getProducts = async (page) => {
    if (!page) {
        page = 1;
    }
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}/seller/products?page=${page}`, {
        method: "GET",
        headers: {
            
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;    
};


export const allProducts = async (search) => {
    const res = await fetch(`${baseUrl}/products?search=${search}`, {
        method: "GET",
        headers: {
            
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    return data;    
};