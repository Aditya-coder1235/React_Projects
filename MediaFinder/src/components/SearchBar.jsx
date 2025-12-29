import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
    const [text, setText] = useState("");

    const dispatch=useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="flex bg-gray-900 p-10 gap-10">
                <input
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                }}
                    type="text"
                    placeholder="Search anything"
                    required
                    className="w-full border-2 px-4 py-2 text-xl rounded outline-none"
                />
                <button className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
