# Serena UI - Component Library (Work in Progress)

This repository contains the foundational components for the Serena UI component library. This library is currently under active development and is not yet ready for production use.

## Project Status

**Work in Progress:** This library is in its early stages. APIs, components, and styling are subject to change without notice. We are actively building and refining the components.

## Getting Started (For Contributors)

To set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lopesmarcello/serena-ui.git 
    cd serena-ui
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
3.  **Run Storybook (for component development):**
    ```bash
    pnpm storybook
    ```

## Building the Library

To build the library for distribution:

```bash
pnpm build
```

This will output the compiled JavaScript, CommonJS, and TypeScript declaration files into the `dist/` directory.

## Usage (For Consumers - Future)

Once published, you will be able to install this library via npm:

```bash
npm install serena-ui # Or pnpm add serena-ui
```

### Tailwind CSS Integration

This library uses Tailwind CSS for styling. To ensure components are styled correctly in your application, you will need to configure your `tailwind.config.js` to include the library's files in its `content` array. This allows Tailwind to process the utility classes used within Serena UI components.

Example `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Include Serena UI components for Tailwind processing
    './node_modules/serena-ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Contributing

We welcome contributions! Please see our `CONTRIBUTING.md` (coming soon) for guidelines.

## License

[License Information - e.g., MIT License]
