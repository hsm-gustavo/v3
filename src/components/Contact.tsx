import { BriefcaseBusiness, Code, Mail } from "lucide-react";
import Button from "./ui/button";

const contacts = [
	{
		label: "LinkedIn",
		description:
			"Connect for professional collaborations and career opportunities.",
		href: "https://www.linkedin.com/in/gustavo-hs-malaquias",
		handle: "linkedin.com/in/gustavo-hs-malaquias",
		icon: BriefcaseBusiness,
		external: true,
	},
	{
		label: "Email",
		description:
			"Direct channel for project inquiries and detailed discussions.",
		href: "mailto:gustavo.hs.malaquias@gmail.com",
		handle: "gustavo.hs.malaquias@gmail.com",
		icon: Mail,
		external: false,
	},
	{
		label: "GitHub",
		description:
			"Explore my coding standards, architectural patterns, and contributions.",
		href: "https://github.com/hsm-gustavo",
		handle: "github.com/hsm-gustavo",
		icon: Code,
		external: true,
	},
];

export default function Contact() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: it is unique, controlled by me since its not a list of elements
		<section
			className="bg-foreground-tertiary text-accent-foreground min-h-screen relative will-change-transform place-items-center grid panel px-4 sm:px-6"
			id="contact"
		>
			<div className="container mx-auto py-12 sm:py-16">
				<div className="flex flex-col sm:flex-row items-center justify-evenly gap-4 sm:gap-6 mb-8 sm:mb-10">
					<div className="hidden sm:block bg-accent-foreground h-0.5 w-12 sm:w-32 lg:w-52 rounded-full" />
					<h2 className="text-5xl sm:text-6xl lg:text-6xl mb-0 text-center shrink-0">
						Let&apos;s Work Together
					</h2>
					<div className="hidden sm:block bg-accent-foreground h-0.5 w-12 sm:w-32 lg:w-52 rounded-full" />
				</div>

				<div className="max-w-3xl mx-auto text-center space-y-4">
					<p className="leading-relaxed text-sm sm:text-base lg:text-lg">
						Whether you need a full-stack specialist to scale your platform or a
						reliable partner to bring a new product to life, I&apos;m ready to
						build. Currently open to <strong>full-time roles</strong> and{" "}
						<strong>freelance commissions</strong>.
					</p>
					<p className="text-xs sm:text-sm text-accent-foreground/70">
						Reach out via your preferred channel below and let&apos;s start the
						conversation.
					</p>
				</div>

				<div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-3">
					{contacts.map((contact) => {
						const Icon = contact.icon;

						const linkProps = contact.external
							? { target: "_blank", rel: "noopener noreferrer" }
							: {};

						return (
							<a
								key={contact.label}
								href={contact.href}
								className="group rounded-xl border border-accent-foreground/30 bg-foreground/20 p-4 sm:p-5 transition-colors hover:border-feature-foreground/60 hover:bg-foreground/30"
								{...linkProps}
							>
								<div className="flex items-center justify-between gap-3">
									<span className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold">
										<Icon className="h-4 w-4 sm:h-5 sm:w-5 text-feature-foreground" />
										{contact.label}
									</span>
									<span className="text-xs text-accent-foreground/60">
										Open
									</span>
								</div>
								<p className="mt-2 text-xs sm:text-sm text-accent-foreground/80">
									{contact.description}
								</p>
								<p className="mt-3 font-mono text-[0.7rem] sm:text-xs text-accent-foreground/60 break-all">
									{contact.handle}
								</p>
							</a>
						);
					})}
				</div>

				<div className="mt-10 sm:mt-12 flex justify-center">
					<a href="mailto:gustavo.hs.malaquias@gmail.com">
						<Button className="p-3 sm:p-4 lg:p-5">
							<Mail className="h-4 w-4 sm:h-5 sm:w-5" />
							<span className="hidden sm:inline">Send Me an Email</span>
							<span className="sm:hidden">Email me</span>
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
}
