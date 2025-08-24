import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Review = () => {
	const testimonials = [
		{
			quote: "We struggled with user drop-offs for months. Web Rocket redesigned our dashboard with intuitive workflows, and our retention skyrocketed by 40% in 30 days. Their team actually listens to users—no ego, just data-driven design.",
			name: "Sarah Chen",
			designation: "Product Manager at TechFlow",
			src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			quote: "“Our old branding looked like every other brewery. Web Rocket gave us a bold, hoppy-inspired identity that’s now on merch, trucks, and even trade shows. Sales jumped 65% post-rebrand—worth every penny.”",
			name: "Michael Rodriguez",
			designation: "CTO at InnovateSphere",
			src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			quote: "Our retention surged 40% in just 30 days after the redesign. The dashboard now feels effortless—intuitive workflows turn complexity into clarity. Their team listens, adapts, and delivers design driven by real user needs.",
			name: "Emily Watson",
			designation: "Operations Director at CloudScale",
			src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			quote: "Outstanding support and robust features make this product stand out. It’s rare to find a solution that not only keeps every promise but also exceeds expectations, empowering our team with reliability, clarity, and lasting impact..",
			name: "James Kim",
			designation: "Engineering Lead at DataPro",
			src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			quote: "The scalability and performance have been absolute game-changers for our organization. This solution adapts seamlessly as we grow, ensuring reliability and speed at every step. I highly recommend it to any business with big ambitions. ",
			name: "Lisa Thompson",
			designation: "VP of Technology at FutureNet",
			src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];

	return <AnimatedTestimonials testimonials={testimonials} />;
};

export default Review;
