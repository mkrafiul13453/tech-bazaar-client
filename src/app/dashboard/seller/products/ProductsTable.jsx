import { Table } from "@heroui/react";

export function ProductsTable({products}) {
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
        </Table>
    );
}