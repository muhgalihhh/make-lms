import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, Keyboard } from 'lucide-react';

const shortcuts = [
    {
        key: 'Ctrl/Cmd + B',
        description: 'Toggle sidebar',
        category: 'Navigation'
    },
    {
        key: 'Escape',
        description: 'Close mobile sidebar',
        category: 'Navigation'
    },
    {
        key: 'Tab',
        description: 'Navigate through menu items',
        category: 'Navigation'
    },
    {
        key: 'Ctrl/Cmd + K',
        description: 'Open search',
        category: 'Search'
    },
    {
        key: 'Ctrl/Cmd + /',
        description: 'Show this help',
        category: 'Help'
    }
];

export function KeyboardShortcutsHelp() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 p-0"
                    aria-label="Keyboard shortcuts help"
                >
                    <HelpCircle className="h-5 w-5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Keyboard className="h-5 w-5" />
                        Keyboard Shortcuts
                    </DialogTitle>
                    <DialogDescription>
                        Use these keyboard shortcuts to navigate the admin panel more efficiently.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    {shortcuts.map((shortcut, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex flex-col gap-1">
                                <span className="text-sm font-medium">{shortcut.description}</span>
                                <Badge variant="secondary" className="w-fit text-xs">
                                    {shortcut.category}
                                </Badge>
                            </div>
                            <kbd className="px-2 py-1 text-xs font-semibold bg-muted rounded border">
                                {shortcut.key}
                            </kbd>
                        </div>
                    ))}
                </div>
                <div className="text-xs text-muted-foreground text-center pt-4 border-t">
                    <p>Tip: You can also use the menu button in the header to toggle the sidebar.</p>
                </div>
            </DialogContent>
        </Dialog>
    );
}