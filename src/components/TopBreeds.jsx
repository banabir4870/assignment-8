import { cinzel } from '@/app/fonts';
import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';



const breeds = [
    {
        id: 1,
        name: "Black Bengal",
        type: "Goat",
        origin: "Bangladesh",
        highlight: "World-famous for tender meat",
        image: "https://cdn.morningchores.com/wp-content/uploads/2019/08/Black-Bengal-Goat-Breed-Info-Characteristics-Breeding-and-Care-FI-1.jpg"
    },
    {
        id: 2,
        name: "Brahman",
        type: "Cow",
        origin: "South Asia",
        highlight: "Heavy build, high meat yield",
        image: "https://morenoranches.com/wp-content/uploads/2019/02/Progeny-Moreno-Mr.-Ranger-Bronce-475.jpg"
    },
    {
        id: 3,
        name: "Sahiwal",
        type: "Cow",
        origin: "Pakistan / India",
        highlight: "Premium quality, calm nature",
        image: "https://cpimg.tistatic.com/01052690/b/4/SAHIWAL-BULL.jpg"
    },
    {
        id: 4,
        name: "Jamunapari",
        type: "Goat",
        origin: "India",
        highlight: "Large frame, excellent for Qurbani",
        image: "https://tiimg.tistatic.com/fp/1/004/519/patira-goat-743.jpg"
    }
];
const TopBreeds = () => {
    return (
        <div className='w-8/12 mx-auto my-6'>
            <h1 className={`text-3xl font-semibold text-green-900 ${cinzel.className} text-center mb-2`}>Top Breeds</h1>
            <p className='text-xl font font-medium text-gray-400 text-center mb-4'>Explore The Most Popular And Trusted Breeds For Qurbani</p>
            <div className='my-4 grid grid-cols-4 gap-6'>
                {
                    breeds.map(breed =>
                        <Card key={breed.id}>
                            <div className='relative'>
                                <Image src={breed.image} alt={breed.name} width={300} height={300} className='w-full h-50 object-cover object-center rounded-2xl'></Image>
                                <Chip color="accent" className='absolute top-1 right-1' size='sm'>{breed.type}</Chip>
                            </div>
                            <h1 className='font-semibold text-xl'>{breed.name}</h1>
                            <p className='text-lg text-gray-400'>Origin: {breed.origin}</p>
                            <p className='text-gray-600'>{breed.highlight}</p>
                        </Card>)
                }
            </div>
        </div>
    );
};

export default TopBreeds;