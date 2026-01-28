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
			className="bg-foreground-secondary text-accent-foreground min-h-screen relative will-change-transform place-items-center grid panel"
			id="projects"
		>
			<div className="container mx-auto py-16">
				<div className="flex flex-row items-center justify-evenly">
					<div className="bg-accent-foreground h-0.5 max-w-xl w-52 md:w-xs lg:w-full rounded-full" />
					<h2 className="text-6xl mb-6 text-center">Projects</h2>
					<div className="bg-accent-foreground h-0.5 max-w-xl w-52 md:w-xs lg:w-full rounded-full" />
				</div>
				<p className="leading-relaxed text-lg max-w-2xl mx-auto text-center">
					A selected collection of projects demonstrating technical depth,
					ranging from robust back-end systems and developer tools to
					high-fidelity front-end interfaces.
				</p>
			</div>
			<div className="mx-auto max-w-7xl">
				<div
					className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative"
					ref={listRef}
				>
					<div
						ref={hoverRef}
						className="bg-feature-foreground/10 absolute inset-0 rounded-lg pointer-events-none z-10 border border-feature-foreground/20"
					/>
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</div>
			<a
				href="https://github.com/hsm-gustavo"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button className="p-5">
					<img
						src="https://twenty-icons.com/github.com/32"
						alt="Github icon"
						className="h-5 w-5"
					/>
					View all projects on GitHub
				</Button>
			</a>
		</section>
	);
}
