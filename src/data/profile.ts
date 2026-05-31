export type Link = { label: string; href: string; text: string };

export const profile = {
	name: "Mayur Raut",
	handle: "Razo Beckett",
	stamp: "PROPERTY OF RAZO",
	tagline: "Developer · Linux · DevOps · Cloud",
	resumeHref: "https://link.razobeckett.xyz/resm",
	blogHref: "https://link.razobeckett.xyz/blog?utm_source=portfolio",
	about:
		"I'm Mayur Raut, but I go by Razo Beckett online. I'm a Computer Engineering student, currently learning and building various software solutions. My interests include Linux, DevOps, and Cloud Engineering. I also enjoy working on open-source projects and contributing to the community.",
	links: [
		{
			label: "email",
			href: "mailto:contact@mayurraut.dev",
			text: "contact@mayurraut.dev",
		},
		{
			label: "github",
			href: "https://link.razobeckett.xyz/gh?utm_source=portfolio",
			text: "github.com/RazoBeckett",
		},
		{
			label: "twitter",
			href: "https://link.razobeckett.xyz/x?utm_source=portfolio",
			text: "twitter.com/RazoBeckett",
		},
		{
			label: "linkedin",
			href: "https://link.razobeckett.xyz/lnkd?utm_source=portfolio",
			text: "in/mayurraut0",
		},
		{
			label: "instagram",
			href: "https://link.razobeckett.xyz/inst?utm_source=portfolio",
			text: "@razobeckett",
		},
		{
			label: "open source",
			href: "https://link.razobeckett.xyz/ghcb?utm_source=portfolio",
			text: "my pull requests",
		},
	] satisfies Link[],
	footerLinks: [
		{
			label: "github",
			href: "https://link.razobeckett.xyz/gh?utm_source=portfolio",
			text: "github",
		},
		{
			label: "linkedin",
			href: "https://link.razobeckett.xyz/lnkd?utm_source=portfolio",
			text: "linkedin",
		},
		{
			label: "twitter",
			href: "https://link.razobeckett.xyz/x?utm_source=portfolio",
			text: "twitter",
		},
	] satisfies Link[],
	copyright: "© 2025 Razo Beckett — logged from the lab",
};
