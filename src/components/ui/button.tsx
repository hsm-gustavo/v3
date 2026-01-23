import { useGSAP } from "@gsap/react";
import { cva, type VariantProps } from "class-variance-authority";
import { gsap } from "gsap";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"aspect-square group relative rounded-xl overflow-hidden inline-flex items-center gap-2 justify-center whitespace-nowrap font-medium text-sm disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground",
				outline: "border bg-background",
			},
			size: {
				default: "p-5",
				sm: "p-3",
				lg: "p-10",
				xl: "p-12",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export default function Button({
	className,
	variant,
	size,
	...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
	const btnRef = useRef<HTMLButtonElement>(null);
	const blob1 = useRef<HTMLSpanElement>(null);
	const blob2 = useRef<HTMLSpanElement>(null);

	useGSAP(() => {
		if (!btnRef.current) return;

		gsap.context(() => {
			gsap.set([blob1.current, blob2.current], {
				scale: 0.1,
				transformOrigin: "50% 50%",
			});

			const tl = gsap.timeline({ paused: true });

			tl.to(blob1.current, {
				scale: 3.6,
				duration: 1.2,
				ease: "power3.out",
			}).to(
				blob2.current,
				{
					scale: 3,
					duration: 1,
					ease: "power3.out",
				},
				0,
			);

			btnRef.current?.addEventListener("mouseenter", () => tl.play());
			btnRef.current?.addEventListener("mouseleave", () => tl.reverse());
		}, btnRef);
	}, []);

	return (
		<button
			ref={btnRef}
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			<span
				ref={blob1}
				className="absolute bg-border rounded-full z-0"
				style={{
					left: "0",
					top: "100%",
					width: "100%",
					height: "100%",
					transform: "translate(-40%, 0%)",
				}}
			/>
			<span
				ref={blob2}
				className="absolute bg-border rounded-full z-0"
				style={{
					left: "80%",
					top: "100%",
					width: "100%",
					height: "100%",
					transform: "translate(-50%, 0%)",
				}}
			/>

			<p className="z-10 transition-colors mix-blend-difference text-white text-shadow-lg font-light">
				{props.children}
			</p>
		</button>
	);
}
