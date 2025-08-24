import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

// ===== HERO SECTION STYLES =====
export const heroStyles = {
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

// ===== SECTION STYLES =====
export const sectionStyles = {
  container: "py-16 lg:py-24",
  content: "container mx-auto px-4 sm:px-6 lg:px-8",
  header: "mx-auto max-w-3xl text-center mb-12 lg:mb-16",
  title: "text-3xl font-bold sm:text-4xl lg:text-5xl",
  subtitle: "mt-4 text-lg text-muted-foreground sm:text-xl",
  grid: "grid gap-8 lg:grid-cols-2 xl:grid-cols-3",
  grid2: "grid gap-8 lg:grid-cols-2",
  grid4: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
};

// ===== CARD STYLES =====
export const cardStyles = {
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

// ===== FEATURE STYLES =====
export const featureStyles = {
  container: "text-center",
  icon: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary",
  title: "mb-2 text-lg font-semibold",
  description: "text-sm text-muted-foreground",
};

// ===== TESTIMONIAL STYLES =====
export const testimonialStyles = {
  container: "rounded-xl border bg-card p-6 shadow-sm",
  header: "mb-4 flex items-center gap-4",
  avatar: "h-12 w-12 rounded-full",
  info: "flex-1",
  name: "font-semibold",
  role: "text-sm text-muted-foreground",
  rating: "flex items-center gap-1 text-yellow-500",
  comment: "text-sm text-muted-foreground",
};

// ===== STATS STYLES =====
export const statsStyles = {
  container: "rounded-xl border bg-card p-6 shadow-sm",
  value: "text-3xl font-bold",
  label: "text-sm text-muted-foreground",
  change: "text-sm font-medium",
  positive: "text-green-600",
  negative: "text-red-600",
};

// ===== BUTTON STYLES =====
export const buttonStyles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  link: "text-primary underline-offset-4 hover:underline",
};

// ===== FORM STYLES =====
export const formStyles = {
  container: "space-y-6",
  group: "space-y-2",
  label: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  input: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  textarea: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  error: "text-sm text-destructive",
  help: "text-sm text-muted-foreground",
};

// ===== NAVIGATION STYLES =====
export const navigationStyles = {
  container: "sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
  content: "container mx-auto px-4",
  header: "flex h-16 items-center justify-between",
  logo: "flex items-center gap-2",
  nav: "hidden items-center space-x-8 md:flex",
  navItem: "text-sm font-medium transition-colors hover:text-primary",
  navItemActive: "text-primary",
  navItemInactive: "text-muted-foreground",
  actions: "hidden items-center space-x-4 md:flex",
  mobileButton: "h-9 w-9 p-0 md:hidden",
  mobileMenu: "border-t py-4 md:hidden",
  mobileNav: "space-y-4",
  mobileNavItem: "block text-sm font-medium transition-colors hover:text-primary",
};

// ===== FOOTER STYLES =====
export const footerStyles = {
  container: "border-t bg-background",
  content: "container mx-auto px-4 py-12 lg:px-8",
  grid: "grid gap-8 lg:grid-cols-4",
  section: "space-y-4",
  title: "text-lg font-semibold",
  links: "space-y-2",
  link: "text-sm text-muted-foreground transition-colors hover:text-foreground",
  bottom: "border-t py-6 text-center text-sm text-muted-foreground",
  social: "flex items-center space-x-4",
  socialLink: "text-muted-foreground transition-colors hover:text-foreground",
};

// ===== DASHBOARD STYLES =====
export const dashboardStyles = {
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

// ===== UTILITY STYLES =====
export const utilityStyles = {
  container: "container mx-auto px-4 sm:px-6 lg:px-8",
  maxWidth: "mx-auto max-w-7xl",
  textCenter: "text-center",
  textLeft: "text-left",
  textRight: "text-right",
  hidden: "hidden",
  block: "block",
  flex: "flex",
  inlineFlex: "inline-flex",
  itemsCenter: "items-center",
  justifyCenter: "justify-center",
  justifyBetween: "justify-between",
  spaceX: "space-x-",
  spaceY: "space-y-",
  gap: "gap-",
  rounded: "rounded-",
  border: "border",
  shadow: "shadow-",
  transition: "transition-all duration-300",
  hover: "hover:",
  focus: "focus:",
  disabled: "disabled:",
};

// ===== COMPONENT WRAPPERS =====
export const HeroSection = ({ 
  children, 
  className, 
  ...props 
}: { 
  children: ReactNode; 
  className?: string; 
  [key: string]: any; 
}) => (
  <section className={cn(heroStyles.container, className)} {...props}>
    <div className={heroStyles.overlay} />
    <div className={cn(heroStyles.content, heroStyles.inner)}>
      {children}
    </div>
  </section>
);

export const Section = ({ 
  children, 
  className, 
  ...props 
}: { 
  children: ReactNode; 
  className?: string; 
  [key: string]: any; 
}) => (
  <section className={cn(sectionStyles.container, className)} {...props}>
    <div className={sectionStyles.content}>
      {children}
    </div>
  </section>
);

export const SectionHeader = ({ 
  title, 
  subtitle, 
  className, 
  ...props 
}: { 
  title: string; 
  subtitle?: string; 
  className?: string; 
  [key: string]: any; 
}) => (
  <div className={cn(sectionStyles.header, className)} {...props}>
    <h2 className={sectionStyles.title}>{title}</h2>
    {subtitle && <p className={sectionStyles.subtitle}>{subtitle}</p>}
  </div>
);

// ===== EXPORT ALL STYLES =====
export const styles = {
  hero: heroStyles,
  section: sectionStyles,
  card: cardStyles,
  feature: featureStyles,
  testimonial: testimonialStyles,
  stats: statsStyles,
  button: buttonStyles,
  form: formStyles,
  navigation: navigationStyles,
  footer: footerStyles,
  dashboard: dashboardStyles,
  utility: utilityStyles,
};