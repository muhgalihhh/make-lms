import { Component, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface SidebarErrorBoundaryProps {
    children: ReactNode;
}

interface SidebarErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export class SidebarErrorBoundary extends Component<SidebarErrorBoundaryProps, SidebarErrorBoundaryState> {
    constructor(props: SidebarErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): SidebarErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error('Sidebar Error:', error, errorInfo);
        // You can log the error to an error reporting service here
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: undefined });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col h-full border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    {/* Header */}
                    <div className="flex h-16 items-center border-b px-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10">
                                <AlertTriangle className="h-4 w-4 text-destructive" />
                            </div>
                            <span className="text-lg font-semibold text-destructive">
                                Error
                            </span>
                        </div>
                    </div>

                    {/* Error Content */}
                    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                        <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                        <h3 className="text-lg font-semibold mb-2">
                            Sidebar Error
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                            Something went wrong while loading the sidebar. Please try refreshing the page.
                        </p>
                        <Button 
                            onClick={this.handleRetry}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                        >
                            <RefreshCw className="h-4 w-4" />
                            Retry
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}