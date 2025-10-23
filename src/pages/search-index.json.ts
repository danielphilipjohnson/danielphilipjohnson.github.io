import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true; // emit a static JSON file

export const GET: APIRoute = async () => {
	const projects = await getCollection('projects').catch(() => []);
	const posts = await getCollection('posts').catch(() => []);

	const toDoc = (e: any) => {
		const d = e.data ?? {};
		return {
			url: e.collection === 'projects' ? `/projects/${e.slug}/` : `/${e.collection}/${e.slug}/`,
			title: d.title ?? e.slug,
			description: d.description ?? (e.body ?? '').slice(0, 160),
			text: [
				d.title, d.description, d.slug, d.repo, d.site, d.status,
				...(d.stack ?? []), ...(d.tags ?? []), e.slug, e.body ?? '',
			].join(' ').toLowerCase(),
		};
	};

	const all = [...projects, ...posts].map(toDoc);
	return new Response(JSON.stringify(all), { headers: { 'Content-Type': 'application/json' } });
};
