import React from 'react'

const ProductCard = () => {
  return (
    <div>
    <div className='bg-[#F3EBE3] w-screen h-screen flex items-center justify-center'>
      <div className='bg-white w-xl h-auto flex rounded-md'>
        <div>
           <img className='w-auto h-auto' src="./src/assets/images/image-product-desktop.jpg" alt="" />
        </div>
         <div >
        <div>
          <div><p className='pt-3 pl-5 text-[14px] font-[Fraunces] font-extralight text-[#6E6E87]'>P E R F U M E</p></div>
          <div><p className='pt-3 pl-5 font-[Montserrat] font-extrabold text-2xl'>Gabrielle Essence Eau De Parfum</p></div>
          <div><p className='pt-3 pl-5 text-[14px] font-[Fraunces] font-extralight text-[#6E6E87]'>A floral,solar and voluptous interpretation composed by Olivier Polge,Perfumer-Creator for the House of CHANEL.</p></div>
           <div className='flex'>
            <div><p className='pt-3 pl-5 font-[Fraunces] text-[#3c8067] font-extrabold text-3xl'>$149.99</p></div>
            <div className='pt-5 pl-5 text-[14px] font-[Fraunces] font-extralight text-[#6E6E87]'><s>$169.99</s></div>
           </div>
           <div className='flex items-center justify-center bg-[#3c8067] m-8 w-56 h-10 rounded-md'>
            <div><img src="./src/assets/images/icon-cart.svg" alt="" /></div>
            <div><button className=' text-white font-[Fraunces] font-extrabold text-[14px] ml-4'>Add to Cart</button></div>
           </div>
        </div>
      </div>
      </div>
     
    </div>
    </div>
  )
}

export default ProductCard
