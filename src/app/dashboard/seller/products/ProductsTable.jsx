import { Pagination, Table } from "@heroui/react";
import Link from "next/link";

export function ProductsTable({ productsData }) {
    const products = productsData.data;
    const totalPages = productsData.totalPage;
    const pages = [];
    const page = productsData.page;
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return (
        <Table className="mt-6">
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">
                    <Table.Header>
                        <Table.Column isRowHeader>#</Table.Column>
                        <Table.Column>Tittle</Table.Column>
                        <Table.Column>Price</Table.Column>
                        <Table.Column>Quantity</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {products.map((product, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell>{product.title}</Table.Cell>
                                <Table.Cell>{product.price}</Table.Cell>
                                <Table.Cell>{product.quantity}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
            <Table.Footer>
                <Pagination size="sm">
                   
                    <Pagination.Content>
                        <Pagination.Item>
                            <Link href={`/dashboard/seller/products?page=${page-1}`}>
                                <Pagination.Previous
                                    isDisabled={page === 1}
                                >
                                    <Pagination.PreviousIcon />
                                    Prev
                                </Pagination.Previous>
                            </Link>
                        </Pagination.Item>
                        {pages.map((p) => (
                            <Pagination.Item key={p}>
                                <Link href={`/dashboard/seller/products?page=${p}`}>
                                    <Pagination.Link className={`${p==page && "bg-blue-500 text-white"}`}  isActive={p === page}>
                                        {p}
                                    </Pagination.Link>
                                </Link>
                            </Pagination.Item>
                        ))}
                        <Pagination.Item>
                            <Link href={`/dashboard/seller/products?page=${page+1}`}>
                                <Pagination.Next
                                    isDisabled={page === totalPages}
                                >
                                    Next
                                    <Pagination.NextIcon />
                                </Pagination.Next>
                            </Link>
                        </Pagination.Item>
                    </Pagination.Content>
                </Pagination>
            </Table.Footer>
        </Table>
    );
}