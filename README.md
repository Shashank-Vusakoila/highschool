# Nalanda High School Website

A polished, single-page Next.js website for Nalanda High School.

## Stack

- Next.js 14
- React 18
- Global CSS in `styles/globals.css`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

```text
pages/
  _app.js
  _document.js
  index.js
public/images/
styles/
  globals.css
```

## Client Content To Verify Before Launch

- Exact school address
- Final phone / WhatsApp number
- Final email address
- Real admissions policy or wording
- Social media links in the footer
- Whether the displayed statistics are approved for public use

## Deployment

This project can be deployed directly to Vercel or any platform that supports Next.js.

### Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

### Manual Production Check

Before handing off or deploying, run:

```bash
npm run build
```

If the build passes, the project is ready for deployment.
