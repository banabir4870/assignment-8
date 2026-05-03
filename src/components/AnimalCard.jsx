import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({animal}) => {
    return (
            <Card>
                <div className='relative'>
                    <Image src={animal.image} alt={animal.name} width={300} height={300} className='w-full h-50 object-cover object-center rounded-2xl'></Image>
                    <Chip className='absolute top-1 right-1' size='sm'>{animal.breed}</Chip>
                </div>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-xl'>{animal.name}</h2>
                    <p>৳ <span className='font-semibold text-lg'>{animal.price}</span></p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-600'>Weight: {animal.weight}</p>
                    <p className='text-gray-600'>Age: {animal.age}</p>
                </div>
                <Link href={`/all-animals/${animal.id}`}><Button variant='outline' className={'w-full'}>View Details</Button></Link>
            </Card>
    );
};

export default AnimalCard;