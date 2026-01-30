import { useGSAP } from "@gsap/react";
import { createFileRoute } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export const Route = createFileRoute("/")({
	head: () => ({
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					name: "Gustavo Malaquias",
					url: "https://hsm-gustavo.dev",
					jobTitle: "Full-Stack Developer",
					worksFor: {
						"@type": "Organization",
						name: "Rápido Infoshop",
					},
					alumniOf: {
						"@type": "CollegeOrUniversity",
						name: "UFAL - Federal University of Alagoas",
					},
					sameAs: [
						"https://www.linkedin.com/in/gustavo-hs-malaquias",
						"https://github.com/hsm-gustavo",
					],
					knowsAbout: [
						"Go",
						"TypeScript",
						"React",
						"Next.js",
						"Nestjs",
						"Linux",
						"System Architecture",
						"Full-Stack Development",
					],
				}),
			},
		],
	}),
	component: App,
});

function App() {
	useGSAP(() => {
		/* 
		refer to https://gsap.com/community/forums/topic/35444-section-overlap-effect-on-scroll/
		*/

		ScrollSmoother.create({
			smooth: 1.2,
			effects: true,
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			normalizeScroll: true,
			ignoreMobileResize: true,
		});

		const panels = gsap.utils.toArray<HTMLElement>(".panel");

		panels.forEach((panel, _) => {
			ScrollTrigger.create({
				trigger: panel,
				start: () =>
					panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
				pin: true,
				pinSpacing: false,
			});
		});
	}, []);

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: it is unique, controlled by me since its not a list of elements
		<main
			className="min-h-screen bg-linear-to-b from-background via-white to-background"
			id="smooth-wrapper"
		>
			{/* biome-ignore lint/correctness/useUniqueElementIds: it is unique, controlled by me since its not a list of elements */}
			<div id="smooth-content">
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</main>
	);
}
