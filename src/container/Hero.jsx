import React from 'react';

const Hero = () => {
  return (
    <section className='paddings w-full h-[100vh] flex flex-col md:flex-row justify-evenly items-center'>
      
    <div className='flex flex-col items-center justify-center gap-3 text-center my-5 text-focus-in'>
      <h1 className='uppercase text-[40px] font-semibold font-serif text-brown'>Հարսանյանց հրավիրատոմս</h1>
      <p className='text-brown text-[30px] tracking-wider font-greatVibes'>
        Արման ∞ Նանե<br/>
        05.10.2024
      </p>
    </div>
  
    <div className='lg:w-1/3 w-full h-full bg-hero-bg bg-cover bg-center rounded-lg mt-2 drop-shadow-lg fade-in-fwd fade-effect'></div>
  </section>
  

  )
}

export default Hero;