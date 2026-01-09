import React, { useEffect, useState } from "react";
import axios from 'axios'

const AllTasks = () => {

    const[tasks,setTasks]=useState([])

     useEffect(() => {
         const fetchAllTasks = async () => {
             try {
                 const res = await axios.get(
                     "http://localhost:8080/api/task/getAll"
                 );
                 setTasks(res.data.Tasks); 
             } catch (error) {
                 console.error(
                     "Error fetching tasks:",
                     error.response?.data || error.message
                 );
             }
         };

         fetchAllTasks(); 
     }, []);


     async function deleteTask(id){
         try {
             const res = await axios.delete(
                 `http://localhost:8080/api/task/delete/${id}`
             );
         } catch (error) {
             console.error(
                 "Error fetching tasks:",
                 error.response?.data || error.message
             );
         }
     }

    return (
        <>
            <div className="mt-5 w-full p-10">
                <h2 className="text-2xl font-semibold mb-6">My Tasks</h2>

                <div className="grid gap-4">
                    {tasks.length === 0 ? (
                        <p className="text-gray-500">
                            No tasks yet. Add a task above!
                        </p>
                    ) : (
                        tasks.map((task) => (
                            <div
                                key={task._id}
                                className="bg-gray-100 rounded-2xl p-5 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        className="h-5 w-5"
                                    />
                                    <div>
                                        <p className="font-semibold text-lg">
                                            {task.title}
                                        </p>
                                        <p className="text-gray-600">
                                            {task.description}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => deleteTask(task._id)}
                                    className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default AllTasks;
