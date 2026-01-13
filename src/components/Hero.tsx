export default function Hero() {
	return (
		<section className="mx-auto container w-full max-w-3xl flex flex-col items-start gap-4 py-20 px-4">
			<h1 className="font-bold text-7xl text-feature-foreground">
				<span className="text-foreground text-3xl">I am</span>
				<br />
				Gustavo Malaquias
			</h1>
			<p className="font-mono text-xs">
				i turn complex requirements into{" "}
				<strong className="text-feature-foreground">
					clean, scalable web applications.
				</strong>
			</p>
		</section>
	);
}
