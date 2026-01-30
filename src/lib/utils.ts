import { type ClassValue, clsx } from "clsx";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function scrollToElementById(id: string) {
	const smoother = ScrollSmoother.get();
	smoother?.scrollTo(id, true);
}
