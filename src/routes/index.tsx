import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import Button from "@/components/ui/button";
import WideButton from "@/components/ui/button-long";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="min-h-screen bg-linear-to-b from-background via-white to-background">
			<Hero />
			<WideButton className="bg-white" variant={"outline"} size={"xl"}>
				Test Button
			</WideButton>
		</div>
	);
}
