import React from 'react'
import Navbar from './Navbar';
import CreatingTask from './CreatingTask';
import AllTasks from './AllTasks';

const DashBoard = () => {
  return (
      <div className="flex w-full h-full bg-green-400">
          <div className="w-full h-auto flex ">
              <div className=" bg-gray-800 h-full w-[20%]">
                  <Navbar />
              </div>
              <div className=" bg-gray-300 h-full w-[80%] flex  items-center flex-col">
                  <CreatingTask />
                  <AllTasks />
              </div>
          </div>
      </div>
  );
}

export default DashBoard