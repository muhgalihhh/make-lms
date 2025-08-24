# Style Guide Documentation

## Overview

This document outlines the consistent styling patterns used across all pages in the application using shadcn/ui components. The style guide ensures visual consistency and maintainability across welcome, user, admin, and auth pages.

## Style Guide Components

### Location
The main style guide is located at: `resources/js/components/ui/style-guide.tsx`

### Import Usage
```typescript
import { 
    HeroSection, 
    Section, 
    SectionHeader, 
    heroStyles, 
    sectionStyles, 
    cardStyles, 
    featureStyles, 
    testimonialStyles,
    dashboardStyles,
    formStyles 
} from '@/components/ui/style-guide';
```

## Available Style Objects

### 1. Hero Section Styles (`heroStyles`)
Used for main hero/banner sections with gradient backgrounds.

```typescript
const heroStyles = {
    container: "relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20 text-white",
    overlay: "absolute inset-0 bg-black/20",
    content: "relative container mx-auto px-4 sm:px-6 lg:px-8",
    inner: "mx-auto max-w-4xl text-center",
    logo: "mb-8 flex justify-center",
    logoImage: "h-16 w-auto",
    title: "mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl",
    subtitle: "block text-primary-foreground",
    description: "mb-8 text-xl text-primary-foreground/90 sm:text-2xl",
    actions: "flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4",
    primaryButton: "bg-white text-primary hover:bg-gray-100",
    secondaryButton: "border-white text-white hover:bg-white hover:text-primary",
};
```

### 2. Section Styles (`sectionStyles`)
Used for content sections with consistent spacing and layout.

```typescript
const sectionStyles = {
    container: "py-16 lg:py-24",
    content: "container mx-auto px-4 sm:px-6 lg:px-8",
    header: "mx-auto max-w-3xl text-center mb-12 lg:mb-16",
    title: "text-3xl font-bold sm:text-4xl lg:text-5xl",
    subtitle: "mt-4 text-lg text-muted-foreground sm:text-xl",
    grid: "grid gap-8 lg:grid-cols-2 xl:grid-cols-3",
    grid2: "grid gap-8 lg:grid-cols-2",
    grid4: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
};
```

### 3. Card Styles (`cardStyles`)
Used for course cards, product cards, and other card-based layouts.

```typescript
const cardStyles = {
    container: "group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-md",
    image: "aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105",
    content: "p-6",
    header: "mb-4",
    title: "text-xl font-semibold leading-tight",
    description: "mt-2 text-sm text-muted-foreground",
    footer: "mt-4 flex items-center justify-between",
    badge: "text-xs",
    price: "text-lg font-bold",
    rating: "flex items-center gap-1 text-sm text-muted-foreground",
};
```

### 4. Feature Styles (`featureStyles`)
Used for feature highlights and service descriptions.

```typescript
const featureStyles = {
    container: "text-center",
    icon: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary",
    title: "mb-2 text-lg font-semibold",
    description: "text-sm text-muted-foreground",
};
```

### 5. Testimonial Styles (`testimonialStyles`)
Used for customer reviews and testimonials.

```typescript
const testimonialStyles = {
    container: "rounded-xl border bg-card p-6 shadow-sm",
    header: "mb-4 flex items-center gap-4",
    avatar: "h-12 w-12 rounded-full",
    info: "flex-1",
    name: "font-semibold",
    role: "text-sm text-muted-foreground",
    rating: "flex items-center gap-1 text-yellow-500",
    comment: "text-sm text-muted-foreground",
};
```

### 6. Dashboard Styles (`dashboardStyles`)
Used for admin dashboard components and statistics.

```typescript
const dashboardStyles = {
    container: "space-y-6",
    header: "flex items-center justify-between",
    title: "text-3xl font-bold tracking-tight",
    description: "text-muted-foreground",
    actions: "flex items-center space-x-2",
    grid: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
    card: "rounded-xl border bg-card p-6 shadow-sm",
    cardHeader: "flex items-center justify-between",
    cardTitle: "text-sm font-medium text-muted-foreground",
    cardValue: "text-2xl font-bold",
    cardChange: "text-xs text-muted-foreground",
    chart: "rounded-xl border bg-card p-6 shadow-sm",
    table: "rounded-xl border bg-card shadow-sm",
    tableHeader: "border-b bg-muted/50 px-6 py-3 text-left text-sm font-medium",
    tableCell: "px-6 py-4 text-sm",
    tableRow: "border-b transition-colors hover:bg-muted/50",
};
```

### 7. Form Styles (`formStyles`)
Used for authentication forms and input fields.

```typescript
const formStyles = {
    container: "space-y-6",
    group: "space-y-2",
    label: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    input: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    textarea: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    error: "text-sm text-destructive",
    help: "text-sm text-muted-foreground",
};
```

## Pre-built Components

### 1. HeroSection
A complete hero section wrapper with overlay and content structure.

```typescript
<HeroSection>
    <div className={heroStyles.logo}>
        <img src="/logo.png" alt="Logo" className={heroStyles.logoImage} />
    </div>
    <h1 className={heroStyles.title}>
        Main Title
        <span className={heroStyles.subtitle}>Subtitle</span>
    </h1>
    <p className={heroStyles.description}>Description text</p>
    <div className={heroStyles.actions}>
        <Button className={heroStyles.primaryButton}>Primary Action</Button>
        <Button variant="outline" className={heroStyles.secondaryButton}>Secondary Action</Button>
    </div>
</HeroSection>
```

