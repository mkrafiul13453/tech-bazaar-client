"use server";

import { authClient } from "../auth-client";

const baseUrl = process.env.SERVER_URL;
export const addProduct = async (product) => {
    const {data:token} = await authClient.token();
    const res = await fetch(`${baseUrl}/seller/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization:`Bearer${token?.token}`
        },
        body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
};