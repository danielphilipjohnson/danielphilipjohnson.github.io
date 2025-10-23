export type StackItem = {
  name: string;
  href?: string;
  tone?:
    | "moss"
    | "water"
    | "clay"
    | "ink"
    | "danger"
    | "success"
    | "warn"
    | "muted";
};

export type StackCategory = {
  title: string;
  items: StackItem[];
};

const stack: StackCategory[] = [
  {
    title: "Languages",
    items: [
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
        tone: "moss",
      },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/docs/Web/JavaScript",
        tone: "water",
      },
      { name: "PHP", href: "https://www.php.net/", tone: "ink" },
      { name: "Go", href: "https://go.dev/", tone: "water" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", href: "https://react.dev/", tone: "water" },
      { name: "Next.js", href: "https://nextjs.org/", tone: "ink" },
      { name: "Nuxt.js", href: "https://nuxt.com/", tone: "moss" },
      { name: "Astro", href: "https://astro.build/", tone: "clay" },
      { name: "Tailwind v4", href: "https://tailwindcss.com/", tone: "moss" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", href: "https://nodejs.org/", tone: "moss" },
      { name: "GraphQL", href: "https://graphql.org/", tone: "clay" },
      { name: "NestJS", href: "https://nestjs.com/", tone: "danger" },
      {
        name: "Rust (learning)",
        href: "https://www.rust-lang.org/",
        tone: "ink",
      },
    ],
  },
  {
    title: "Infra / Ops",
    items: [
      { name: "Docker", href: "https://www.docker.com/", tone: "ink" },
      {
        name: "Cloudflare",
        href: "https://www.cloudflare.com/",
        tone: "water",
      },
      {
        name: "GitHub Actions",
        href: "https://github.com/features/actions",
        tone: "moss",
      },
    ],
  },
  {
    title: "Datastores",
    items: [
      {
        name: "PostgreSQL",
        href: "https://www.postgresql.org/",
        tone: "water",
      },
      { name: "MongoDB", href: "https://www.mongodb.com/", tone: "moss" },
      { name: "Redis", href: "https://redis.io/", tone: "clay" },
    ],
  },
  {
    title: "DX / Extras",
    items: [
      { name: "Vite", href: "https://vitejs.dev/", tone: "clay" },
      {
        name: "Satori (OG)",
        href: "https://github.com/vercel/satori",
        tone: "moss",
      },
      { name: "Lucide", href: "https://lucide.dev/", tone: "ink" },
    ],
  },
];

export default stack;
