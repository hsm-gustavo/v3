import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import type { Project } from "@/types/project";

interface ProjectCardProps {
	project: Project;
	index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const card = cardRef.current;
		const image = imageRef.current;
		const overlay = overlayRef.current;
		const content = contentRef.current;

		if (!card || !image || !overlay || !content) return;

		const handleMouseEnter = () => {
			gsap.to(image, {
				scale: 1.1,
				duration: 0.6,
				ease: "power2.out",
			});
			gsap.to(overlay, {
				opacity: 0.7,
				duration: 0.3,
				ease: "power2.out",
			});
			gsap.to(content, {
				y: 0,
				opacity: 1,
				duration: 0.4,
				ease: "power3.out",
			});
		};

		const handleMouseLeave = () => {
			gsap.to(image, {
				scale: 1,
				duration: 0.6,
				ease: "power2.out",
			});
			gsap.to(overlay, {
				opacity: 0.4,
				duration: 0.3,
				ease: "power2.out",
			});
			gsap.to(content, {
				y: 20,
				opacity: 0.8,
				duration: 0.4,
				ease: "power3.out",
			});
		};

		card.addEventListener("mouseenter", handleMouseEnter);
		card.addEventListener("mouseleave", handleMouseLeave);

		gsap.set(content, { y: 20, opacity: 0.8 });

		return () => {
			card.removeEventListener("mouseenter", handleMouseEnter);
			card.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	const CardWrapper = project.link ? "a" : "div";
	const wrapperProps = project.link
		? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
		: {};

	return (
		<CardWrapper
			{...wrapperProps}
			ref={cardRef as React.Ref<HTMLAnchorElement & HTMLDivElement>}
			className="group relative block overflow-hidden rounded-xl bg-accent-foreground cursor-pointer"
			style={{ animationDelay: `${index * 0.1}s` }}
		>
			<div className="relative aspect-4/3 overflow-hidden">
				<img
					ref={imageRef}
					src={project.imageUrl}
					alt={project.title}
					className="h-full w-full object-cover"
				/>
				<div
					ref={overlayRef}
					className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent opacity-40"
				/>
			</div>
			<div ref={contentRef} className="absolute inset-x-0 bottom-0 p-5">
				<div className="flex items-center justify-between gap-3">
					<h3 className="text-lg font-semibold text-foreground truncate">
						{project.title}
					</h3>
					{project.link && (
						<svg
							className="h-4 w-4 text-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<title>External link icon</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M7 17L17 7M17 7H7M17 7v10"
							/>
						</svg>
					)}
				</div>

				<div className="mt-3 flex flex-wrap gap-2">
					{project.tags.slice(0, 4).map((tag) => (
						<span
							key={tag}
							className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-accent-foreground"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</CardWrapper>
	);
}
