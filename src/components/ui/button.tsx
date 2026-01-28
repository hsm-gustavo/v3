import { useGSAP } from "@gsap/react";
import { cva, type VariantProps } from "class-variance-authority";
import { gsap } from "gsap";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group relative rounded-xl overflow-hidden inline-flex cursor-pointer items-center gap-2 justify-center whitespace-nowrap font-medium text-sm disabled:opacity-50 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
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

export default function Button({
	className,
	variant,
	size,
	...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
	const btnRef = useRef<HTMLButtonElement>(null);
	const blob1 = useRef<HTMLSpanElement>(null);

	useGSAP(() => {
		if (!btnRef.current) return;

		gsap.context(() => {
			gsap.set([blob1.current], {
				scale: 0,
				transformOrigin: "50% 50%",
			});

			const tl = gsap.timeline({ paused: true });

			tl.to(blob1.current, {
				scale: 2,
				duration: 0.7,
				ease: "power3.inOut",
			});

			btnRef.current?.addEventListener("mouseenter", (e: MouseEvent) => {
				const bounds = btnRef.current!.getBoundingClientRect();
				const mouseX = e.clientX - bounds.left;
				const mouseY = e.clientY - bounds.top;

				gsap.set([blob1.current], {
					x: mouseX - bounds.width / 2,
					y: mouseY - bounds.height / 2,
				});

				tl.play();
			});

			btnRef.current?.addEventListener("mousemove", (e: MouseEvent) => {
				const bounds = btnRef.current!.getBoundingClientRect();
				const mouseX = e.clientX - bounds.left;
				const mouseY = e.clientY - bounds.top;

				gsap.to(blob1.current, {
					x: mouseX - bounds.width / 2,
					y: mouseY - bounds.height / 2,
					duration: 0.1,
					overwrite: "auto",
				});
			});

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
				className="absolute bg-border rounded-full z-0 w-28 h-28 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0"
			/>

			<span className="z-10 inline-flex items-center gap-2 transition-colors mix-blend-difference text-white text-shadow-lg font-light">
				{props.children}
			</span>
		</button>
	);
}