### 2. Section
A content section wrapper with consistent spacing.

```typescript
<Section>
    <SectionHeader 
        title="Section Title"
        subtitle="Section description"
    />
    {/* Section content */}
</Section>
```

### 3. SectionHeader
A standardized header component for sections.

```typescript
<SectionHeader 
    title="Your Title"
    subtitle="Optional subtitle"
/>
```

## Usage Examples

### Welcome Page
```typescript
// Hero Section
<HeroSection>
    <h1 className={heroStyles.title}>Welcome to Our Platform</h1>
    <p className={heroStyles.description}>Description here</p>
    <div className={heroStyles.actions}>
        <Button className={heroStyles.primaryButton}>Get Started</Button>
    </div>
</HeroSection>

// Features Section
<Section>
    <SectionHeader 
        title="Our Features"
        subtitle="What makes us special"
    />
    <div className={sectionStyles.grid4}>
        {features.map((feature) => (
            <div key={feature.id} className={featureStyles.container}>
                <div className={featureStyles.icon}>{feature.icon}</div>
                <h3 className={featureStyles.title}>{feature.title}</h3>
                <p className={featureStyles.description}>{feature.description}</p>
            </div>
        ))}
    </div>
</Section>

// Course Cards
<Section>
    <SectionHeader title="Our Courses" />
    <div className={sectionStyles.grid}>
        {courses.map((course) => (
            <Card key={course.id} className={cardStyles.container}>
                <img src={course.image} className={cardStyles.image} />
                <CardHeader className={cardStyles.content}>
                    <h3 className={cardStyles.title}>{course.title}</h3>
                    <p className={cardStyles.description}>{course.description}</p>
                </CardHeader>
            </Card>
        ))}
    </div>
</Section>
```

### User Dashboard
```typescript
// Stats Cards
<div className={dashboardStyles.grid}>
    {stats.map((stat) => (
        <Card key={stat.id} className={dashboardStyles.card}>
            <div className={dashboardStyles.cardHeader}>
                <h3 className={dashboardStyles.cardTitle}>{stat.title}</h3>
                <span className={dashboardStyles.cardValue}>{stat.value}</span>
            </div>
        </Card>
    ))}
</div>
```

### Auth Forms
```typescript
<Form className={formStyles.container}>
    <div className={formStyles.group}>
        <Label className={formStyles.label}>Email</Label>
        <Input className={formStyles.input} type="email" />
        <InputError className={formStyles.error} />
    </div>
    <Button type="submit">Submit</Button>
</Form>
```

## Best Practices

### 1. Consistent Spacing
- Use `sectionStyles.container` for consistent section padding
- Use `sectionStyles.content` for container width and padding
- Use `sectionStyles.grid` for responsive grid layouts

### 2. Typography
- Use `heroStyles.title` for main page titles
- Use `sectionStyles.title` for section headers
- Use `cardStyles.title` for card titles
- Use `featureStyles.title` for feature titles

### 3. Colors
- Use semantic color classes: `text-primary`, `text-muted-foreground`
- Use consistent hover states: `hover:bg-accent`
- Use consistent focus states: `focus-visible:ring-2`

### 4. Responsive Design
- All grid layouts are responsive by default
- Use `sm:`, `md:`, `lg:`, `xl:` prefixes for responsive variants
- Test on mobile, tablet, and desktop

### 5. Accessibility
- Maintain proper contrast ratios
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation works

## Migration Guide

### From Custom Styles to Style Guide

**Before:**
```typescript
<section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Title</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Content */}
        </div>
    </div>
</section>
```

**After:**
```typescript
<Section className="bg-gray-50">
    <SectionHeader title="Title" />
    <div className={sectionStyles.grid4}>
        {/* Content */}
    </div>
</Section>
```

### Benefits of Using Style Guide

1. **Consistency**: All pages follow the same design patterns
2. **Maintainability**: Changes to styles are centralized
3. **Performance**: Reduced CSS bundle size through reuse
4. **Developer Experience**: Faster development with pre-built components
5. **Accessibility**: Built-in accessibility features
6. **Responsive**: Mobile-first responsive design

## Troubleshooting

### Common Issues

1. **Styles not applying**: Ensure proper import of style objects
2. **Responsive issues**: Check that responsive prefixes are used correctly
3. **Dark mode issues**: Verify that dark mode classes are included
4. **Accessibility issues**: Ensure proper semantic HTML and ARIA labels

### Getting Help

- Check the shadcn/ui documentation for component-specific issues
- Review existing implementations in the codebase
- Test on different screen sizes and devices
- Validate accessibility with screen readers

## Future Enhancements

1. **Theme Customization**: Add support for custom themes
2. **Animation Library**: Integrate with Framer Motion for animations
3. **Icon System**: Standardize icon usage across components
4. **Component Library**: Expand with more pre-built components
5. **Design Tokens**: Implement design tokens for better theming

---

This style guide ensures that all pages (welcome, user, admin, auth) maintain visual consistency while leveraging the power of shadcn/ui components. By following these patterns, developers can create beautiful, accessible, and maintainable user interfaces.