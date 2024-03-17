import React, { useState } from 'react'

const EnquiryForm = () => {
      const [name,setName]=useState('');
      const [email,setEmail]=useState("");
      const [msg,setMsg]=useState("");
      
      const handleSubmit=(e)=>{
        //call your api here
      }

    return (
        <div className='bg-[#d6763b] pt-[15px] lg:pt-[40px]'>
            <p className='text-center font-bold text-[15px] lg:text-[32px] text-white'>Enquiry Form</p>
            <div className='w-[80%] h-auto lg:h-auto mx-auto mt-[50px]'>
                <div className='bg-[#D4B294] h-[38px] lg:h-[100px]  rounded-t-[16px] rounded-tr-[16px] font-bold text-[8px] lg:text-[24px] flex items-center justify-center text-[#7D3C13]'>GET IN TOUCH</div>
                <div className='h-auto lg:h-auto bg-[#7D3C13] pb-6 lg:pb-10 rounded-b-[16px]'>
                    <div className='w-[80%] mx-auto'>
                        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Type your Name :-' className='w-full pl-[30px] font-light text-[16px] lg:text-[20px] text-white mx-auto h-[34px] outline-none lg:h-[81px] bg-gradient-to-tl from-[#7D3C13]   mt-[24px] lg:mt-[50px] to-[#be8a5c]' />
                    </div>
                    <div className='w-[80%] mx-auto'>
                        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Type your Email :-' className='w-full pl-[30px] font-light text-[16px] lg:text-[20px]  mx-auto h-[34px] outline-none lg:h-[81px] bg-gradient-to-tl from-[#7D3C13] text-white  mt-[24px] lg:mt-[50px] to-[#be8a5c]' />
                    </div>
                    <div className='w-[80%] mx-auto'>
                        <textarea onChange={(e)=>setMsg(e.target.value)} rows={4} placeholder='Any Message for Us :-' className='w-full pl-[30px] font-light text-[16px] lg:text-[20px]  mx-auto  outline-none  bg-gradient-to-tl from-[#7D3C13] text-white  mt-[24px] lg:mt-[50px] to-[#be8a5c]'>{msg}</textarea>
                    </div>
                    <div className='mt-4 lg:mt-7 '>
                        <button className='w-[150px] h-[50px] lg:w-[213px] mx-auto rounded-[5px] lg:h-[57px] bg-[#D4B294] flex items-center justify-center'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnquiryForm