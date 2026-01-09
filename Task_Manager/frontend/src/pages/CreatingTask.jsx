import React from "react";
import axios from "axios";
import { useState } from "react";

const CreatingTask = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    async function createTask() {
        try {
            let res = await axios.post(
                "http://localhost:8080/api/task/create",
                formData,
                { withCredentials: true }
            );
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await createTask();
    };

   const handleOnchange = (e) => {
       const { name, value } = e.target;
       setFormData((prev) => ({
           ...prev,
           [name]: value,
       }));
   };

    return (
        <div className="bg-gray-200 h-[55%] w-[50%] rounded-2xl shadow-2xs hover:shadow-2xl flex flex-col gap-5 text-center mt-10">
            <div className="mt-2">
                <p className="text-2xl font-bold">Task Manager</p>
                <p>Organize your work </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter new Tasks....."
                        className="border rounded h-10 w-[70%] mt-5"
                        name="title"
                        value={formData.title}
                        onChange={handleOnchange}
                    />
                    <textarea
                        placeholder="Add Description.."
                        className="border rounded h-10 w-[70%] mt-5"
                        value={formData.description}
                        name="description"
                        onChange={handleOnchange}
                    ></textarea>
                    <div>
                        <button className="bg-gray-600 hover:bg-gray-800 px-5 py-2 rounded mt-2 text-white cursor-pointer">
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatingTask;
