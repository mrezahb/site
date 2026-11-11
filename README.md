# Mohammadreza Hashemi — Portfolio

A Next.js portfolio featuring an AI career assistant powered by OpenRouter's
`nvidia/nemotron-3.5-super-vl` model.

## Run locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and add your OpenRouter API key.
3. Start the development server with `npm run dev`, then open
   [http://localhost:3000](http://localhost:3000).

The API key is used only by the server-side chat route. Never commit `.env` or
`.env.local`; set `OPENROUTER_API_KEY` as a server-side environment variable
when deploying.
