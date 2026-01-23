import { createServerFn } from "@tanstack/react-start";

interface Project {
	id: number;
	title: string;
	tags: string[];
	imageUrl: string;
	link?: string;
}

export const getProjects = createServerFn({
	method: "GET",
}).handler(
	async (): Promise<Project[]> => [
		{
			id: 1,
			title: "Sócio FutZAP Website",
			tags: ["Next.js", "TailwindCSS", "TypeScript", "React Hook Form"],
			imageUrl: "/projects/futzap.png",
		},
		{
			id: 2,
			title: "CDL Arapiraca Chat App",
			tags: ["Python", "FastAPI", "WhatsApp API"],
			imageUrl: "/projects/cdl.png",
		},
		{
			id: 3,
			title: "Brejo dos Bois Website",
			tags: [
				"Next.js",
				"TailwindCSS",
				"TypeScript",
				"React Hook Form",
				"Motion/Framer",
			],
			imageUrl: "/projects/brejo.png",
			link: "https://brejodosbois.com.br",
		},
		{
			id: 4,
			title: "Rápido Infoshop Website",
			tags: ["Next.js", "TailwindCSS", "TypeScript", "React Hook Form"],
			imageUrl: "/projects/rpd.png",
			link: "https://rapidoinfoshop.com",
		},
		{
			id: 5,
			title: "WhatsApp AI Chatbot - RAI",
			tags: ["Python", "FastAPI", "LangChain", "Twilio API", "OpenAI API"],
			imageUrl: "/projects/rai.png",
			link: "https://api.whatsapp.com/send?phone=558235300071&text=Ol%C3%A1",
		},
		{
			id: 6,
			title: "Authentication System in Go",
			tags: ["Go", "Authentication", "Security", "JWT", "Docker", "MySQL"],
			imageUrl: "/projects/auth-go.png",
			link: "https://github.com/hsm-gustavo/auth-go",
		},
	],
);
