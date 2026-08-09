"use client";

import { addProduct } from "@/lib/api/products";
import { imageUpload } from "@/lib/imageUpload";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export default function AddProductModal() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());    //form re sob gulu data ai data ter moddeh ase.
        const image = await imageUpload(data.image);
        // console.log(image);
        const product = {
            ...data,
            image: image.url,
        };
        console.log(product);

        const result = await addProduct(product);
        console.log(result);

        


        // console.log(data);
    };
    return (
        <Modal>
            <Button variant="secondary">Add Product Form</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Add Product</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit}  className="flex flex-col gap-4">
                                    <TextField className="w-full" name="title" variant="secondary">
                                        <Label>Title</Label>
                                        <Input placeholder="Enter your title" />
                                    </TextField>
                                    <TextField className="w-full" name="description" variant="secondary">
                                        <Label>Description</Label>
                                        <Input placeholder="Enter your description" />
                                    </TextField>
                                    <TextField className="w-full" name="price" variant="secondary">
                                        <Label>Price</Label>
                                        <Input placeholder="Enter your price" />
                                    </TextField>    
                                    <TextField
                                        className="w-full"
                                        type="file"
                                        variant="secondary"
                                    >
                                        <Label>Image</Label>
                                        <input name="image" type="file" placeholder="Select an image" />
                                    </TextField>    
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" variant="primary" >Add Product</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}