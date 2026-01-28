"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { scrollToElementById } from "@/lib/utils";

export default function Nav() {
	const listRef = useRef<HTMLUListElement>(null);
	const underlineRef = useRef<HTMLSpanElement>(null);

	useGSAP(() => {
		gsap.context(() => {
			if (!listRef.current || !underlineRef.current) return;

			const items = gsap.utils.toArray<HTMLLIElement>(
				listRef.current.querySelectorAll("li"),
			);

			gsap.set(underlineRef.current, {
				opacity: 0,
				scaleX: 0,
				transformOrigin: "left center",
			});

			items.forEach((item) => {
				item.addEventListener("mouseenter", () => {
					if (!listRef.current || !underlineRef.current) return;

					const bounds = item.getBoundingClientRect();
					const parentBounds = listRef.current.getBoundingClientRect();

					gsap.killTweensOf(underlineRef.current);

					gsap.to(underlineRef.current, {
						x: bounds.left - parentBounds.left,
						width: bounds.width,
						scaleX: 1,
						opacity: 1,
						duration: 0.4,
						ease: "power3.out",
						overwrite: "auto",
					});
				});
			});

			listRef.current.addEventListener("mouseleave", () => {
				if (!underlineRef.current) return;

				gsap.killTweensOf(underlineRef.current);

				gsap.to(underlineRef.current, {
					scaleX: 0,
					opacity: 0,
					duration: 0.3,
					ease: "power2.in",
					overwrite: "auto",
				});
			});
		}, listRef);
	}, []);

	return (
		<ul
			ref={listRef}
			className="relative flex gap-2 sm:gap-4 ml-3 sm:ml-6 text-xs sm:text-sm"
		>
			<li>
				<button
					type="button"
					onClick={() => scrollToElementById("#about")}
					className="cursor-pointer whitespace-nowrap"
				>
					about
				</button>
			</li>
			<li>
				<button
					type="button"
					onClick={() => scrollToElementById("#projects")}
					className="cursor-pointer whitespace-nowrap"
				>
					projects
				</button>
			</li>
			<li>
				<button
					type="button"
					onClick={() => scrollToElementById("#contact")}
					className="cursor-pointer whitespace-nowrap"
				>
					contact
				</button>
			</li>

			<span ref={underlineRef} className="absolute bottom-0 h-0.5 bg-black" />
		</ul>
	);
}
