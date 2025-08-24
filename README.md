# Laravel 12 + React Starterkit

A modern web application built with Laravel 12 and React, featuring the best practices for scalable development.

## Features

- **Laravel 12** - Latest Laravel framework with modern PHP features
- **React 18** - Latest React with hooks and modern patterns
- **TypeScript** - Full TypeScript support for better development experience
- **Tailwind CSS** - Utility-first CSS framework with dark mode support
- **Inertia.js** - Seamless SPA experience without API complexity
- **Vite** - Fast build tool and development server
- **Radix UI** - Accessible and customizable UI components
- **Lucide React** - Beautiful and consistent icons

## Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js 18 or higher
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database setup**
   ```bash
   php artisan migrate
   ```

## Development

### Starting the development servers

1. **Start Laravel development server**
   ```bash
   php artisan serve
   ```

2. **Start Vite development server** (in a new terminal)
   ```bash
   npm run dev
   ```

3. **Access the application**
   - Laravel server: http://localhost:8000
   - Vite dev server: http://localhost:5173

### Available npm scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run ssr:dev` - Start SSR development server
- `npm run ssr:build` - Build for SSR production

## Project Structure

```
resources/
├── js/
│   ├── components/     # Reusable React components
│   │   └── ui/        # Base UI components (Radix UI)
│   ├── layouts/       # Layout components
│   ├── pages/         # Inertia page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── types/         # TypeScript type definitions
│   ├── app.tsx        # Main application entry point
│   └── ssr.tsx        # SSR entry point
├── css/
│   └── app.css        # Main stylesheet
└── views/
    └── app.blade.php  # Main blade template
```

## Best Practices

### Code Organization

- Use TypeScript for all JavaScript/React files
- Follow Laravel naming conventions for PHP files
- Use PascalCase for React components
- Use camelCase for functions and variables
- Use kebab-case for CSS classes

### Component Structure

```tsx
import { ReactNode } from 'react';

interface ComponentProps {
    children: ReactNode;
    // other props...
}

export default function Component({ children, ...props }: ComponentProps) {
    return (
        <div>
            {children}
        </div>
    );
}
```

### Styling

- Use Tailwind CSS utility classes
- Create custom components for reusable styles
- Use CSS variables for theming
- Support dark mode with `dark:` prefix

### State Management

- Use React hooks for local state
- Use Inertia.js for server state
- Keep state as close to where it's used as possible

## Troubleshooting

### Common Issues

1. **ERR_ADDRESS_INVALID error**
   - Ensure all npm dependencies are installed: `npm install`
   - Check if Vite server is running on correct port
   - Verify Laravel server is running

2. **TypeScript errors**
   - Run `npm run build` to check for type errors
   - Ensure all imports are correct
   - Check TypeScript configuration

3. **Styling issues**
   - Ensure Tailwind CSS is properly configured
   - Check if CSS variables are defined
   - Verify dark mode classes are applied correctly

### Development Tips

- Use browser dev tools to debug React components
- Use Laravel Telescope for debugging PHP code
- Enable source maps in development
- Use React DevTools for component inspection

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open-sourced software licensed under the [MIT license](LICENSE).