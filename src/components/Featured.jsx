import { cinzel } from '@/app/fonts';
import React from 'react';
import AnimalCard from './AnimalCard';
import "animate.css";

const Featured = async () => {
    const res = await fetch('https://qurbanihat-a8-banabir.vercel.app/animalsData.json');
    const data = await res.json();
    const featuredData = data.slice(0, 4);

    return (
        <div className='w-10/12 mx-auto my-6'>
            <h1 className={`text-3xl font-semibold text-green-900 ${cinzel.className} text-center`}>
                Featured Animals
            </h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-6'>
                {
                    featuredData.map((animal, index) => (
                        <div
                            key={animal.id}
                            className={`animate__animated ${
                                index % 2 === 0
                                    ? "animate__fadeInLeft"
                                    : "animate__fadeInRight"
                            }`}
                        >
                            <AnimalCard animal={animal} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Featured;