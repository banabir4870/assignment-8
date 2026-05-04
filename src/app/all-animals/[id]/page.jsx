
import { cinzel } from '@/app/fonts';
import BookingForm from '@/components/BookingForm';
import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: "Qurbani Hat | Animal Details",
  description: "",
};

const AnimalsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://qurbanihat-a8-banabir.vercel.app/animalsData.json');
    const data = await res.json();
    const animal = data.find(p => p.id == id)
    console.log('target: ', animal);
    return (
        <div className='w-10/12 mx-auto my-6'>
            <h1 className={`text-3xl font-semibold text-green-900 ${cinzel.className} text-center my-4`}>{animal.name}</h1>
            <div className='grid lg:grid-cols-12 gap-10'>
                <div className='lg:col-span-7 my-6'>
                    <Card>
                        <div className='relative'>
                            <Image src={animal.image} alt={animal.name} width={1000} height={1000} className='w-full h-[60vh] object-cover object-center rounded-2xl'></Image>
                            <Chip className='absolute top-1 right-1' size='sm' color="success">{animal.breed}</Chip>
                            <Chip className='absolute top-1 left-1' size='sm' color="accent">{animal.category}</Chip>
                        </div>
                        <div className='lg:flex justify-between'>
                            <h2 className='font-semibold text-xl'>{animal.name}</h2>
                            <p>৳ <span className='font-semibold text-lg'>{animal.price}</span></p>
                        </div>
                        <div>
                            <p className='text-gray-800'>{animal.description}</p>
                        </div>
                        <div className='grid lg:grid-cols-2 justify-between gap-6'>
                            <p className='text-gray-800'>Breed: {animal.breed}</p>
                            <p className='text-gray-800'>Weight: {animal.weight} kg</p>
                            <p className='text-gray-800'>Age: {animal.age} years</p>
                            <p className='text-gray-800'>Location: {animal.location}</p>
                        </div>
                    </Card>
                </div>
                <div className='lg:col-span-4 my-6'>
                    <BookingForm></BookingForm>
                </div>
            </div>
        </div>
    );
};

export default AnimalsDetailsPage;