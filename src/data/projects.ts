import type { Project } from "@/types/project";

export const projects: Project[] = [
	{
		id: 1,
		title: "Sócio FutZAP Website",
		tags: ["Next.js", "TailwindCSS", "TypeScript", "React Hook Form"],
		imageUrl: "/projects/futzap.png",
	},
	{
		id: 2,
		title: "ASA Sócio Patrimonial Platform",
		tags: [
			"Next.js",
			"tRPC",
			"MySQL",
			"TypeScript",
			"React Hook Form",
			"Prisma",
			"TailwindCSS",
			"InfinitePay",
		],
		imageUrl: "/projects/patrimoniais.png",
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
];
