import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"aspect-square group relative overflow-hidden inline-flex items-center gap-2 justify-center whitespace-nowrap font-medium text-sm disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground",
			},
			size: {
				default: "p-5",
				sm: "p-5",
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
	return (
		<button
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			<span
				className="absolute scale-[.1] bg-black rounded-full transition-all duration-[.6s] group-hover:scale-[170%]"
				style={{
					left: "0",
					top: "100%",
					transform: "translate(-30%, -50%)",
					zIndex: 10,
					width: "100%",
					height: "100%",
				}}
			/>
			<span
				className="absolute scale-[.1] bg-black rounded-full transition-all duration-[.8s] group-hover:scale-150"
				style={{
					left: "80%",
					top: "100%",
					transform: "translate(-50%, -60%)",
					zIndex: 10,
					width: "100%",
					height: "100%",
				}}
			/>

			<p className="z-20 transition-colors duration-[0.6s] text-black group-hover:text-white">
				{props.children}
			</p>
		</button>
	);
}
