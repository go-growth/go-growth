import React from 'react';

interface CardData {
    icon: string;
    title: string;
    description: string;
}

const IdealForSection: React.FC = () => {
    const cardData: CardData[] = [
        {
            icon: '📈',
            title: 'Stagnant Growth',
            description: 'Founders unsure why growth is plateauing and need actionable insights to break through barriers'
        },
        {
            icon: '🚀',
            title: 'Scale Preparation',
            description: 'Brands prepping for scale or new product launches who need strategic foundation'
        },
        {
            icon: '🎯',
            title: 'DTC Clarity',
            description: 'DTC startups needing clarity on marketing, branding, or funnel direction'
        },
        {
            icon: '💡',
            title: 'Real Strategy',
            description: 'Anyone tired of scattered advice and ready for real, results-focused strategy'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto w-full pt-16 pb-16">
            <div className="rounded-3xl p-4 md:p-8 border border-zinc-800">
                {/* Title */}
                <div className="text-center mb-4 md:mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        This Is Perfect For
                    </h2>
                    <div className="w-16 h-1 bg-teal-400 mx-auto rounded-full"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 md:mt-12">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="w-full border border-zinc-800 rounded-3xl p-6 md:p-6"
                        >
                            {/* Icon */}
                            {/* <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5">
                                {card.icon}
                            </div> */}

                            {/* Content */}
                            <div>
                                <h3 className="text-3xl font-medium text-center text-white mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IdealForSection;