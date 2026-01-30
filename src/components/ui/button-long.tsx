import { useGSAP } from "@gsap/react";
import { cva, type VariantProps } from "class-variance-authority";
import { gsap } from "gsap";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"aspect-square sm:aspect-3/2 group relative rounded-xl overflow-hidden inline-flex cursor-pointer items-center gap-2 justify-center whitespace-nowrap font-medium text-sm disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground",
				outline: "border bg-background",
			},
			size: {
				default: "p-3 sm:p-5",
				sm: "p-2 sm:p-3",
				lg: "p-6 sm:p-10",
				xl: "p-8 sm:p-12",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export default function WideButton({
	className,
	variant,
	size,
	...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
	const btnRef = useRef<HTMLButtonElement>(null);
	const blob1 = useRef<HTMLSpanElement>(null);
	const blob2 = useRef<HTMLSpanElement>(null);
	const blob3 = useRef<HTMLSpanElement>(null);

	const w = size === "sm" ? 50 : size === "lg" ? 80 : size === "xl" ? 100 : 70;

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

	return (
		<button
			ref={btnRef}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
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

			<p className="z-10 transition-colors mix-blend-difference text-white text-shadow-lg font-light text-xs sm:text-sm">
				{props.children}
			</p>
		</button>
	);
}
