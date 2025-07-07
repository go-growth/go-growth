"use client";
import React from 'react'
import CardCarousel from './CardCarousel';
import ContentApproach from './ContentApproach';
import HowItWorks from './HowItWorks';
import MenuItems, { defaultServices } from './MenuItems';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Flipcard from './Flipcard';
import Idealfor from './Idealfor';

const GoGrowthConsult = () => {
    const consultationServices = defaultServices.map((service) => ({
        ...service,
        buttonText: "Consultation",
        buttonLink: "https://orufybookings.com/gogrowth/60-min",
    }));
    return (
        <div className="w-full min-h-screen relative overflow-hidden px-0 md:px-4 py-12 flex flex-col items-center justify-center bg-black">
            {/* Decorative elements */}
            <div className="absolute top-5 left-10 text-white text-2xl">*</div>
            <div className="absolute top-5 right-10 text-white text-2xl">*</div>
            <div className="absolute bottom-20 left-60 text-white text-2xl">*</div>
            <div className="absolute top-1/2 right-32 text-white text-2xl">*</div>
            <div className="hidden lg:block absolute top-1/4 left-1/4 text-gray-700 transform rotate-45">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 12L21 4L13 22L11 13L3 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <div className="hidden lg:block absolute bottom-1/4 right-1/4 text-gray-700">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto w-full pb-16">
                <div className="text-center mb-2 px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Not ready to hire us yet? <br /> Book a 1:1 Strategy Session
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto mt-2 mb-2 text-zinc-400 -">
                        If your brand is below ₹15L/month but you want expert guidance on what to fix, where to spend, and how to scale – this is for you.
                    </p>
                </div>

                <div className="text-center px-6  pt-6 border-b border-gray-700 mb-16">
                    {/* <h3 className="text-2xl font-bold text-white mb-4">
                        Want to Achieve Similar Growth?
                    </h3> */}
                    {/* <p className="text-gray-300 mb-6">
                        Whether you need more leads, higher sales, or brand growth, we know
                        what works.
                    </p> */}
                    <a
                        href="https://orufybookings.com/gogrowth/60-min" target="_blank" rel="noopener noreferrer"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-200 mb-6"
                    >
                        Book Your Strategy Session
                    </a>
                    <p className="text-zinc-400 mb-6 mt-6">
                        Session Fee: 20,000 INR (non-refundable)
                    </p>
                </div>

                {/* add cards here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
                    {/* Card 1 */}
                    <div className="flex flex-col md:flex-row items-center md:items-start bg-[#111] border border-gray-700 rounded-xl p-2 md:p-6">
                        {/* Image container with flex-2 */}
                        <div className=" flex justify-center md:justify-start">
                            <img
                                src="/consult/Untitleddesign(4).png"
                                alt="Sthalam Logo"
                                className="rounded-xl"

                            />
                        </div>

                        {/* Text container with flex-1 */}
                        {/* <div className="flex-[1]">
                                <h4 className="text-white text-xl font-semibold mb-2">
                                    How <span className="font-bold">Go Growth</span>
                                </h4>
                                <p className="text-gray-300 mb-1">
                                    Scaled a home décor brand <span className="text-white font-medium">Sthalam</span> from{" "}
                                    <span className="text-green-500">zero to daily orders</span>
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Achieved <span className="text-green-500">8x ROAS</span> on paid ad campaigns
                                </p>

                            </div> */}
                    </div>


                    {/* Card 2 */}
                    <div className="flex flex-col md:flex-row items-center md:items-start bg-[#111] border border-gray-700 rounded-xl p-2 md:p-6">
                        {/* Image container with flex-2 */}
                        <div className=" flex justify-center md:justify-start ">
                            <img
                                src="/consult/Untitleddesign(2).png"
                                alt="Sthalam Logo"
                                className="rounded-xl"

                            />
                        </div>

                        {/* Text container with flex-1 */}
                        {/* <div className="flex-[1]">
                                <h4 className="text-white text-xl font-semibold mb-2">
                                    How <span className="font-bold">Go Growth</span>
                                </h4>
                                <p className="text-gray-300 mb-1">
                                    Scaled a home décor brand <span className="text-white font-medium">Sthalam</span> from{" "}
                                    <span className="text-green-500">zero to daily orders</span>
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Achieved <span className="text-green-500">8x ROAS</span> on paid ad campaigns
                                </p>

                            </div> */}
                    </div>


                    {/* Card 3 */}
                    <div className="flex flex-col md:flex-row items-center md:items-start bg-[#111] border border-gray-700 rounded-xl p-2 md:p-6">
                        {/* Image container with flex-2 */}
                        <div className=" flex justify-center md:justify-start">
                            <img
                                src="/consult/Untitleddesign(1).png"
                                alt="Sthalam Logo"
                                className="rounded-xl"

                            />
                        </div>

                        {/* Text container with flex-1 */}
                        {/* <div className="flex-[1]">
                                <h4 className="text-white text-xl font-semibold mb-2">
                                    How <span className="font-bold">Go Growth</span>
                                </h4>
                                <p className="text-gray-300 mb-1">
                                    Scaled a home décor brand <span className="text-white font-medium">Sthalam</span> from{" "}
                                    <span className="text-green-500">zero to daily orders</span>
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Achieved <span className="text-green-500">8x ROAS</span> on paid ad campaigns
                                </p>

                            </div> */}
                    </div>


                    {/* Card 4 */}
                    <div className="flex flex-col md:flex-row items-center md:items-start bg-[#111] border border-gray-700 rounded-xl p-2 md:p-6">
                        {/* Image container with flex-2 */}
                        <div className=" flex justify-center md:justify-start">
                            <img
                                src="/consult/Untitleddesign.png"
                                alt="Sthalam Logo"
                                className="rounded-xl"

                            />
                        </div>
                        {/* Text container with flex-1 */}
                        {/* <div className="flex-[1]">
                                <h4 className="text-white text-xl font-semibold mb-2">
                                    How <span className="font-bold">Go Growth</span>
                                </h4>
                                <p className="text-gray-300 mb-1">
                                    Scaled a home décor brand <span className="text-white font-medium">Sthalam</span> from{" "}
                                    <span className="text-green-500">zero to daily orders</span>
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Achieved <span className="text-green-500">8x ROAS</span> on paid ad campaigns
                                </p>

                            </div> */}
                    </div>

                    {/* Card 5 */}
                    <div className="flex flex-col md:flex-row items-center md:items-start bg-[#111] border border-gray-700 rounded-xl p-2 md:p-6">
                        {/* Image container with flex-2 */}
                        <div className=" flex justify-center md:justify-start">
                            <img
                                src="/consult/Untitleddesign(5).png"
                                alt="Sthalam Logo"
                                className="rounded-xl"

                            />
                        </div>
                        {/* Text container with flex-1 */}
                        {/* <div className="flex-[1]">
                                <h4 className="text-white text-xl font-semibold mb-2">
                                    How <span className="font-bold">Go Growth</span>
                                </h4>
                                <p className="text-gray-300 mb-1">
                                    Scaled a home décor brand <span className="text-white font-medium">Sthalam</span> from{" "}
                                    <span className="text-green-500">zero to daily orders</span>
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Achieved <span className="text-green-500">8x ROAS</span> on paid ad campaigns
                                </p>

                            </div> */}
                    </div>

                    {/* Card 6 */}
                    <div className="flex flex-col md:flex-row items-center md:items-start bg-[#111] border border-gray-700 rounded-xl p-2 md:p-6">
                        {/* Image container with flex-2 */}
                        <div className=" flex justify-center md:justify-start">
                            <img
                                src="/consult/Untitleddesign(6).png"
                                alt="Sthalam Logo"
                                className="rounded-xl"
                            />
                        </div>
                        {/* Text container with flex-1 */}
                        {/* <div className="flex-[1]">
                                <h4 className="text-white text-xl font-semibold mb-2">
                                    How <span className="font-bold">Go Growth</span>
                                </h4>
                                <p className="text-gray-300 mb-1">
                                    Scaled a home décor brand <span className="text-white font-medium">Sthalam</span> from{" "}
                                    <span className="text-green-500">zero to daily orders</span>
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Achieved <span className="text-green-500">8x ROAS</span> on paid ad campaigns
                                </p>

                            </div> */}
                    </div>

                </div>


                {/* <div className="text-center mt-16 pt-6 border-t border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Want to Achieve Similar Growth?
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Whether you need more leads, higher sales, or brand growth, we know
                        what works.
                    </p>
                    <a
                        href="https://calendly.com/admin-gogrowth/60min" target="_blank" rel="noopener noreferrer"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-200"
                    >
                        Book Your Strategy Session
                    </a>
                </div> */}
            </div>


            <Flipcard />
            <Idealfor />
            <CardCarousel />
            <MenuItems services={consultationServices} />
            <HowItWorks />
            <ContentApproach />
            <Testimonials />
            <FAQ />
        </div>
    )
}

export default GoGrowthConsult;