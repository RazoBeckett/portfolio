export type Project = {
	href: string;
	img: string;
	title: string;
	tags: string;
	desc: string;
};

export const projects: Project[] = [
	{
		href: "https://link.razobeckett.xyz/proj-password-manager?utm_source=portfolio",
		img: "/assets/images/password_manager_mainpage_screenshot.webp",
		title: "Password Manager",
		tags: "python",
		desc: "Securely store & manage passwords. Semester project, big on security + usability.",
	},
	{
		href: "https://link.razobeckett.xyz/proj-examhub?utm_source=portfolio",
		img: "/assets/images/examhub_preview_screenshot.webp",
		title: "ExamHub",
		tags: "python · django · html · css",
		desc: "MCQ exam platform. I added Docker — multi-stage build + Gunicorn for prod.",
	},
	{
		href: "https://link.razobeckett.xyz/proj-dwm?utm_source=portfolio",
		img: "/assets/images/dwm_preview_screenshot.webp",
		title: "DWM",
		tags: "c · linux",
		desc: "Minimal, clean window manager rice in C. Simplicity & efficiency.",
	},
	{
		href: "https://link.razobeckett.xyz/proj-random-scripts?utm_source=portfolio",
		img: "/assets/images/bash-general.webp",
		title: "Random Scripts",
		tags: "bash · linux",
		desc: "Shell scripts & snippets for automation. Streamline the boring stuff.",
	},
	{
		href: "https://link.razobeckett.xyz/proj-uwunified?utm_source=portfolio",
		img: "/assets/images/uwunified_preview_screenshot.webp",
		title: "Uwunified.nvim",
		tags: "lua · neovim",
		desc: "Neovim plugin — a muted, soothing colorscheme for long coding nights.",
	},
	{
		href: "https://link.razobeckett.xyz/proj-duckdnsupdate?utm_source=portfolio",
		img: "/assets/images/duckdns_logo.webp",
		title: "DuckDnsUpdate",
		tags: "go",
		desc: "Tiny CLI to update a DuckDNS domain with your public IP. Go + Cobra.",
	},
];
