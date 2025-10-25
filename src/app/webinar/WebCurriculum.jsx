"use client";
import { Brain } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import mainbrain from "../../assets/Main brain.png"
import halfbrain from "../../assets/halfbrain.png"
import dot from "../../assets/Dot Background.svg";


export default function Component() {
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRefs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index)
          }
        },
        { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return observer
    })

    // Scroll progress calculation for the dotted line
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate progress based on center of screen position
      const centerY = scrollY + windowHeight / 2

      // Get the line container element position
      const lineElement = document.querySelector('.dotted-line-container')
      if (lineElement) {
        const rect = lineElement.getBoundingClientRect()
        const lineTop = rect.top + scrollY
        const lineHeight = rect.height

        // Calculate progress when center of screen passes through the line
        const relativePosition = centerY - lineTop
        const progress = Math.max(0, Math.min(1, relativePosition / lineHeight))

        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => {
      observers.forEach((observer) => observer.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Generate dots for the connecting line
  const generateDots = () => {
    const dots = []
    const totalDots = 50 // Number of dots in the line

    for (let i = 0; i < totalDots; i++) {
      const dotProgress = i / (totalDots - 1)
      const isActive = scrollProgress >= dotProgress

      dots.push(
        <div
          key={i}
          className={`w-1 h-1 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#e0a695]' : 'bg-gray-600'
            }`}
          style={{
            position: 'absolute',
            top: `${dotProgress * 100}%`,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      )
    }

    return dots
  }

  return (
    <div className="relative text-white min-h-screen pb-16 sm:pb-[158px] px-4 sm:px-4 max-w-[1600px] mx-auto overflow-hidden">

      <div className="absolute grid-svg bottom-[20px] left-[-160px] sm:bottom-[-30px] sm:left-[-298px] !z-0">
        <img src={dot} alt="" width="" height="" />
      </div>

      <div className="absolute bottom-160 right-26">
        <svg class="mobsvg" width="356" height="380" viewBox="0 0 356 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6">
            <path opacity="0.5" d="M152.425 109.357V108.357H151.425V109.357H152.425ZM147.091 374.492C147.091 377.437 149.479 379.825 152.425 379.825C155.37 379.825 157.758 377.437 157.758 374.492C157.758 371.546 155.37 369.158 152.425 369.158C149.479 369.158 147.091 371.546 147.091 374.492ZM355.991 109.357V108.357H152.425V109.357V110.357H355.991V109.357ZM152.425 109.357H151.425V374.492H152.425H153.425V109.357H152.425Z" fill="url(#paint0_linear_313_3598)" />
            <path opacity="0.5" d="M0.666667 191.744C0.666667 194.689 3.05448 197.077 6 197.077C8.94552 197.077 11.3333 194.689 11.3333 191.744C11.3333 188.798 8.94552 186.411 6 186.411C3.05448 186.411 0.666667 188.798 0.666667 191.744ZM355.991 191.744V190.744H191.71V191.744V192.744H355.991V191.744ZM191.71 191.744V190.744H6V191.744V192.744H191.71V191.744Z" fill="url(#paint1_linear_313_3598)" />
            <path opacity="0.5" d="M193.498 281.62C193.498 284.565 195.886 286.953 198.831 286.953C201.777 286.953 204.164 284.565 204.164 281.62C204.164 278.674 201.777 276.287 198.831 276.287C195.886 276.287 193.498 278.674 193.498 281.62ZM356.011 281.62V280.62H282.232V281.62V282.62H356.011V281.62ZM282.232 281.62V280.62H198.831V281.62V282.62H282.232V281.62Z" fill="url(#paint2_linear_313_3598)" />
            <path opacity="0.5" d="M109.569 157.291V156.291H108.569V157.291H109.569ZM104.236 293.603C104.236 296.549 106.624 298.937 109.569 298.937C112.515 298.937 114.903 296.549 114.903 293.603C114.903 290.658 112.515 288.27 109.569 288.27C106.624 288.27 104.236 290.658 104.236 293.603ZM355.992 157.291V156.291H109.569V157.291V158.291H355.992V157.291ZM109.569 157.291H108.569V293.603H109.569H110.569V157.291H109.569Z" fill="url(#paint3_linear_313_3598)" />
            <path opacity="0.5" d="M191.71 142.312V143.312H190.71V142.312H191.71ZM186.377 6C186.377 3.05447 188.764 0.666672 191.71 0.666672C194.655 0.666672 197.043 3.05447 197.043 6C197.043 8.94551 194.655 11.3333 191.71 11.3333C188.764 11.3333 186.377 8.94551 186.377 6ZM355.992 142.312V143.312H191.71V142.312V141.312H355.992V142.312ZM191.71 142.312H190.71V6H191.71H192.71V142.312H191.71Z" fill="url(#paint4_linear_313_3598)" />
            <path opacity="0.5" d="M64.9268 224.698V225.698H63.9268V224.698H64.9268ZM59.5934 88.3864C59.5934 85.4408 61.9812 83.053 64.9268 83.053C67.8723 83.053 70.2601 85.4408 70.2601 88.3864C70.2601 91.3319 67.8723 93.7197 64.9268 93.7197C61.9812 93.7197 59.5934 91.3319 59.5934 88.3864ZM355.991 224.698V225.698H64.9268V224.698V223.698H355.991V224.698ZM64.9268 224.698H63.9268V88.3864H64.9268H65.9268V224.698H64.9268Z" fill="url(#paint5_linear_313_3598)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_313_3598" x1="355.991" y1="109.357" x2="199.114" y2="399.717" gradientUnits="userSpaceOnUse">
              <stop stop-color="#000100" />
              <stop offset="1" stop-color="#e0a695" />
            </linearGradient>
            <linearGradient id="paint1_linear_313_3598" x1="371.17" y1="191.744" x2="6" y2="191.744" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3E3E00" />
              <stop offset="1" stop-color="#e0a695" />
            </linearGradient>
            <linearGradient id="paint2_linear_313_3598" x1="355.991" y1="281.62" x2="198.852" y2="281.62" gradientUnits="userSpaceOnUse">
              <stop stop-color="#000100" />
              <stop offset="1" stop-color="#e0a695" />
            </linearGradient>
            <linearGradient id="paint3_linear_313_3598" x1="364.027" y1="152.049" x2="138.567" y2="330.284" gradientUnits="userSpaceOnUse">
              <stop stop-color="#000100" />
              <stop offset="1" stop-color="#e0a695" />
            </linearGradient>
            <linearGradient id="paint4_linear_313_3598" x1="355.992" y1="142.312" x2="220.023" y2="-18.0122" gradientUnits="userSpaceOnUse">
              <stop stop-color="#000100" />
              <stop offset="1" stop-color="#e0a695" />
            </linearGradient>
            <linearGradient id="paint5_linear_313_3598" x1="355.991" y1="224.698" x2="91.4004" y2="48.6076" gradientUnits="userSpaceOnUse">
              <stop stop-color="#000100" />
              <stop offset="1" stop-color="#e0a695" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-10 sm:mb-20 flex flex-col items-center justify-center relative z-10">
        <h2 className="max-w-6xl text-3xl font-bold mb-4">Master the Core Systems of a High-Performance Ecommerce Brand in Just 90 Minutes</h2>

        <div className="max-w-2xl mx-auto">
          <p className="text-xl font-semibold mb-4">Learn the strategies, systems, and shortcuts to scale your store — from SEO and ads to website optimization. No fluff, just proven methods that increase sales.</p>
          {/* <p className="text-gray-300 text-sm leading-relaxed">
            We recommend setting aside
            <span className="!text-[15px] sm:!text-[22px] !text-[#e0a695]"> 90 minutes </span>
            of focused time to fully engage, take notes, and apply the strategies from this webinar.
          </p> */}
        </div>
      </div>

      <div className="absolute left-1/2 top-[44%] transform -translate-x-1/2 -translate-y-1/2 inset-0 w-full sm:w-[82%] hidden sm:block">
        <img src={mainbrain} alt="" />
      </div>

      <div className="absolute left-30 top-[36%] transform -translate-x-1/2 -translate-y-1/2 block sm:hidden">
        <img src={halfbrain} alt="" />
      </div>

      {/* Timeline */}
      <div className="fontsizemockstyle z-1 max-w-4xl mx-auto relative mx-4" style={{ height: "fit-content" }}>
        {/* Background image container - full width from first to last brain */}

        {/* Vertical connecting line - only from first to last brain */}
        <div
          className="absolute left-3 sm:left-1/2 transform -translate-x-1/2 dotted-line-container"
          style={{
            top: "2rem",
            bottom: "22rem",
            width: "2px",
          }}
        >
          {generateDots()}
        </div>

        {/* Month 1 - Essentials */}
        <div className="flex flex-row-reverse w-fit sm:w-auto sm:flex-row items-start mb-16" ref={sectionRefs[0]}>
          <div className=" sm:w-1/2 w-full pr-0 sm:pr-8">
            <div className="w-[260px] sm:w-auto bg-black/20 border-2 border-[#2a2a2a] backdrop-blur-md p-6 rounded-lg border border-white/10">
              <p className="!font-semibold mb-2"></p>
              <h2 className="font-bold !text-[#e0a695] !text-[14px] sm:!text-[28px] mb-4">Traffic & Visibility (20 min)</h2>
              <p className="text-gray-400 text-sm mb-4">THE FOUNDATION</p>

              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>SEO Blueprint – Ranking your store for high-intent keywords that drive sales.</span>
                </li>
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Paid Ads That Convert – Running Google & Meta ads profitably.</span>
                </li>
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Content Strategy – How to create content that attracts and converts shoppers.</span>
                </li>
                {/* <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Pricing Models That Scale – Retainer, performance-based, and hybrid approaches that maximize profitability.</span>
                </li> */}
                {/* <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Verbal Aikido: Stay composed in pressure, interruptions, or conflict</span>
                </li> */}
                {/* <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Gestures & Body Language That Signal Authority</span>
                </li> */}
              </ul>
            </div>
          </div>

          <div className={`flex items-center absolute left-[-24px] sm:left-[0px] sm:relative justify-center bg-black w-[54px] h-[34px] sm:w-18 sm:h-12 rounded-full border-2 border-white-600 relative z-10 ${activeSection === 0 ? "text-[#e0a695]" : "text-white-400"}`}>
            <Brain className={`w-8 h-6 sm:w-8 sm:h-8 ${activeSection === 0 ? "text-[#e0a695]" : "text-white-400"}`} />
          </div>

          <div className="w-1/2 pl-0 sm:pl-8"></div>
        </div>

        {/* Month 2 - The Development */}
        <div className="flex w-fit sm:w-auto items-start mb-16" ref={sectionRefs[1]}>
          <div className="w-1/2 pr-0 sm:pr-8"></div>

          <div className={`flex items-center ml-1 sm:ml-0 absolute left-[-28px] sm:left-[0px] sm:relative justify-center !bg-black w-[54px] h-[34px] sm:w-18 sm:h-12 rounded-full bg-black/20 backdrop-blur-mdl border-2 border-white-600 relative z-10 ${activeSection === 1 ? "text-[#e0a695]" : "text-white-400"}`}>
            <Brain className={`w-8 h-6 sm:w-8 sm:h-8 ${activeSection === 1 ? "text-[#e0a695]" : "text-white-400"}`} />
          </div>

          <div className="sm:w-1/2 w-full pl-0 sm:pl-8">
            <div className="w-[260px] sm:w-auto bg-black/20 border-2 border-[#2a2a2a] backdrop-blur-md p-6 rounded-lg">
              <p className="font-semibold mb-2"></p>
              <h2 className="font-bold !text-[#e0a695] !text-[14px] sm:!text-[28px] mb-4">Website Optimization (25 min)</h2>
              <p className="mb-4">THE EXPERIENCE</p>

              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Conversion Design – Turning clicks into checkouts with proven CRO principles.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Speed & UX Fixes – Reducing bounce rates with fast, seamless experiences.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Funnel Optimization – Building flows that maximize AOV and repeat orders.</span>
                </li>
                {/* <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Language of Authority: Eliminate filler language, sound sharper and more decisive</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mental Models for Clarity: Frame thoughts like a strategist, not a rambler</span>
                </li> */}
                {/* <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Vlog & Film Video Frameworks (Personal Story + Offer)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Speaking Prompts to Practice for High-Stakes Scenarios</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* Month 3 - Mastery */}
        <div className="w-fit sm:w-auto flex flex-row-reverse sm:flex-row items-start mb-16" ref={sectionRefs[2]}>
          <div className="sm:w-1/2 w-full pr-0 sm:pr-8">
            <div className="w-[260px] sm:w-auto bg-black/20 border-2 border-[#2a2a2a] backdrop-blur-md p-6 rounded-lg">
              <p className="font-semibold mb-2"></p>
              <h2 className="font-bold !text-[#e0a695] !text-[14px] sm:!text-[28px] mb-4">Retention & Scaling Systems (25 min)</h2>
              <p className="mb-4">THE GROWTH</p>

              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Email & SMS Playbook – Driving 20–30% of revenue from owned channels.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Upsell & Cross-Sell Systems – Increasing order value without more ad spend.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Analytics & Tracking – Knowing exactly what drives profit (and what doesn’t).</span>
                </li>
                {/* <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Positioning as a Premium Provider</span>
                </li>
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Framework Delivery: Build mental slides for any topic and deliver without rambling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Decision Driving: Use voice and narrative to move people to take action</span>
                </li> */}
              </ul>
            </div>
          </div>


          <div className={`flex items-center absolute ml-1 sm:ml-0 left-[-28px] sm:left-[0px] sm:relative justify-center bg-black w-[54px] h-[34px] sm:w-18 sm:h-12  rounded-full border-2 border-white-600 relative z-10 ${activeSection === 2 ? "text-[#e0a695]" : "text-white-400"}`}>
            <Brain className={`w-8 h-6 sm:w-8 sm:h-8  ${activeSection === 2 ? "text-[#e0a695]" : "text-white-400"}`} />
          </div>

          <div className="w-1/2 pl-0 sm:pl-8"></div>
        </div>

        <div className="flex w-fit sm:w-auto items-start mb-16" ref={sectionRefs[1]}>
          <div className="w-1/2 pr-0 sm:pr-8"></div>

          <div className={`flex items-center ml-1 sm:ml-0 absolute left-[-28px] sm:left-[0px] sm:relative justify-center !bg-black w-[54px] h-[34px] sm:w-18 sm:h-16 rounded-full bg-black/20 backdrop-blur-mdl border-2 border-white-600 relative z-10 ${activeSection === 1 ? "text-[#e0a695]" : "text-white-400"}`}>
            <Brain className={`w-8 h-6 sm:w-8 sm:h-8 ${activeSection === 1 ? "text-[#e0a695]" : "text-white-400"}`} />
          </div>

          <div className="sm:w-1/2 w-full pl-0 sm:pl-8">
            <div className="w-[260px] sm:w-auto bg-black/20 border-2 border-[#2a2a2a] backdrop-blur-md p-6 rounded-lg">
              <p className="font-semibold mb-2"></p>
              <h2 className="font-bold !text-[#e0a695] !text-[14px] sm:!text-[28px] mb-4">Beyond 6 Figures (20 min)</h2>
              <p className="mb-4">THE FUTURE</p>

              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Scaling Ads Without Wasting Spend – Frameworks for profitable scaling.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hiring & Outsourcing – Bringing in the right people to grow faster.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Tools & Automation – Systems that save hours and compound growth.</span>
                </li>
                {/* <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Positioning as a Premium Provider</span>
                </li>
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Framework Delivery: Build mental slides for any topic and deliver without rambling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Decision Driving: Use voice and narrative to move people to take action</span>
                </li> */}
              </ul>
            </div>
          </div>

        </div>

      </div>

      <div className="relative z-1 max-w-3xl mx-auto mt-20">
        <div className="flex justify-center mb-10">
          <h2 className="text-[#e0a695] flex items-center gap-2 text-center">
            Your Store Doesn’t Need More Discounts. It Needs a System.
          </h2>
        </div>

        <div className="space-y-8">
          <div className="flex items-start gap-4 border-b border-[#e0a695] py-6">
            {/* <div className="currsvg sm:w-[52] sm:h-[52]">
              <img src={discussiionicon} alt="" />
            </div> */}
            <div>
              {/* <h4 className="!font-semibold text-lg text-white">Live 1:1 Feedback</h4> */}
              <p className="!text-gray-400 text- text-center">In just 90 minutes, you’ll learn the exact frameworks top ecommerce brands use to grow traffic, boost sales, and scale revenue consistently.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-[#e0a695] pb-6">
            {/* <div className="currsvg sm:w-[52] sm:h-[52]">
              <img src={maskicon} alt="" />
            </div> */}
            <div>
              {/* <h4 className="!font-semibold text-lg text-white">High-Stake Projects</h4> */}
              <p className="!text-gray-400 text-sm text-center">This isn’t another free session — it’s a paid, limited-seat masterclass designed for founders serious about growth.</p>
            </div>
          </div>

          {/* <div className="flex items-start gap-4 border-b border-[#e0a695] pb-6">
            <div className="currsvg sm:w-[52] sm:h-[52]">
              <img src={trophyicon} alt="" />
            </div>
            <div>
              <h4 className="!font-semibold text-lg text-white">Secure your seat now before registrations close.</h4>
              <p className="!text-gray-400 text-sm">Present your skills to elite judges. No scripts. Just you.</p>
            </div>
          </div> */}
        </div>

        {/* <div className="flex justify-center mt-10">
          <p className="!font-semibold text-lg text-white flex items-center gap-2 text-center">
            become the go-to brand in your industry | become the go-to brand in your industry | become the go-to brand in your industry |
          </p>
        </div> */}

      </div>

    </div>
  )
}