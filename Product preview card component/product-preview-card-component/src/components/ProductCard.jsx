import React from 'react'

const ProductCard = () => {
  return (
    <div>
    <div className='bg-[#F3EBE3] w-screen h-screen flex items-center justify-center'>
      <div className='bg-white w-xl h-1/2 '>
        <div>
           <img className='w-24' src="./src/assets/images/image-product-desktop.jpg" alt="" />
        </div>
        <div >
          <div>P E R F U M E</div>
          <div>Gabrielle Essence Eau De Parfum</div>
          <div>A floral,solar and voluptous interpretation composed by Olivier Polge,Perfumer-Creator for the House of CHANEL.</div>
           <div>
            <div>$149.99</div>
            <div>$169.99</div>
           </div>
           <div>
            <button>Add to Cart</button>
           </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductCard
