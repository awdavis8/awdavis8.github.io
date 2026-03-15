# Aaron Davis Portfolio Website

A responsive single-page application built with React and Vite to showcase work experience, projects, and contact information.

## Live Demo

[awdavis8.github.io](awdavis8.github.io)

## Technologies Used

- React
- Vite
- EmailJS (`@emailjs/browser`) for contact form delivery
- GitHub Pages (`gh-pages`) for hosting the website
- GitHub Actions for continuous integration and automated deployment.

## Key Features

- Component-based design with reusable UI elements (`ItemCard`, `DesktopNavbar`, `MobileNavbar`, `ContactForm`).
- Responsive behavior across desktop and mobile viewports (dynamic navbar swap based on viewport size).
- Smooth in-page navigation to content sections.

## Run Locally

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The app runs via Vite and is exposed on your local network because the development script uses `vite --host`.

## Deployment

This project is configured for automatic deployment using Github Actions. Upon pushes to the `main` branch, the website is automatically deployed to `gh-pages` branch.

## Project Structure

```text
src/
	App.jsx
	App.css
	index.css
	main.jsx
	assets/
		ContactForm/
		DesktopNavbar/
		MobileNavbar/
		ItemCard/
		ExperienceAssets/
```