import React from 'react'

const ResultSummary = () => {
  return (
    <div className='m-0 p-0 box-border'>
     <div className='bg-[#ebf1ff] h-screen w-screen flex items-center justify-center'>
      <div className='bg-white h-auto w-auto  flex'>
        <div className='bg-[#7857ff] w-auto h-auto rounded-lg '>
          <div>
            <p className='text-[#c8c7ff] ml-20 mt-5'>Your Result</p>
          </div>
          <div className='bg-[#2421ca] rounded-full w-20 h-20'>
            <p className='ml-27 mt-5'>76</p>
            <p className='ml-24 mt-0.2'>of 100</p>
          </div>
          <div>
            <p>Great</p>
          </div>
          <div>
            <pre>
              {`You scored higher than 65% of
  the people who have taken
        these tests.`}
            </pre>
          </div>
        </div>
        <div className='bg-white w-auto h-auto'>
          <div>
            <p>Summary</p>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default ResultSummary
