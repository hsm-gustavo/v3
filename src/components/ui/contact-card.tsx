import type { LucideProps } from "lucide-react";

interface ContactCardProps {
	label: string;
	description: string;
	href: string;
	handle: string;
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	external: boolean;
}

export default function ContactCard(contact: ContactCardProps) {
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
				<span className="text-xs text-accent-foreground/60">Open</span>
			</div>
			<p className="mt-2 text-xs sm:text-sm text-accent-foreground/80">
				{contact.description}
			</p>
			<p className="mt-3 font-mono text-[0.7rem] sm:text-xs text-accent-foreground/60 break-all">
				{contact.handle}
			</p>
		</a>
	);
}
