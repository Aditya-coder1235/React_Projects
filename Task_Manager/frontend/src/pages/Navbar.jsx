import React from 'react'
import { Link,useNavigate } from 'react-router';
import axios from 'axios'

const Navbar = () => {
    const navigate=useNavigate()

    async function Logout(){
        try {
            let res = await axios.post(
                "http://localhost:8080/api/auth/logout",
            );
            localStorage.clear();
            alert("user Logout");
            navigate('/login')
        } catch (err) {
            alert("Error",err);
        }
    }

  return (
      <div className="text-white flex flex-col gap-4 pt-12 ps-10 h-screen">
          <div className="text-2xl font-bold">Task Manager</div>
  
          <Link to={"/signup"} className="font-semibold mt-5">
              Signup
          </Link>
          <Link to={"/login"} className="font-semibold ">
              Login
          </Link>
          <div className="font-semibold cursor-pointer" onClick={()=>Logout()}>Logout</div>
          <Link to={"/profile"} className="font-semibold ">
              Profile
          </Link>
      </div>
  );
}

export default Navbar