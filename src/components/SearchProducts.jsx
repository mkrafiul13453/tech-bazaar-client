"use client";
import { Button, Input } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';

const SearchProducts = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.search.value);
        redirect(`/products?search=${e.target.search.value}`);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input name="search" placeholder="Search...">
                </Input>
                <Button className="ml-3.5 " type="submit">Search</Button>
            </form>
        </div>
    );
};

export default SearchProducts;