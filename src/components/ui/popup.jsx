import React from "react";
import lines from '../../assets/lines.svg'
import GradientButton from "../ui/GradientButton";



export default function Popup({ message, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-10">
            <div className="relative bg-[#1a1a1a] text-white px-6 py-5 rounded-xl shadow-lg border border-yellow-500 max-w-sm w-[90%] text-center animate-fadeIn">
                <div className="absolute top-4 right-[0px] !z-0 w-[120px] h-[120px]">
                    <img src={lines} alt="" width="100%" height="-webkit-fill-available" />
                </div>
                <p className="text-base sm:text-lg mb-4 leading-relaxed">{message}</p>
                <GradientButton
                    onClick={onClose}
                    className="hover:text-white bg-black hover:bg-[#fefe00] text-white font-medium px-5 py-2 rounded transition"
                >
                    OK
                </GradientButton>
            </div>
        </div>
    );
}
