"use server";
import { authClient } from "../auth-client";
import { getTokenServer } from "../getTokenServer";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const addProduct = async (product) => {
    const token = await getTokenServer();
    


    // const { data: token } = await authClient.token();
    // console.log("token", token.token);                       //aita holo client side thek token get korar method
    // console.log("token", token);

    const res = await fetch(`${baseUrl}/seller/products`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(product),
        }
    );

    const data = await res.json();
    return data;
}