import { createFileRoute } from "@tanstack/react-router";
import About from "@/components/About";
import Hero from "@/components/Hero";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="min-h-screen bg-linear-to-b from-background via-white to-background">
			<Hero />
			<About />
		</main>
	);
}
