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
			<h2>Projects</h2>
		</section>
	);
}
