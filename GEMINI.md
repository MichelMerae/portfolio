# Project Overview

This is a personal portfolio website for Michel Merae, an AI Engineer and Automation Architect. It is built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). The content for the portfolio (experiences, projects, and services) is managed through YAML files located in the `content` directory.

The project uses the Next.js App Router, with the main page being `app/page.tsx`. The layout is defined in `app/layout.tsx`. The site features a modern, dark theme with a "bento grid" layout for showcasing projects, which is implemented using `framer-motion` for animations.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server at `http://localhost:3000`.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create an optimized production build in the `.next` directory.

4.  **Start the production server:**
    ```bash
    npm run start
    ```
    This will start the production server.

## Project Structure

The project is organized into the following main directories:

*   `app/`: Contains the core application code, including pages, layouts, and components.
    *   `app/page.tsx`: The main page of the application.
    *   `app/layout.tsx`: The root layout for the application.
    *   `app/components/`: Contains all the React components used in the application.
*   `content/`: Contains the portfolio content in YAML format.
*   `lib/`: Contains utility functions and content parsing logic.
*   `public/`: Contains static assets like images.

## Content Management

The portfolio's content is managed through a set of YAML files located in the `content` directory. This approach separates the data from the presentation layer, making it easy to update the portfolio content without touching the code.

The `content` directory is organized into three subdirectories:

*   `experiences/`: Contains YAML files for each work experience.
    *   `##-experience.yaml`
*   `projects/`: Contains YAML files for each project.
    *   `##-project.yaml`
*   `services/`: Contains YAML files for each service offered.
    *   `##-service.yaml`

### Content Pipeline

The content from the YAML files is processed by functions in `lib/content.ts`. This file uses the `js-yaml` library to parse the YAML files and transform them into JavaScript objects.

The main functions are:

*   `getExperiences()`: Reads all files in `content/experiences`, parses them, and returns an array of `Experience` objects.
*   `getProjects()`: Reads all files in `content/projects`, parses them, and returns an array of `Project` objects.
*   `getServices()`: Reads all files in `content/services`, parses them, and returns an array of `Service` objects.

These functions are then called in `app/page.tsx` to fetch the content and pass it as props to the respective components. For example, the `getProjects()` function is used to fetch the projects, which are then passed to the `BentoGrid` component.

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. The main stylesheet is `app/globals.css`.
*   **Components:** Reusable components are located in the `app/components` directory.
*   **Linting:** The project uses ESLint for code linting. You can run the linter with `npm run lint`.
*   **Typescript:** The project is written in TypeScript.
