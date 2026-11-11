# Mohammadreza Hashemi — Portfolio

A Next.js portfolio featuring an AI career assistant powered by OpenRouter's
`nvidia/nemotron-3.5-super-vl` model.

## Run locally

1. Install dependencies with `npm install`.
2. For Next.js development, copy `.env.example` to `.env.local` and add your
   OpenRouter API key.
3. Start the development server with `npm run dev`, then open
   [http://localhost:3000](http://localhost:3000).

To preview the Cloudflare Worker runtime locally, copy `.dev.vars.example` to
`.dev.vars`, add your OpenRouter API key, then run `npm run preview`.

The API key is used only by the server-side chat route. Never commit `.env` or
`.env.local`; `.dev.vars` is also ignored by Git.

## Deploy to Cloudflare Workers

1. Authenticate with `npx wrangler login`.
2. Run `npm run deploy` to build and publish the Worker.
3. In the Cloudflare dashboard, open **Workers & Pages** →
   **mohammadreza-hashemi-portfolio** → **Settings** → **Variables and Secrets**.
   Add `OPENROUTER_API_KEY` as a **Secret**. Alternatively, run
   `npx wrangler secret put OPENROUTER_API_KEY` and enter the key in the
   terminal prompt. Do not put the key in `wrangler.jsonc` or Git.

The chat becomes available after the secret is added. Wrangler prints the public
`workers.dev` URL after deployment.
