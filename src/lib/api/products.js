import { getTokenServer } from "../getTokenServer";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getProducts = async () => {
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}/seller/products`,{
        method: "GET",
        headers: {
            
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
};