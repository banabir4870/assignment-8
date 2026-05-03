"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { cinzel } from "../fonts";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";

const RegisterPage = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Card className="w-4/12 mx-auto my-10">
            <h1 className={`text-3xl font-semibold text-green-900 ${cinzel.className} text-center`}>Register</h1>
            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter Your Full Name" className={'border-2 border-gray-300'} />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="image"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Photo Url</Label>
                    <Input name="image" placeholder="Enter Your Photo Url" className={'border-2 border-gray-300'} />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input name="email" placeholder="Enter Your Email" className={'border-2 border-gray-300'} />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input name="password" placeholder="Enter your password" className={'border-2 border-gray-300'} />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-4">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <p>Already Registered? <span className="text-blue-500 font-medium"><Link href={'/login'}>LogIn</Link></span> </p>
        </Card>
    );
};

export default RegisterPage;