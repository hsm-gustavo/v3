import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import Button from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="min-h-screen bg-linear-to-b from-background via-white to-background">
			<Hero />
			<Button className="bg-white" variant={"outline"}>
				Test Button
			</Button>
		</div>
	);
}
