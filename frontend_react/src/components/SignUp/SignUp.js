import React from 'react'
import "./SignUp.css"

const SignUp = () => {
     return (
          <div className='signup-container'>
               <div className='signup-form'>
                    <h1 className='text-2xl mb-4'>Sign Up</h1>
                    <div className='input-section'>
                         <p>Email :</p>
                         <input type='email' placeholder='Enter your email...' className='w-full !p-2 !pl-[10px] rounded-[10px] bg-[#141414] text-white outline-none focus:outline-none focus:ring-2 focus:ring-[#00bfff] transition-all duration-300' />
                    </div>
                    <div className='input-section my-4'>
                         <p>Password :</p>
                         <input type='password' placeholder='Enter your password...' className='w-full !p-2 !pl-[10px] rounded-[10px] bg-[#141414] text-white outline-none focus:outline-none focus:ring-2 focus:ring-[#00bfff] transition-all duration-300' />
                    </div>
                    <div className='input-section'>
                         <p>Confirm Password :</p>
                         <input type='password' placeholder='Re-enter your password...' className='w-full !p-2 !pl-[10px] rounded-[10px] bg-[#141414] text-white outline-none focus:outline-none focus:ring-2 focus:ring-[#00bfff] transition-all duration-300' />
                    </div>
                    <div className='w-fit mx-auto mt-4 p-2 px-5 rounded-xl bg-[#141414] hover:bg-[#00bfff] transition-all duration-300 group cursor-pointer'>
                         <p className='font-bold group-hover:tracking-widest transition-all duration-300'>Submit</p>
                    </div>
               </div>
          </div>
     )
}

export default SignUp