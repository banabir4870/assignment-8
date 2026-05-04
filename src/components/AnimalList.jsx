"use client";

import { useState } from "react";
import AnimalCard from "./AnimalCard";

const AnimalList = ({ animals }) => {
    const [sortOption, setSortOption] = useState("");

    const getSortedData = () => {
        let sorted = [...animals];

        if (sortOption === "low") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortOption === "high") {
            sorted.sort((a, b) => b.price - a.price);
        }

        return sorted;
    };

    const sortedData = getSortedData();

    return (
        <>
            <div className="flex justify-start mb-4">
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border px-3 py-2 rounded border-green-950 text-green-950"
                >
                    <option value="" disabled>Sort By Price</option>
                    <option value="">Reset Sorting</option>
                    <option value="low">Price: Low → High</option>
                    <option value="high">Price: High → Low</option>
                </select>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-6'>
                {
                    sortedData.map(animal => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))
                }
            </div>
        </>
    );
};

export default AnimalList;