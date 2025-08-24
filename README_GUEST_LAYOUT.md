# Guest Layout - Panduan Penggunaan

## 📖 Overview

Guest Layout adalah komponen layout yang dirancang khusus untuk halaman-halaman yang dapat diakses oleh pengunjung (guest) tanpa perlu login. Layout ini menyediakan header, footer, dan struktur dasar yang konsisten untuk semua halaman guest.

## 🚀 Quick Start

### 1. Import Layout
```typescript
import GuestLayout from '@/layouts/guest-layout';
```

### 2. Wrap Your Content
```typescript
const YourPage = () => {
    return (
        <GuestLayout>
            <div>Your page content here</div>
        </GuestLayout>
    );
};
```

## 🎯 Basic Usage

### Minimal Implementation
```typescript
import GuestLayout from '@/layouts/guest-layout';

const HomePage = () => {
    return (
        <GuestLayout>
            <h1>Welcome to Our Platform</h1>
            <p>This is your content wrapped in guest layout.</p>
        </GuestLayout>
    );
};
```

### With Custom SEO
```typescript
const AboutPage = () => {
    return (
        <GuestLayout
            title="About Us - Platform Name"
            description="Learn more about our platform and mission."
            keywords="about, company, mission, vision"
        >
            <div>About page content</div>
        </GuestLayout>
    );
};
```

### Custom Styling
```typescript
const ContactPage = () => {
    return (
        <GuestLayout
            className="bg-gradient-to-br from-blue-50 to-indigo-100"
            headerClassName="bg-white/80 backdrop-blur"
            mainClassName="pt-8"
        >
            <div>Contact page content</div>
        </GuestLayout>
    );
};
```

## ⚙️ Props Configuration

### Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to be rendered inside layout |
| `title` | `string` | `'AkademiKoding - Platform Pembelajaran Online Terpercaya'` | Page title for SEO |
| `description` | `string` | `'Belajar coding, design, dan skill digital lainnya...'` | Meta description |
| `keywords` | `string` | `'coding, programming, web development...'` | Meta keywords |
| `showHeader` | `boolean` | `true` | Show/hide header |
| `showFooter` | `boolean` | `true` | Show/hide footer |
| `className` | `string` | - | Additional CSS classes for main container |
| `headerClassName` | `string` | - | Additional CSS classes for header |
| `footerClassName` | `string` | - | Additional CSS classes for footer |
| `mainClassName` | `string` | - | Additional CSS classes for main content |

## 🎨 Customization Examples

### 1. Landing Page Without Footer
```typescript
const LandingPage = () => {
    return (
        <GuestLayout
            showFooter={false}
            className="min-h-screen"
            title="Welcome - Get Started Today"
            description="Join thousands of learners and start your tech journey today."
        >
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold">Welcome</h1>
                    <p className="mt-4 text-xl">Start your learning journey</p>
                </div>
            </div>
        </GuestLayout>
    );
};
```

### 2. Blog Post with Custom SEO
```typescript
const BlogPost = () => {
    const post = {
        title: "Getting Started with React",
        description: "Learn the basics of React and build your first component.",
        keywords: "react, javascript, frontend, web development",
        author: "John Doe",
        publishedAt: "2024-01-15"
    };

    return (
        <GuestLayout
            title={`${post.title} - Blog`}
            description={post.description}
            keywords={post.keywords}
            mainClassName="max-w-4xl mx-auto py-8"
        >
            <article className="prose prose-lg max-w-none">
                <h1>{post.title}</h1>
                <div className="text-gray-600 mb-8">
                    By {post.author} • {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <div>Blog content here...</div>
            </article>
        </GuestLayout>
    );
};
```

### 3. Course Listing Page
```typescript
const CoursesPage = () => {
    return (
        <GuestLayout
            title="All Courses - Learn Programming"
            description="Browse our comprehensive collection of programming courses."
            keywords="courses, programming, learn, tutorial"
            mainClassName="py-8"
        >
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8">All Courses</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Course cards here */}
                </div>
            </div>
        </GuestLayout>
    );
};
```

## 🔧 Advanced Configuration

### 1. Custom Navigation Items
```typescript
// Edit the NAVIGATION_ITEMS constant in guest-layout.tsx
const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Courses',
        href: '/courses',
        children: [
            { label: 'Free Courses', href: '/courses/free' },
            { label: 'Premium Courses', href: '/courses/premium' },
        ],
    },
    {
        label: 'About',
        href: '/about',
    },
];
```

### 2. Custom Social Links
```typescript
// Edit the SOCIAL_LINKS constant in guest-layout.tsx
const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'Facebook',
        href: 'https://facebook.com/yourpage',
        icon: <Facebook className="h-5 w-5" />,
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/yourhandle',
        icon: <Twitter className="h-5 w-5" />,
    },
];
```

