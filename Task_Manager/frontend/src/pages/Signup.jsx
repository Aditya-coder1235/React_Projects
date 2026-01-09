import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'

const Signup = () => {
  const navigate=useNavigate()

  const[formData,setFormData]=useState({
    name:'',
    email:'',
    password:''
  });

  async function signupUser(){
    let res = await axios.post("http://localhost:8080/api/auth/signup",formData);
    alert("user register Success")
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await signupUser()
    navigate('/login')
  }

  const handleOnchange=(e)=>{
    let {name,value}=e.target
    setFormData({...formData,
      [name]:value
    })
  }

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                  Create Account
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleOnchange}
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />

                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleOnchange}
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />

                  <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleOnchange}
                      placeholder="Password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />

                  <button
                      type="submit"
                      className="w-full bg-gray-800 text-white py-2 rounded-md 
                   hover:bg-gray-700 transition"
                  >
                      Signup
                  </button>
              </form>

              <p className="text-sm text-gray-600 text-center mt-4">
                  Already have an account?
                  <span className="text-gray-800 font-medium cursor-pointer ml-1" onClick={()=>navigate('/login')}>
                      Login
                  </span>
              </p>
          </div>
      </div>
  );
}

export default Signup