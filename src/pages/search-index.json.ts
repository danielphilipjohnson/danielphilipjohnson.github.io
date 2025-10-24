// src/pages/search-index.json.ts
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

const safeGet = async (name: any) => {
	try {
		return await getCollection(name);
	} catch {
		return []; // collection missing or misconfigured
	}
};

export const GET: APIRoute = async () => {
	const [projects] = await Promise.all([
		safeGet("projects"),
	]);

	const toDoc = (e: any) => {
		const d = e?.data ?? {};
		const body = typeof e?.body === "string" ? e.body : "";
		const arr = (x: unknown) => (Array.isArray(x) ? x : []);

		return {
			url:
				e?.collection === "projects"
					? `/projects/${e?.slug}/`
					: `/${e?.collection}/${e?.slug}/`,
			title: (d.title as string) ?? e?.slug ?? "",
			description: (d.description as string) ?? body.slice(0, 160),
			text:
				[
					d.title,
					d.description,
					d.slug,
					d.repo,
					d.site,
					d.status,
					...arr(d.stack),
					...arr(d.tags),
					e?.slug,
					body,
				]
					.filter(Boolean)
					.join(" ")
					.toLowerCase() || "",
		};
	};

	const all = [...projects].map(toDoc);
	return new Response(JSON.stringify(all), {
		headers: { "Content-Type": "application/json" },
	});
};
