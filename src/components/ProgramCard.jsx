import React from 'react'

const ProgramCard = ({image, name, time, place, city, addressLink}) => {
  return (
    <div className='flex justify-center items-center text-center flex-col gap-5 my-5 text-brown'>
    <img src={image} alt={name} className='w-[120px] h-[120px]' />
    <p className='text-[20px] uppercase font-semibold'>{name}</p>
    <p className='font-bold text-[35px]'>{time}</p>
    <p className='text-[30px] font-bold md:text-[35px]'>{place}</p>
    <p className='text-[18px] font-thin'>{city}</p>
    <a href={addressLink} target="_blank" className='py-2 px-5 bg-brown text-white rounded-full font-semibold'>Ինչպես հասնել</a>
</div> 
  )
}

export default ProgramCard