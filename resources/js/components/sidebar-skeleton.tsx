import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface SidebarSkeletonProps {
    isCollapsed?: boolean;
}

export function SidebarSkeleton({ isCollapsed = false }: SidebarSkeletonProps) {
    return (
        <div className="flex flex-col h-full border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Header Skeleton */}
            <div className="flex h-16 items-center border-b px-4">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-8 rounded-lg" />
                    {!isCollapsed && <Skeleton className="h-6 w-32" />}
                </div>
            </div>

            {/* Navigation Skeleton */}
            <div className="flex-1 px-3 py-4">
                <div className="space-y-1">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-3 p-2">
                            <Skeleton className="h-4 w-4 rounded" />
                            {!isCollapsed && (
                                <div className="flex flex-col gap-1 flex-1">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-3 w-16" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Skeleton */}
            {isCollapsed && (
                <div className="border-t p-2">
                    <Skeleton className="h-8 w-8 mx-auto rounded" />
                </div>
            )}
        </div>
    );
}