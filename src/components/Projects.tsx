import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { projects } from "@/data/projects";
import Button from "./ui/button";
import { ProjectCard } from "./ui/project-card";

export default function Projects() {
	/* 
	the idea here is to increase the lightness of the background color for every section
	to create a contrast with the previous one, making the user feel that they are moving
	forward in the page
	*/
	const listRef = useRef<HTMLDivElement>(null);
	const hoverRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!listRef.current || !hoverRef.current) return;

		const items = gsap.utils.toArray<HTMLDivElement>(
			listRef.current.querySelectorAll(".project-card"),
		);

		gsap.set(hoverRef.current, {
			scale: 0,
		});

		items.forEach((item) => {
			item.addEventListener("mouseenter", (e: MouseEvent) => {
				if (!listRef.current || !hoverRef.current) return;

				const bounds = item.getBoundingClientRect();
				const parentBounds = listRef.current.getBoundingClientRect();

				const mouseX = e.clientX - bounds.left;
				const mouseY = e.clientY - bounds.top;

				const originX = (mouseX / bounds.width) * 100;
				const originY = (mouseY / bounds.height) * 100;

				const isFirstHover = gsap.getProperty(hoverRef.current, "scale") === 0;

				gsap.killTweensOf(hoverRef.current);

				if (isFirstHover) {
					gsap.set(hoverRef.current, {
						x: bounds.left - parentBounds.left,
						y: bounds.top - parentBounds.top,
						width: bounds.width,
						height: bounds.height,
						transformOrigin: `${originX}% ${originY}%`,
					});

					gsap.to(hoverRef.current, {
						scale: 1,
						duration: 0.4,
						ease: "power3.out",
					});
				} else {
					gsap.to(hoverRef.current, {
						x: bounds.left - parentBounds.left,
						y: bounds.top - parentBounds.top,
						width: bounds.width,
						height: bounds.height,
						scale: 1,
						transformOrigin: `${originX}% ${originY}%`,
						duration: 0.3,
						ease: "power3.out",
					});
				}
			});

			item.addEventListener("mouseleave", (e: MouseEvent) => {
				if (!hoverRef.current) return;

				const bounds = item.getBoundingClientRect();

				const mouseX = e.clientX - bounds.left;
				const mouseY = e.clientY - bounds.top;

				const originX = (mouseX / bounds.width) * 100;
				const originY = (mouseY / bounds.height) * 100;

				gsap.killTweensOf(hoverRef.current);

				gsap.set(hoverRef.current, {
					transformOrigin: `${originX}% ${originY}%`,
				});

				gsap.to(hoverRef.current, {
					scale: 0,
					duration: 0.3,
					ease: "power2.in",
					overwrite: "auto",
				});
			});
		});

		listRef.current?.addEventListener("mouseleave", () => {
			if (!hoverRef.current) return;

			gsap.killTweensOf(hoverRef.current);

			gsap.to(hoverRef.current, {
				scale: 0,
				duration: 0.3,
				ease: "power2.in",
				overwrite: "auto",
			});
		});
	}, []);

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: it is unique, controlled by me since its not a list of elements
		<section
			className="bg-foreground-secondary text-accent-foreground min-h-screen relative will-change-transform place-items-center grid panel px-4 sm:px-6"
			id="projects"
		>
			<div className="container mx-auto py-12 sm:py-16 w-full">
				<div className="flex flex-col sm:flex-row items-center justify-evenly gap-4 sm:gap-6 mb-8 sm:mb-10">
					<div className="hidden sm:block bg-accent-foreground h-0.5 w-12 sm:w-32 lg:w-52 rounded-full" />
					<h2 className="text-5xl sm:text-6xl lg:text-6xl mb-0 text-center shrink-0">
						Projects
					</h2>
					<div className="hidden sm:block bg-accent-foreground h-0.5 w-12 sm:w-32 lg:w-52 rounded-full" />
				</div>
				<p className="leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl mx-auto text-center mb-10 sm:mb-12">
					A selected collection of projects demonstrating technical depth,
					ranging from robust back-end systems and developer tools to
					high-fidelity front-end interfaces.
				</p>
				<a
					href="https://github.com/hsm-gustavo"
					target="_blank"
					rel="noopener noreferrer"
					className="flex justify-center"
				>
					<Button className="p-3 sm:p-4 lg:p-5 justify-center">
						<img
							src="https://twenty-icons.com/github.com/32"
							alt="Github icon"
							className="h-4 w-4 sm:h-5 sm:w-5"
						/>
						<span className="hidden sm:inline">
							View all projects on GitHub
						</span>
						<span className="sm:hidden">View on GitHub</span>
					</Button>
				</a>
			</div>
			<div className="mx-auto max-w-7xl w-full px-4 sm:px-6">
				<div
					className="grid gap-4 sm:gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 relative mb-10 sm:mb-12"
					ref={listRef}
				>
					<div
						ref={hoverRef}
						className="bg-feature-foreground/10 absolute inset-0 rounded-lg pointer-events-none z-10 border border-feature-foreground/20 hidden lg:block"
					/>
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
