export interface CompanyProject {
	name: string;
	stack: string;
	points: string[];
}

export interface Company {
	name: string;
	location: string;
	period: string;
	role: string;
	summary: string;
	projects: CompanyProject[];
	highlights: string[];
}

export const company: Company = {
	name: "Goodfrontend LTD",
	location: "Manila",
	period: "Sept 2021 — Oct 2025",
	role: "Software Engineer",
	summary:
		"Built and tuned frontends for UK-based clients across eCommerce and enterprise, working in an Agile team to ship reliable, high-performing experiences.",
	projects: [
		{
			name: "Clarks",
			stack: "Next.js · React · TypeScript · GraphQL · CMS",
			points: [
				"Shipped responsive, high-performance interfaces for a major UK footwear storefront.",
				"Improved site speed and overall user experience through focused frontend optimization.",
			],
		},
		{
			name: "GE Vernova",
			stack: "Next.js · React · TypeScript · GraphQL",
			points: [
				"Led frontend work on a UK energy company site, building dynamic, user-friendly pages.",
				"Cut load times and lifted efficiency with targeted performance work.",
			],
		},
		{
			name: "Carparts4Less",
			stack: "Next.js · React · TypeScript · GraphQL · CMS",
			points: [
				"Engineered the frontend for a UK auto parts platform with fast, responsive, seamless UX.",
				"Wired up REST APIs and CMS-backed content flows for a dynamic catalog.",
			],
		},
	],
	highlights: [
		"Turned Figma designs into clean, functional React components with pixel-level care.",
		"Built reusable components and a scalable UI architecture with React + TypeScript.",
		"Integrated Sanity and Contentful CMS to power content-driven pages.",
		"Boosted performance through code-splitting, lazy loading, and image optimization.",
		"Shipped on schedule with cross-functional teams using Agile/Scrum.",
	],
};