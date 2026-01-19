import WideButton from "./ui/button-long";

export default function Hero() {
	return (
		<section className="mx-auto container w-full max-w-3xl flex flex-col items-start gap-4 py-20 px-4">
			<h1 className="font-bold text-7xl text-feature-foreground relative">
				<span className="text-foreground text-3xl">I am</span>
				<br />
				Gustavo Malaquias
				<div
					className="absolute text-base bg-yellow-100 -right-24 rotate-6 top-1/2 p-5 break-all px-3 flex items-center justify-center shadow-lg font-medium after:content-[''] after:absolute after:top-0 after:right-0
                    after:w-6 after:h-6
                    after:bg-yellow-200/40 after:shadow-inner
                    after:border-l-8 after:border-l-transparent
                    after:border-b-8 after:border-b-transparent"
				>
					<h2>
						a full-stack
						<br />
						developer
					</h2>
				</div>
			</h1>
			<p className="font-mono text-xs">
				i turn complex requirements into{" "}
				<strong className="text-feature-foreground">
					clean, scalable web applications.
				</strong>
			</p>

			<div className="flex flex-row gap-3">
				<WideButton variant={"outline"} size={"sm"}>
					Get In Touch
				</WideButton>
				<WideButton variant={"outline"} size={"sm"}>
					See My Work
				</WideButton>
			</div>
		</section>
	);
}
