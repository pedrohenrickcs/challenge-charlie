# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Charlie Challenge

[[English](README.md) | [Portuguese](README.pt.md)]

This is a Next.js 14 project configured with TypeScript, Tailwind CSS, Axios and Jest.

## Prerequisites

Make sure you have Node.js installed on your machine.

> node: v20.12.2

## Instalação

Clone this repository:
```bash
git clone https://github.com/seu-usuario/meu-projeto-nextjs.git
```
### Navigate to the project directory

```bash
cd challenge-charlie
```

### Install dependencies
```bash
npm install
#ou
yarn install
```

### To start the development server, run the following command
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The project will be available at http://localhost:3000.

## Available Scripts
### In the project directory, you can run the following scripts

```bash
> dev: Starts the development server.
> build: Compiles the project for production.
> start: Starts the production server.
> lint: Checks for lint-related issues
> test: Runs unit tests.
> test:watch: Runs unit tests watched.
```

## Project Structure
### The project folder structure is as follows
```bash
├── app/              # pages
├── assets/           # Store static files
├── components/       # Reusable components
├── pages/            # Application pages
├── services/         # Centralizes APIs
├── styles/           # Global and local styles
├── types/            # Stores TypeScript type definitions
├── utils/            # Utility functions and helpers
├── .gitignore        # Files to be ignored by Git
├── jest.config.js    # Jest Settings
├── next.config.js    # Next.js Settings
├── package.json      # Project manifest file
└── tsconfig.json     # TypeScript Settings
```
## Technologies Used

```bash
Next.js 14
TypeScript
Tailwind CSS
Axios
Jest
```

## Deploy com Github Actions

Github Actions was used to perform the deployment. To access, simply access the URL: [Charlie Challenge](https://pedrohenrickcs.github.io/challenge-charlie/)

## Docker
Compile the container
```bash
docker build -t challange-charlie .
```

Rotate application
```bash
docker run -p 3000:3000 challange-charlie
```

The project will be available at http://localhost:3000.
