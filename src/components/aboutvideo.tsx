"use client";

interface AboutProps {
    name: string;
    role: string;
    quote: string;
    stats: string;
    videoUrl: string;
}

const about: AboutProps[] = [
    {
        name: "Our Founder",
        role: "",
        quote: "",
        stats: "",
        videoUrl: "/video/about.MP4",
    }
];

export default function Aboutvideo() {
    const currentTestimonial = about[0];

    return (
        <div className="min-h-[60vh] md:min-h-[90vh] flex items-center justify-center w-full p-4 pb-6 md:pb-20">
            <div className="max-w-6xl w-full">
                <h2 className="max-w-7xl mx-auto text-center text-4xl font-semibold mb-6 md:mb-16">Our Founder</h2>

                <div className="flex justify-center mb-8 md:mb-16">
                    <div className="relative w-full max-w-7xl aspect-video border border-zinc-500 rounded-lg">
                        <div className="w-full h-full rounded-lg overflow-hidden">
                            <video
                                src={currentTestimonial.videoUrl}
                                title={`${currentTestimonial.name} video`}
                                className="w-full h-full"
                                controls
                                muted
                                playsInline
                                autoPlay
                                loop
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
