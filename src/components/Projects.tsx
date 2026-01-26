import { projects } from "@/data/projects";
import { ProjectCard } from "./ui/project-card";

export default function Projects() {
	/* 
	the idea here is to increase the lightness of the background color for every section
	to create a contrast with the previous one, making the user feel that they are moving
	forward in the page
	*/

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: it is unique, controlled by me since its not a list of elements
		<section
			className="bg-[#26144d] text-feature-foreground min-h-screen relative will-change-transform place-items-center grid panel"
			id="projects"
		>
			<div>
				<div>
					<h2>Projects</h2>
					<p>
						A selected collection of projects demonstrating technical depth,
						ranging from robust back-end systems and developer tools to
						high-fidelity front-end interfaces.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
