# Sticky Navbar & Toggleable Sidebar Guide

## Overview

This implementation provides a modern, responsive layout with:
- **Sticky Navbar**: Always visible at the top with backdrop blur effect
- **Toggleable Sidebar**: Can be collapsed/expanded with smooth animations
- **Responsive Design**: Works on all screen sizes
- **Smooth Transitions**: CSS animations for better UX

## Features

### 🎯 Sticky Navbar
- Fixed position at the top
- Backdrop blur effect for modern look
- High z-index to stay above content
- Responsive design with mobile menu
- Sidebar toggle button
- User profile dropdown
- Search functionality

### 🔄 Toggleable Sidebar
- Smooth expand/collapse animations
- Icon-only mode when collapsed
- Responsive navigation items
- User section with avatar
- Footer links
- Keyboard shortcuts support

### 📱 Responsive Design
- Mobile-first approach
- Collapsible mobile menu
- Adaptive sidebar behavior
- Touch-friendly interactions

## Usage

### Basic Implementation

```tsx
import AppLayout from '@/layouts/app-layout';

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={[
            { title: 'Dashboard', href: '/dashboard' }
        ]}>
            <div>Your content here</div>
        </AppLayout>
    );
}
```

### With Custom Breadcrumbs

```tsx
<AppLayout breadcrumbs={[
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Users', href: '/users' },
    { title: 'Edit User', href: '/users/1/edit' }
]}>
    <UserEditForm />
</AppLayout>
```

## Components

### AppHeader
Located at `resources/js/components/app-header.tsx`

**Props:**
- `breadcrumbs?: BreadcrumbItem[]` - Navigation breadcrumbs
- `onSidebarToggle?: () => void` - Sidebar toggle callback
- `sidebarOpen?: boolean` - Current sidebar state

**Features:**
- Sticky positioning with backdrop blur
- Sidebar toggle button
- Mobile responsive menu
- User profile dropdown
- Search functionality

### AppSidebar
Located at `resources/js/components/app-sidebar.tsx`

**Props:**
- `collapsed?: boolean` - Whether sidebar is collapsed

**Features:**
- Smooth collapse/expand animations
- Icon-only mode when collapsed
- Navigation items with icons
- User section
- Footer links

### AppLayout
Located at `resources/js/layouts/app-layout.tsx`

**Props:**
- `children: ReactNode` - Page content
- `breadcrumbs?: BreadcrumbItem[]` - Navigation breadcrumbs

**Features:**
- Manages sidebar state
- Provides layout structure
- Handles responsive behavior

## Styling

### CSS Classes

```css
/* Sticky navbar */
.sticky top-0 z-50 bg-background/95 backdrop-blur

/* Sidebar transitions */
.transition-all duration-300 ease-in-out

/* Responsive sidebar widths */
.sidebar-open: w-64
.sidebar-collapsed: w-16

/* Content margin adjustments */
.content-with-sidebar: ml-64
.content-collapsed: ml-16
```

### Customization

You can customize the sidebar width by modifying the CSS variables:

```css
:root {
    --sidebar-width: 16rem;
    --sidebar-width-collapsed: 4rem;
}
```

## Keyboard Shortcuts

- `Ctrl/Cmd + B` - Toggle sidebar (if implemented)
- `Escape` - Close mobile menu

## Mobile Behavior

### Sidebar
- Hidden by default on mobile
- Accessible via hamburger menu
- Full-width overlay when open

### Navbar
- Compact design on mobile
- Collapsible menu items
- Touch-friendly buttons

## Best Practices

### 1. Content Structure
```tsx
<AppLayout>
    {/* Use semantic HTML */}
    <main>
        <section>
            <h1>Page Title</h1>
            <p>Page description</p>
        </section>
        
        {/* Use cards for content sections */}
        <div className="grid gap-4 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Section Title</CardTitle>
                </CardHeader>
                <CardContent>
                    Content here
                </CardContent>
            </Card>
        </div>
    </main>
</AppLayout>
```

### 2. Navigation Items
```tsx
const navItems = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Home,
    },
    {
        title: 'Users',
        href: '/users',
        icon: Users,
    },
];
```

### 3. Breadcrumbs
```tsx
const breadcrumbs = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Users', href: '/users' },
    { title: 'Edit User', href: '/users/1/edit' }
];
```

## Troubleshooting

### Sidebar Not Toggling
- Check if `onSidebarToggle` prop is passed correctly
- Verify state management in parent component
- Ensure CSS transitions are not disabled

### Navbar Not Sticky
- Check z-index values
- Verify `position: sticky` is applied
- Ensure no conflicting CSS rules

### Mobile Issues
- Test touch interactions
- Verify viewport meta tag
- Check responsive breakpoints

## Performance Tips

1. **Lazy Loading**: Load sidebar content on demand
2. **Debounced Resize**: Handle window resize events efficiently
3. **CSS Transitions**: Use `transform` instead of `width` for better performance
4. **Virtual Scrolling**: For long lists in sidebar

## Accessibility

- Proper ARIA labels for toggle buttons
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Focus management

## Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## Future Enhancements

- [ ] Sidebar state persistence
- [ ] Customizable sidebar themes
- [ ] Drag to resize sidebar
- [ ] Multiple sidebar layouts
- [ ] Advanced search integration
- [ ] Notification system
- [ ] Dark mode improvements