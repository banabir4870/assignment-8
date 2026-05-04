import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import medicalLogo from '@/assets/medical.png'
import scaleLogo from '@/assets/scale.png'
import calenderLogo from '@/assets/calendar.png'
import trustedLogo from '@/assets/trusted.png'
import { cinzel } from '@/app/fonts';

const QurbaniTips = () => {
    return (
        <div className='w-8/12 mx-auto my-6'>
            <h1 className={`text-3xl font-semibold text-green-900 ${cinzel.className} text-center mb-6`}>Qurbani Tips</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <Card>
                    <div className='flex justify-center'><Image src={medicalLogo} alt='medical logo' width={40} height={40}></Image></div>
                    <h2 className='text-xl font-semibold'>Check Animal Health</h2>
                    <p className='text-sm text-gray-500'>Always inspect the animal for any sings of illness, injury or weakness before booking.</p>
                </Card>
                <Card>
                    <div className='flex justify-center'><Image src={scaleLogo} alt='scale logo' width={40} height={40}></Image></div>
                    <h2 className='text-xl font-semibold'>Know The Right Weight</h2>
                    <p className='text-sm text-gray-500'>For a cow, minimum 200kg is recommended. For goats, 12kg and above is ideal for Qurbani.</p>
                </Card>
                <Card>
                    <div className='flex justify-center'><Image src={calenderLogo} alt='calender logo' width={40} height={40}></Image></div>
                    <h2 className='text-xl font-semibold'>Book Early</h2>
                    <p className='text-sm text-gray-500'>Animals sell out fast before Eid. Book at least 2 weeks in advance to secure your choice.</p>
                </Card>
                <Card>
                    <div className='flex justify-center'><Image src={trustedLogo} alt='trusted logo' width={40} height={40}></Image></div>
                    <h2 className='text-xl font-semibold'>Verify The Source</h2>
                    <p className='text-sm text-gray-500'>Always buy from a trusted seller or verified farm to ensure the animal is halal and healthy.</p>
                </Card>
                
            </div>
        </div>
    );
};

export default QurbaniTips;