### 3. Custom Footer Links
```typescript
// Edit the FOOTER_LINKS constant in guest-layout.tsx
const FOOTER_LINKS = {
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
    ],
    support: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact', href: '/contact' },
    ],
};
```

## 🧪 Testing

### 1. Unit Tests
```typescript
import { render, screen } from '@testing-library/react';
import GuestLayout from '@/layouts/guest-layout';

describe('GuestLayout', () => {
    it('renders children correctly', () => {
        render(
            <GuestLayout>
                <div data-testid="content">Test content</div>
            </GuestLayout>
        );
        
        expect(screen.getByTestId('content')).toBeInTheDocument();
    });

    it('shows header by default', () => {
        render(<GuestLayout>Content</GuestLayout>);
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('hides header when showHeader is false', () => {
        render(<GuestLayout showHeader={false}>Content</GuestLayout>);
        expect(screen.queryByRole('banner')).not.toBeInTheDocument();
    });
});
```

### 2. Accessibility Tests
```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should not have accessibility violations', async () => {
    const { container } = render(
        <GuestLayout>
            <div>Content</div>
        </GuestLayout>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
});
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Layout Not Rendering
```typescript
// ❌ Wrong
const Page = () => <div>Content</div>;

// ✅ Correct
const Page = () => (
    <GuestLayout>
        <div>Content</div>
    </GuestLayout>
);
```

#### 2. SEO Meta Tags Not Working
```typescript
// Make sure you're passing the props correctly
<GuestLayout
    title="Your Page Title"
    description="Your page description"
    keywords="your, keywords, here"
>
    Content
</GuestLayout>
```

#### 3. Styling Issues
```typescript
// Use the className props for custom styling
<GuestLayout
    className="custom-container-class"
    headerClassName="custom-header-class"
    footerClassName="custom-footer-class"
    mainClassName="custom-main-class"
>
    Content
</GuestLayout>
```

#### 4. Navigation Not Working
```typescript
// Check if your routes are properly configured
// Make sure the href values match your route paths
const NAVIGATION_ITEMS = [
    {
        label: 'Home',
        href: '/', // This should match your route
    },
];
```

### Performance Issues

#### 1. Large Bundle Size
```typescript
// Use lazy loading for pages
const LazyPage = lazy(() => import('./YourPage'));

// Wrap with Suspense
<Suspense fallback={<LoadingSpinner />}>
    <LazyPage />
</Suspense>
```

#### 2. Slow Rendering
```typescript
// Memoize expensive components
const ExpensiveComponent = memo(() => {
    // Your component logic
});

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
    return heavyCalculation(data);
}, [data]);
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

### Mobile Navigation
The layout automatically switches to a hamburger menu on mobile devices. The mobile menu includes:
- All navigation items
- Dropdown submenus
- Search functionality
- Authentication buttons

### Responsive Utilities
```typescript
// Use Tailwind's responsive prefixes
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="text-sm md:text-base lg:text-lg"
className="p-4 md:p-6 lg:p-8"
```

## ♿ Accessibility

### Features Included
- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<footer>`
- **ARIA Labels**: All interactive elements have proper ARIA attributes
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader**: Compatible with screen readers
- **Focus Management**: Proper focus handling for dropdowns and modals

### Testing Accessibility
```typescript
// Use axe-core for accessibility testing
import { axe, toHaveNoViolations } from 'jest-axe';

it('should be accessible', async () => {
    const { container } = render(
        <GuestLayout>
            <div>Content</div>
        </GuestLayout>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
});
```

## 🔄 Migration Guide

### From Old Layout
If you're migrating from an existing layout:

1. **Replace Layout Import**
```typescript
// ❌ Old
import OldLayout from '@/layouts/old-layout';

// ✅ New
import GuestLayout from '@/layouts/guest-layout';
```

2. **Update Props**
```typescript
// ❌ Old
<OldLayout title="Page Title">
    Content
</OldLayout>

// ✅ New
<GuestLayout
    title="Page Title"
    description="Page description"
    keywords="page, keywords"
>
    Content
</GuestLayout>
```

3. **Update Styling**
```typescript
// ❌ Old
<OldLayout className="custom-class">
    Content
</OldLayout>

// ✅ New
<GuestLayout
    className="custom-class"
    headerClassName="custom-header"
    footerClassName="custom-footer"
    mainClassName="custom-main"
>
    Content
</GuestLayout>
```

## 📚 Additional Resources

- [Guest Layout Best Practices](./GUEST_LAYOUT_BEST_PRACTICES.md)
- [Component Documentation](./components/README.md)
- [Styling Guide](./styling/README.md)
- [Testing Guide](./testing/README.md)

## 🤝 Contributing

When contributing to the Guest Layout:

1. Follow the existing code style
2. Add tests for new features
3. Update documentation
4. Ensure accessibility compliance
5. Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

**Need Help?** If you encounter any issues or have questions, please check the troubleshooting section above or create an issue in the project repository.