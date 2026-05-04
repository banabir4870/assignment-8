import React from 'react';
import { cinzel } from '../fonts';
import AnimalList from '@/components/AnimalList';

export const metadata = {
  title: "Qurbani Hat | All Animals",
  description: "",
};

const AllAnimalsPage = async () => {
    const res = await fetch('https://qurbanihat-a8-banabir.vercel.app/animalsData.json')
    const data = await res.json();
    return (
        <div className='w-10/12 mx-auto my-6'>
            <h1 className={`text-3xl font-semibold text-green-900 ${cinzel.className} text-center mb-4`}>Qurbani Animals</h1>
            <AnimalList animals={data} />
        </div>
    );
};

export default AllAnimalsPage;