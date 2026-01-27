import { useGSAP } from "@gsap/react";
import { cva, type VariantProps } from "class-variance-authority";
import { gsap } from "gsap";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group relative rounded-xl overflow-hidden inline-flex items-center gap-2 justify-center whitespace-nowrap font-medium text-sm disabled:opacity-50 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground",
				outline: "border bg-background",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type LongButtonProps = VariantProps<typeof buttonVariants> & {
	className?: string;
	href?: string;
	target?: string;
	rel?: string;
	children?: React.ReactNode;
} & React.ComponentProps<"button">;

export default function LongButton({
	className,
	variant,
	size,
	href,
	target,
	rel,
	children,
	...props
}: LongButtonProps) {
	const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
	const blob1 = useRef<HTMLSpanElement>(null);
	const blob2 = useRef<HTMLSpanElement>(null);
	const blob3 = useRef<HTMLSpanElement>(null);

	const w = size === "sm" ? 70 : size === "lg" ? 100 : 100;

	useGSAP(() => {
		if (!btnRef.current) return;

		gsap.context(() => {
			gsap.set([blob1.current, blob2.current, blob3.current], {
				scale: 0.1,
				transformOrigin: "50% 50%",
			});

			const tl = gsap.timeline({ paused: true });

			tl.to(
				blob1.current,
				{
					scale: 3.7,
					duration: 1.2,
					ease: "power3.out",
				},
				0.2,
			)
				.to(
					blob2.current,
					{
						scale: 3.5,
						duration: 1,
						ease: "power3.out",
					},
					0.2,
				)
				.to(
					blob3.current,
					{
						scale: 3.4,
						duration: 1,
						ease: "power3.out",
					},
					0.1,
				);

			btnRef.current?.addEventListener("mouseenter", () => tl.play());
			btnRef.current?.addEventListener("mouseleave", () => tl.reverse());
		}, btnRef);
	}, []);

	const content = (
		<>
			<span
				ref={blob1}
				className="absolute bg-border rounded-full z-0"
				style={{
					left: "-20%",
					top: "100%",
					width: `${w}px`,
					height: `${w}px`,
					transform: "translate(-40%, 0%)",
				}}
			/>
			<span
				ref={blob2}
				className="absolute bg-border rounded-full z-0"
				style={{
					left: "50%",
					top: "100%",
					width: `${w}px`,
					height: `${w}px`,
					transform: "translate(-30%, 0%)",
				}}
			/>
			<span
				ref={blob3}
				className="absolute bg-border rounded-full z-0"
				style={{
					left: "120%",
					top: "100%",
					width: `${w}px`,
					height: `${w}px`,
					transform: "translate(-40%, 0%)",
				}}
			/>

			<span className="z-10 inline-flex items-center gap-2 transition-colors mix-blend-difference text-white text-shadow-lg font-light">
				{children}
			</span>
		</>
	);

	if (href) {
		return (
			<a
				ref={btnRef as React.Ref<HTMLAnchorElement>}
				href={href}
				target={target}
				rel={rel}
				data-slot="button"
				className={cn(buttonVariants({ variant, size, className }))}
			>
				{content}
			</a>
		);
	}

	return (
		<button
			ref={btnRef as React.Ref<HTMLButtonElement>}
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			{content}
		</button>
	);
}
