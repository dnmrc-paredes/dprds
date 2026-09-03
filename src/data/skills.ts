export interface SkillCategory {
	label: string;
	items: string[];
}

export const skillCategories: SkillCategory[] = [
	{
		label: "Languages",
		items: ["TypeScript", "JavaScript"],
	},
	{
		label: "Frameworks",
		items: ["React", "React Native", "Next.js", "Vue", "Tailwind CSS"],
	},
	{
		label: "Testing",
		items: ["Jest", "Cypress", "Playwright"],
	},
	{
		label: "Data & CMS",
		items: ["GraphQL", "Sanity", "Contentful"],
	},
	{
		label: "Backend",
		items: ["Node.js", "Express"],
	},
	{
		label: "Tooling",
		items: ["Git", "Storybook", "AI-assisted development"],
	},
];
