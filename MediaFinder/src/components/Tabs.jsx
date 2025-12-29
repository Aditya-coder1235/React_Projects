import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
    const tabs = ["photos", "videos", "GIF"];

    const dispatch=useDispatch()

    const activeTab=useSelector((state)=>state.search.activeTab)



    return (
        <div className="flex gap-10 p-10 ">
            {tabs.map((ele, idx) => {
                return (
                    <button
                        key={idx}
                        className={`${(activeTab===ele?'bg-blue-700':'bg-gray-600')}  px-5 py-2 rounded uppercase cursor-pointer active:scale-95 transition`}
                        onClick={() => dispatch(setActiveTabs(ele))}
                    >
                        {ele}
                    </button>
                );
            })}
        </div>
    );
};

export default Tabs;
