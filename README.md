# Nexus-AI

Nexus-AI is an Arabic-first, bilingual interface concept for an AI-enabled automation SaaS product. It demonstrates product positioning, illustrative plan architecture, an accessible dashboard demo, and a browser-only scope planner.

This repository is intentionally a frontend concept. It does **not** include authentication, a database, payments, customer data, or a working automation engine. Demo metrics and activities are labeled sample data throughout the interface.

## What works

- Arabic and English content with synchronized RTL/LTR direction
- Persisted language preference in local browser storage
- Responsive marketing interface and sample dashboard
- Keyboard-accessible navigation, dialog, FAQ, and focus states
- Browser-only scope summary with no personal data collection
- Reduced-motion support and semantic page structure

## Technology

- React 18
- Vite 8
- Tailwind CSS 3
- ESLint 9

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run check
npm audit
```

## Product boundary

Before turning this concept into a commercial service, define the target user and workflows, approve pricing and terms, design data and permissions, implement authentication and backend services, connect real integrations, add observability, and complete security and accessibility testing.

## License

[MIT](./LICENSE)
