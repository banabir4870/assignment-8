'use client'
import React from 'react';
import { Button, Card, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextArea, TextField } from '@heroui/react';
import { cinzel } from '@/app/fonts';

const BookingForm = () => {
    const handleBookNow = (e) => {
        e.preventDefault();
        alert("Thank you for booking!");
        e.target.reset();
    };
    return (
        <div>
            <Card>
                <Form onSubmit={handleBookNow} className="w-full">
                    <Fieldset>
                        <h1 className={`text-3xl font-semibold text-green-900 ${cinzel.className} text-center my-1`}>Book Now</h1>
                        <p className='text-gray-800 text-center'>Book Your Qurbani Animal Before StockOut</p>
                        <FieldGroup>
                            <TextField
                                isRequired
                                name="name"
                            >
                                <Label>Name</Label>
                                <Input placeholder="Enter Your Name" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="email" type="email">
                                <Label>Email</Label>
                                <Input placeholder="Enter Your Email Address" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="email" type="email">
                                <Label>Phone Number</Label>
                                <Input placeholder="Enter Your Phone Number" />
                                <FieldError />
                            </TextField>
                            <TextField
                                isRequired
                                name="bio"
                            >
                                <Label>Address</Label>
                                <TextArea placeholder="Enter Your Full Address" />
                                <Description>Minimum 10 characters</Description>
                                <FieldError />
                            </TextField>
                        </FieldGroup>
                        <Fieldset.Actions>
                            <Button className={'w-full'} type="submit">
                                Book Now
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
            </Card>
        </div>
    );
};

export default BookingForm;