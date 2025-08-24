import { useEffect } from 'react';

interface TawkToChatProps {
    propertyId: string;
    widgetId: string;
}

declare global {
    interface Window {
        Tawk_API?: any;
        Tawk_LoadStart?: Date;
    }
}

export default function TawkToChat({ propertyId, widgetId }: TawkToChatProps) {
    useEffect(() => {
        // Load Tawk.to script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        
        document.head.appendChild(script);

        // Initialize Tawk.to
        window.Tawk_LoadStart = new Date();
        
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_API.onLoad = function() {
            console.log('Tawk.to loaded successfully');
        };
        
        window.Tawk_API.onStatusChange = function(status: string) {
            console.log('Tawk.to status changed:', status);
        };

        return () => {
            // Cleanup script when component unmounts
            const existingScript = document.querySelector(`script[src*="${propertyId}"]`);
            if (existingScript) {
                document.head.removeChild(existingScript);
            }
        };
    }, [propertyId, widgetId]);

    return null; // This component doesn't render anything visible
}