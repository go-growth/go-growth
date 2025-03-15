import CardCarousel from "@/components/CardCarousel";
import ContentApproach from "@/components/ContentApproach";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MenuItems from "@/components/MenuItems";
import Testimonials from "@/components/Testimonials";

export default function Home() {
	return (
		<>
			<Hero />
			<CardCarousel />
			<MenuItems />
			<HowItWorks />
			<ContentApproach />
			<Testimonials />
			<FAQ />
		</>
	);
}
