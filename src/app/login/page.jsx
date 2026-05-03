"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { cinzel } from "../fonts";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            callbackURL: '/'
        })

        if (error) {
            alert('Invalid Email or Password')
        }

        if (data) {
            alert('WelCome. LogIn Successfully.')
        }

        console.log('data from db: ', { data, error })
    };
    return (
        <Card className="w-4/12 mx-auto my-10">
            <h1 className={`text-3xl font-semibold text-green-900 ${cinzel.className} text-center`}>Log In</h1>
            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
                    <Input name="email" placeholder="Enter Your Email Address" className={'border-2 border-gray-300'} />
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
            <p>Don&apos;t Have Account? <span className="text-blue-500 font-medium"><Link href={'/register'}>Register</Link></span> </p>
            <p className="text-center">---------------Or---------------</p>

            <Button variant="outline" className={'w-full'}><BsGoogle></BsGoogle> LogIn With Google</Button>

        </Card>
    );
};

export default LoginPage;