export default function About() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: it is unique, controlled by me since its not a list of elements
		<section
			className="bg-foreground text-accent-foreground min-h-screen relative will-change-transform place-items-center grid panel px-4 sm:px-6"
			id="about"
		>
			<div className="container mx-auto py-12 sm:py-16">
				<div className="flex flex-col sm:flex-row items-center justify-evenly gap-4 sm:gap-6 mb-8">
					<div className="hidden sm:block bg-accent-foreground h-0.5 max-w-xl w-20 sm:w-32 lg:w-52 rounded-full" />
					<h2 className="text-5xl sm:text-6xl lg:text-6xl mb-0 text-center shrink-0">
						About Me
					</h2>
					<div className="hidden sm:block bg-accent-foreground h-0.5 max-w-xl w-20 sm:w-32 lg:w-52 rounded-full" />
				</div>
				<div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
					<p>
						Hi, I&apos;m Gustavo. I engineer{" "}
						<strong>clean, scalable web applications</strong> with a strong
						focus on system performance and reliability. I combine{" "}
						<strong>full-stack development</strong> with a{" "}
						<strong>DevOps mindset</strong>, ensuring that the software I build
						is not only user-friendly but also easy to deploy and maintain.
					</p>
					<p>
						Currently, I&apos;m a Full-Stack Developer at{" "}
						<a
							href="https://rapidoinfoshop.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-1"
						>
							Rápido Infoshop
						</a>
						, where I build mobile-first interfaces and robust back-end
						integrations. As a <strong>Linux enthusiast</strong>, I&apos;m
						passionate about optimizing development workflows and understanding
						the infrastructure that powers my code.
					</p>
				</div>
				<div className="mt-10 sm:mt-12 space-y-4 sm:space-y-6 max-w-4xl mx-auto">
					<h3 className="text-2xl sm:text-3xl font-semibold">Skills</h3>

					<div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
						<div className="space-y-2 sm:space-y-3">
							<p className="text-xs sm:text-sm uppercase tracking-wide text-accent-foreground/70">
								Frontend
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									"TypeScript",
									"React",
									"Next.js",
									"TailwindCSS",
									"Radix UI",
									"A11y",
								].map((item) => (
									<span
										key={item}
										className="rounded-full border border-accent-foreground/30 px-2.5 sm:px-3 py-1 text-xs sm:text-sm whitespace-nowrap"
									>
										{item}
									</span>
								))}
							</div>
						</div>

						<div className="space-y-2 sm:space-y-3">
							<p className="text-xs sm:text-sm uppercase tracking-wide text-accent-foreground/70">
								Backend
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									"Go",
									"Python",
									"Node.js",
									"NestJS",
									"FastAPI",
									"Prisma",
									"PostgreSQL",
									"MySQL",
								].map((item) => (
									<span
										key={item}
										className="rounded-full border border-accent-foreground/30 px-2.5 sm:px-3 py-1 text-xs sm:text-sm whitespace-nowrap"
									>
										{item}
									</span>
								))}
							</div>
						</div>

						<div className="space-y-2 sm:space-y-3">
							<p className="text-xs sm:text-sm uppercase tracking-wide text-accent-foreground/70">
								DevOps
							</p>
							<div className="flex flex-wrap gap-2">
								{["Docker", "CI/CD", "Linux", "Bash", "Git"].map((item) => (
									<span
										key={item}
										className="rounded-full border border-accent-foreground/30 px-2.5 sm:px-3 py-1 text-xs sm:text-sm whitespace-nowrap"
									>
										{item}
									</span>
								))}
							</div>
						</div>

						<div className="space-y-2 sm:space-y-3">
							<p className="text-xs sm:text-sm uppercase tracking-wide text-accent-foreground/70">
								Protocols
							</p>
							<div className="flex flex-wrap gap-2">
								{["REST", "gRPC"].map((item) => (
									<span
										key={item}
										className="rounded-full border border-accent-foreground/30 px-2.5 sm:px-3 py-1 text-xs sm:text-sm whitespace-nowrap"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
