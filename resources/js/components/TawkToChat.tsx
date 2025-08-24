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

        // Initialize Tawk.to when script loads
        script.onload = () => {
            if (window.Tawk_API) {
                // Set visitor information
                window.Tawk_API.onLoad = function() {
                    window.Tawk_API.setAttributes({
                        'name': 'Pare EDU HUB Visitor',
                        'email': 'visitor@pareeduhub.com',
                        'role': 'visitor'
                    }, function(error: any) {
                        if (error) {
                            console.error('Error setting Tawk.to attributes:', error);
                        }
                    });
                };

                // Handle chat events
                window.Tawk_API.onStatusChange = function(status: string) {
                    console.log('Tawk.to status changed:', status);
                };

                // Handle chat messages
                window.Tawk_API.onBeforeLoad = function() {
                    console.log('Tawk.to chat is loading...');
                };

                // Handle chat loaded
                window.Tawk_API.onLoad = function() {
                    console.log('Tawk.to chat loaded successfully');
                };
            }
        };

        // Cleanup function
        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, [propertyId, widgetId]);

    // This component doesn't render anything visible
    // It only loads the Tawk.to script and initializes the chat widget
    return null;
}