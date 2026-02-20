import React from 'react'

const ProductCard = () => {
  return (
    <div className='m-0 p-0 box-border'>
    <div className='bg-[#F3EBE3]  w-screen h-screen flex items-center justify-center'>
      <div className='bg-white w-auto h-auto sm:w-xl sm:h-auto sm:flex  rounded-md'>
        <div className='w-72 sm:w-960'>
           <img loading='lazy' className='w-full h-full rounded-l-md ' src="./src/assets/images/image-product-desktop.jpg" alt="" />
        </div>
         <div >
        <div>
          <div><p className='pt-6 pl-7 text-[14px] font-[Fraunces] font-extralight text-[#6E6E87]'>P E R F U M E</p></div>
          <div>
            <pre className='pt-4 pl-7 font-[Montserrat] font-extrabold text-3xl text-[#1c232b]'>{`Gabrielle 
Essence Eau 
De Parfum`}
</pre>
            </div>
          <div>
            <pre className='pt-6 pl-7 text-[17px] font-[Fraunces] font-extralight text-[#6E6E87]'>{`A floral,solar and voluptous 
interpretation composed by
Olivier Polge,Perfumer-Creator
for the House of CHANEL.`}
</pre>
            </div>
           <div className='flex'>
            <div><p className='pt-6 pl-8 font-[Fraunces] text-[#3c8067] font-extrabold text-3xl'>$149.99</p></div>
            <div className='pt-8 pl-5 text-[14px] font-[Fraunces] font-extralight text-[#6E6E87]'><s>$169.99</s></div>
           </div>
           
            <div className='flex items-center justify-center bg-[#3c8067] m-8 w-56 h-10 rounded-md hover:bg-[#1b4133]'>
            <div><img src="./src/assets/images/icon-cart.svg" alt="" /></div>
            <div><a href="#"><button className=' text-white font-[Fraunces] font-extrabold text-[14px] ml-4'>Add to Cart</button></a></div>
           </div>
        </div>
      </div>
      </div>
     
    </div>
    </div>
  )
}

export default ProductCard
