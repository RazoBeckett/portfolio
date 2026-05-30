import { profile } from "./profile";
import { projects } from "./projects";

export default function App() {
	return (
		<div className="book">
			<div className="holes">
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
			</div>
			<div className="stamp">{profile.stamp}</div>

			<div className="head">
				<h1>{profile.name}</h1>
				<span className="sub">— a.k.a {profile.handle}</span>
			</div>
			<p className="meta-scribble">
				{profile.tagline} &nbsp; ✎ &nbsp;
				<a href={profile.resumeHref}>résumé</a> ·{" "}
				<a href={profile.blogHref}>blog</a>
			</p>

			<div className="entry">
				<div className="date">Entry №01 — whoami</div>
				<h2 className="hand">A few notes on me</h2>
				<p className="body">{profile.about}</p>
				<span className="doodle">
					↑ still figuring it out, one commit at a time
				</span>
			</div>

			<div className="entry">
				<div className="date">Entry №02 — the lab bench</div>
				<h2 className="hand">Things I've built &amp; taped in</h2>
				<span className="arrow">scribbles, screenshots &amp; specimens ↓</span>
				<div className="specimens">
					{projects.map((p) => (
						<a
							className="pin"
							target="_blank"
							rel="noreferrer"
							href={p.href}
							key={p.title}
						>
							<img src={p.img} alt={p.title} />
							<div className="cap">
								<h3>{p.title}</h3>
								<div className="tags">{p.tags}</div>
								<p>{p.desc}</p>
								<span className="link">→ open repo</span>
							</div>
						</a>
					))}
				</div>
			</div>

			<div className="entry">
				<div className="date">Entry №03 — reach me</div>
				<div className="contact">
					<div className="sticky">
						<h2>Find me here ✦</h2>
						{profile.links.map((l) => (
							<a target="_blank" rel="noreferrer" href={l.href} key={l.label}>
								<b>{l.label}</b>
								{l.text}
							</a>
						))}
					</div>
					<div className="annotate">
						<span className="doodle">← drop a line anytime!</span>
						<span className="doodle" style={{ transform: "rotate(2deg)" }}>
							PRs welcome ✓
						</span>
						<span
							className="doodle"
							style={{ transform: "rotate(-2deg)", color: "var(--pencil)" }}
						>
							~ contributing to open source ♥
						</span>
					</div>
				</div>
			</div>

			<footer>
				{profile.copyright} ·{" "}
				{profile.footerLinks.map((l, i) => (
					<span key={l.label}>
						{i > 0 && " / "}
						<a target="_blank" rel="noreferrer" href={l.href}>
							{l.text}
						</a>
					</span>
				))}
			</footer>
		</div>
	);
}
