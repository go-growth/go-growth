"use client";
import dot from "../../assets/Dot Background.svg";

// import GradientButton from "../../components/ui/GradientButton";

export default function WebHero() {
  // useEffect(() => {
  //   if (!document.getElementById("razorpay-embed-btn-js")) {
  //     const script = document.createElement("script");
  //     script.defer = true;
  //     script.id = "razorpay-embed-btn-js";
  //     script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
  //     document.body.appendChild(script);
  //   } else {
  //     const rzp = window["_rzp_"];
  //     rzp && rzp.init && rzp.init();
  //   }
  // }, []);

  return (
    <section className="relative bg-black overflow-hidden text-white min-h-[550px] sm:min-h-screen flex items-center justify-center px-1 py-0 sm:py-20 pb-0">
      {/* Background Illustration */}
     

      {/* Dot SVG background */}
      <div className="absolute grid-svg hero-gridsvg bottom-[-168px] right-[-534px] [@media(min-width:1600px)]:right-[-644px] !z-6">
        <img src={dot} alt="Decorative dots" />
      </div>

      {/* Content */}
      <div className="max-w-6xl text-center z-10">
        <h1 className="leading-tight mb-6 text-5xl sm:text-7xl font-bold">
          Unlock real ecommerce profits 
        </h1>

        <p className="px-2 sm:py-0 max-w-3xl mx-auto text-gray-300">
          Gurmeet has taken years of building <span class="text-[#e0a695]">ecommerce</span> brands and created a framework that shows exactly how to grow revenue today. In this live session, you’ll see the step-by-step process that actually works.        
        </p>
        <p className="text-sm text-gray-400 font-semibold my-4 mb-2">
          8 Nov 2025 | 02:00 PM IST
        </p>


        {/* CTA Button */}
        <button
          className="border-2 border-white/50 hover:bg-[#3d2c2a]] text-white text-lg px-10 py-4 my-4 rounded-full transition-colors duration-200"
          onClick={() => {
            window.open(
              "https://rzp.io/rzp/ecommerce-masterclass",
              "_blank"
            );
          }}
        >
          RESERVE MY SEAT
        </button>

        <p className="text-sm font-semibold mt-2 text-[#e0a695]">
          Paid Live Webinar | Limited Seats
        </p>
      </div>
    </section>
  );
}
