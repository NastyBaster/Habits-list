# Habit Tracker App
A lightweight, high-performance web application designed to help users build and sustain positive habits through custom tracking, persistence management, and streak calculations.

## Technical Stack and Dependencies

### Core Frameworks and Tools
- React 19: Leverages the latest concurrent rendering features and native optimizations for component -lifecycle management.

- Vite 8: Serves as the modern development server and fast build bundler, replacing legacy tools with native ESM-powered Hot Module Replacement (HMR).

- TypeScript 6: Implements strict static typing across components, custom hooks, and context states to minimize runtime exceptions.

### Utility and UI Libraries
- Tailwind CSS v4: A utility-first CSS framework configured via modern internal Vite integrations (@tailwindcss/vite) to generate optimized styling inline without manual stylesheet maintenance.

- tailwind-merge: Programmatically resolves conflicting utility classes within interactive components, ensuring predictable UI states.

- date-fns: A functional and immutable toolset used for parsing, validating, and manipulating structural timestamps during habit evaluation cycles.

### Development and Optimization Tooling
- React Compiler (Babel integration): Automatically manages component memoization, eliminating the requirement for manual useMemo or useCallback hooks.

- ESLint 10 & TypeScript-ESLint: Ensures uniform code quality, strict syntax adherence, and standard formatting matching modern enterprise JavaScript ecosystems.

## Application Architecture

### State Management: Context Provider
The global state of the application is isolated inside a centralized architecture utilizing the React Context API (HabitProvider.tsx). This pattern avoids prop-drilling by providing unified state access to downstream UI modules:

- Exposes a state array containing registered habits and corresponding execution metadata.

- Distributes action handlers (addHabit, deleteHabit, toggleHabit) down the component tree dynamically.

- Encapsulates complex status calculations such as custom habit streak logic directly within the state layer.

### Data Persistence: LocalStorage Custom Hook
To prevent state loss on browser refresh cycles, data synchronization is controlled through an isolated, abstract state hook (useLocalStorage.ts):

- Intercepts initial component mounting phases to parse legacy entries securely from browser cache.

- Subscribes actively to component mutation cycles to mirror state records back into the client-side system memory via stringified JSON payloads.

## Automation and CI/CD (GitHub Actions)
The repository features automated deployment processes managed through GitHub Workflows (.github/workflows/deploy.yml).

Every time code changes are successfully integrated into the production source code branch, a container environment triggers standard integration jobs:

1. Environment Preparation: Installs target NodeJS environments and project-specific manifest dependencies.

2. Lint Verification: Analyzes structural validity and structural warnings using active eslint presets.

3. Compilation Check: Runs strict TypeScript compilation checks alongside structural application bundling pipelines (vite build).

4. Static Page Deployment: Pushes built assets directly to dedicated static servers managed via production environments.

## Getting Started
Local Deployment
To initialize the development environment on your local system, run the following sequence of commands inside your terminal workspace:

`
# Clone the project repository
git clone https://github.com/NastyBaster/Habits-list.git

# Navigate into the project root directory
cd habbit-tracker-app

# Install project development dependencies
npm install

# Launch the local development server
npm run dev
`
## Build for Production
To generate performance-optimized static distribution assets suitable for continuous delivery systems, run the following compile script:

```
npm run build
```

## Project Documentation & Resources
- Production Deployment: View the live interactive application interface hosted directly on [GitHub Pages](https://nastybaster.github.io/Habits-list/).

- Beginner Reference Materials: Review the official [Vite Getting Started Guide](https://vite.dev/guide/) and [React documentation](https://react.dev/) to understand configuration protocols and modern functional UI design standards.
