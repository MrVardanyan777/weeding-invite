import React from 'react'
import mainImg from '../assets/images/main.webp';

const Main = () => {
  return (
    <main className='paddings w-full flex flex-col-reverse justify-evenly items-center md:flex-row gap-5'>
        <div className='w-full md:w-1/3'> 
            <img src={mainImg} alt='main-image' className='full rounded-lg drop-shadow-lg' />
        </div>
        <div className='flex flex-col w-full md:w-1/2 items-start gap-4 text-brown'>
            <h2 className='text-[45px] md:text-[50px] uppercase font-[300] tracking-tight'>Սիրելի հյուրեր</h2>
            <p className='text-[22px] font-[300]'>
            Մենք ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի կարևորագույն օրերից մեկը։ Մեծ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին։
            </p>
        </div>
    </main>
  )
}

export default Main;