import React, { useEffect, useState } from 'react'
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
import { data } from '../../data'
function Imagecarousel() {


    const [index, setIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const handleLeft = () => {
        const length = data.length - 1
        if (index <= 0) {
            console.log(length)
            setIndex(length)
        }
        else {
            setIndex(prev => prev - 1)
        }
    }

    const handleRight = () => {
        console.log(index);
        const length = data.length - 1
        if (index >= length) {
            setIndex(0)
        }
        else {
            setIndex(prev => prev + 1)
        }
    }

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                const length = data.length - 1
                if (index >= length) {
                    setIndex(0)
                } else {
                    setIndex(prev => prev + 1)
                }
            }, 2000)
            return () => clearInterval(interval);
        }
    }, [index,isHovered])


    return (
        <div className='w-full h-screen relative'>
            <button className='absolute top-[30%] bg-black p-2 text-white left-4' onClick={handleLeft}><PiLessThan /></button>
            <img src={data[index].imageUrl} className='h-[500px] w-full object-cover' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} alt="" />
            <button className='absolute top-[30%] bg-black p-2 text-white right-4' onClick={handleRight} ><PiGreaterThan /></button>
        </div>
    )
}

export default Imagecarousel