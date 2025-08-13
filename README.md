# jonas-miederer.de
The codebase for my personal website - Check it out @ [jonas-miederer.de](https://jonas-miederer.de/) ✌️.

This is a modern portfolio and personal website built with [Next.js](https://nextjs.org/) and [React](https://react.dev/), styled using [Tailwind CSS](https://tailwindcss.com/) and [HeroUI](https://heroui.dev/).  
It showcases information about myself, my experience, certifications, and selected works/projects.

## Tech Stack

- Next.js (Static Export)
- React 19
- Tailwind CSS 4
- HeroUI component library
- TypeScript
- Framer Motion

## Deployment

The site is exported as static files and deployed to AWS S3, served via AWS CloudFront.  
API requests (e.g., contact form) are routed to an AWS API Gateway endpoint, which triggers notifications via SNS.

Deployment is automated via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)).

## Infrastructure

The infrastructure is provided via the [jonas-miederer.infra](https://github.com/jonasmiederer/jonas-miederer.infra) repository containing the IaC for this website, defined using [AWS SAM](https://aws.amazon.com/serverless/sam/).

## Development

```sh
npm install
npm run dev
```

## Build & Export

```sh
npm run build
```

## License

MIT
