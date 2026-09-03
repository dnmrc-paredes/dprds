export interface Project {
	name: string;
	stack: string;
	description: string;
	note: string;
	link: string;
}

export const projects: Project[] = [
	{
		name: "Virtual Assistant Portfolio",
		stack: "Next.js · TypeScript · Tailwind · Sanity · Calendly",
		description: "A polished, content-driven portfolio for a virtual assistant, built with a headless CMS, booking integration, and a fast, responsive UI.",
		note: "Client project — built for a friend, delivered end to end.",
		link: "https://kmmmyc.vercel.app/",
	},
	{
		name: "KBDZ — Mechanical Keyboard Store",
		stack: "Next.js · React · Redux · Firebase · TypeScript",
		description: "A working e-commerce demo for mechanical keyboards — Redux cart, Firebase-backed catalog, and PayPal + Maya checkout.",
		note: "Concept build — a full shopping flow, cart to checkout.",
		link: "https://kbdz-next-js.vercel.app/",
	},
];