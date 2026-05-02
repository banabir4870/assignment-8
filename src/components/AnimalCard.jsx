import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({feature}) => {
    return (
            <Card>
                <div className='relative'>
                    <Image src={feature.image} alt={feature.name} width={300} height={300} className='w-full h-50 object-cover object-center rounded-2xl'></Image>
                    <Chip className='absolute top-1 right-1' size='sm'>{feature.breed}</Chip>
                </div>
                <div className='flex justify-between'>
                    <h2>{feature.name}</h2>
                    <p>৳ {feature.price}</p>
                </div>
                <Link href={'#'}><Button variant='outline' className={'w-full'}>View Details</Button></Link>
                <Link href={'#'}><Button variant='secondary' className={'w-full'}>Buy Now</Button></Link>
            </Card>
    );
};

export default AnimalCard;