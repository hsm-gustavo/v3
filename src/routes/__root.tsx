import { useGSAP } from "@gsap/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Gustavo Malaquias",
				content:
					"Welcome to my personal website! Explore my projects, and feel free to reach out.",
			},
			{
				name: "description",
				content:
					"Full-Stack Developer specialized in scalable web architectures and Linux systems. Building mobile-first solutions at Rápido Infoshop.",
			},
			{
				name: "keywords",
				content:
					"Full-Stack Developer, Go, TypeScript, TanStack Start, React, Nestjs, Linux, Architecture",
			},
			{
				property: "og:title",
				content: "Gustavo Malaquias | Full-Stack Developer",
			},
			{
				property: "og:description",
				content: "Building clean, scalable, and accessible web experiences.",
			},
			{ property: "og:type", content: "website" },
			{ property: "og:url", content: "https://hsm-gustavo.dev" },
			{ property: "og:image", content: "https://hsm-gustavo.dev/og-image.png" },
			{ name: "twitter:card", content: "summary_large_image" },
			{
				name: "twitter:image",
				content: "https://hsm-gustavo.dev/og-image.png",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
});

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="antialiased font-sans overscroll-none">
				<Header />
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
