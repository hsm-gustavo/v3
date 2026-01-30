import { ArrowUp, Copyright } from "lucide-react";
import { scrollToElementById } from "@/lib/utils";
import Button from "./ui/button";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-accent-foreground/10 bg-background py-8 font-mono relative will-change-transform panel grid place-items-center">
			<div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
				<div className="text-center md:text-left space-y-1">
					<p className="font-normal text-sm">
						<Copyright className="inline-block h-4 w-4 mr-1" />
						{currentYear} Gustavo Malaquias
					</p>
					<p className="text-xs text-accent-foreground/60">
						Full-Stack Developer & Systems Enthusiast
					</p>
				</div>

				<div className="flex items-center gap-4">
					<Button
						type="button"
						onClick={() => scrollToElementById("")}
						className="text-xs font-medium hover:text-feature-foreground transition-colors flex items-center gap-2 group"
					>
						Back to Top
						<ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
					</Button>
				</div>
			</div>
		</footer>
	);
}
