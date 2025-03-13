import CardCarousel from "@/components/CardCarousel";
import ContentApproach from "@/components/ContentApproach";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MenuItems from "@/components/MenuItems";
import PromotionCards from "@/components/PromotionCards";
// import SocialMediaCards from "@/components/SocialMediaCard";
import Testimonials from "@/components/Testimonials";

export default function Home() {
	return (
		<>
			<Hero />
			<CardCarousel />
			<PromotionCards />
			<HowItWorks />
			<ContentApproach />
			{/* <SocialMediaCards /> */}
			<Testimonials />
			<MenuItems />
			<FAQ />
		</>
	);
}
