import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import AsciiGustavo from "./AsciiGustavo";
import WideButton from "./ui/button-long";

export default function Hero() {
	return (
		<section className="mx-auto container flex flex-col items-start min-h-screen justify-center relative">
			<div className="w-full flex flex-col justify-center gap-4">
				<h1 className="font-bold text-7xl md:text-8xl text-feature-foreground relative">
					<span className="text-foreground text-3xl md:text-4xl">I am</span>
					<br />
					Gustavo Malaquias
				</h1>
				<p className="font-mono text-xs md:text-lg">
					i turn complex requirements into{" "}
					<strong className="text-feature-foreground">
						clean, scalable web applications.
					</strong>
				</p>
			</div>
			<AsciiGustavo className="absolute right-0" />
			<div className="flex flex-row gap-3">
				<Link to="/" hash="contact">
					<WideButton variant={"outline"} size={"sm"}>
						Get In Touch
					</WideButton>
				</Link>
			</div>
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce rounded-full p-1 border border-feature-foreground/50">
				<ArrowDown className="w-4 h-4" />
			</div>
		</section>
	);
}
