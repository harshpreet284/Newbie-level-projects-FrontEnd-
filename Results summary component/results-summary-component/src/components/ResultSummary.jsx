import React from 'react'

const ResultSummary = () => {
  return (
    <div className='m-0 p-0 box-border'>
     <div className='bg-[#ebf1ff] h-screen w-screen flex items-center justify-center'>
      <div className='bg-white h-auto w-auto  flex'>
        <div className='bg-[#7857ff] w-70 h-100 rounded-lg '>
          <div>
            <p className='text-[#c8c7ff] ml-20 mt-5 text-[18px] font-extrabold'>Your Result</p>
          </div>
          <div className='bg-[#2421ca] rounded-full w-47 h-47 ml-11 mt-5'>
            <p className='pl-14 pt-12 text-white text-6xl font-extrabold'>76</p>
            <p className='pl-17 pt-1 text-[#7857ff] text-[14px] font-extrabold'>of 100</p>
          </div>
          <div>
            <p className='ml-25 mt-2 text-white font-bold text-2xl'>Great</p>
          </div>
          <div>
            <pre className='text-[#c8c7ff] text-[12px] ml-10 mt-5'>
              {`You scored higher than 65% of
  the people who have taken
        these tests.`}
            </pre>
          </div>
        </div>
        <div className='bg-white w-70 h-100'>
          <div>
            <p className='mt-5 text-black text-[18px] font-medium ml-6'>Summary</p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
            <p></p>
          </div>
           <div>
            <img src="" alt="" />
            <p></p>
            <p></p>
          </div>
           <div>
            <img src="" alt="" />
            <p></p>
            <p></p>
          </div>
           <div>
            <img src="" alt="" />
            <p></p>
            <p></p>
          </div>
          <div>
            <button></button>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default ResultSummary
