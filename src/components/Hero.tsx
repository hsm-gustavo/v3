import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import AsciiGustavo from "./AsciiGustavo";
import WideButton from "./ui/button-long";

export default function Hero() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: it is unique, controlled by me since its not a list of elements
		<section
			className="min-h-screen relative will-change-transform panel grid place-items-center px-4 sm:px-6"
			id="hero"
		>
			<div className="mx-auto container flex flex-col items-start justify-center">
				<div className="flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-8">
					<div className="w-full flex flex-col justify-center gap-4">
						<h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-feature-foreground relative">
							<span className="text-foreground text-2xl sm:text-3xl md:text-4xl">
								I am
							</span>
							<br />
							Gustavo Malaquias
						</h1>
						<p className="font-mono text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
							i turn complex requirements into{" "}
							<strong className="text-feature-foreground">
								clean, scalable web applications.
							</strong>
						</p>
						<Link to="/" hash="contact">
							<WideButton variant={"outline"} size={"sm"}>
								Get In Touch
							</WideButton>
						</Link>
					</div>
					<div className="hidden sm:flex lg:w-auto w-full justify-center lg:justify-end shrink-0">
						<AsciiGustavo className="scale-50 sm:scale-75 lg:scale-100 origin-top-left sm:origin-top-right" />
					</div>
				</div>

				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce rounded-full p-1 border border-feature-foreground/50">
					<ArrowDown className="w-4 h-4" />
				</div>
			</div>
		</section>
	);
}
