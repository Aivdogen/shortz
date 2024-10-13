import Image from 'next/image';
import { useState } from 'react';

function SelectStyle({onUserSelect}) {
    const styleOptions = [
        {
            name: 'Realstic',
            image: '/real.jpg'
        },
        {
            name: 'Cartoon',
            image: '/cartoon.jpg'
        },
        {
            name: 'comic',
            image: '/comic.jpg'
        },
        {
            name: 'Watercolor',
            image: '/watercolor.jpeg'
        },
        {
            name: 'GTA',
            image: '/gta.jpeg'
        }

    ]

    const [selectedOption, setSelectedOption] = useState();
    return (
        <div className='mt-8'>
            <h2 className='text-lg font-medium'>Style</h2>
            <p className='text-gray-500'>Select your video style</p>
            <div className='grid grid-cols-2 md;grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
                {styleOptions.map((item, index) => (
                    <div className={`relative hover:scale-105 transition-all duration-100 cursor-pointer ${selectedOption === item.name && 'border-4 border-primary ' }`}>
                        <Image src={item.image} alt={item.name} width={100} height={100}
                            className='h-48 object-cover rounded-lg w-full'
                            onClick={() =>{ 
                                setSelectedOption(item.name)
                                onUserSelect('imageStyle',item.name)

                            }}
                        />
                        <h2 className='absolute p-1 bg-black/50  bottom-0 w-full text-white text-center rounded-b-lg'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectStyle