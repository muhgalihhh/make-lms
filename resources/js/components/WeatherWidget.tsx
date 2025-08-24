import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, MapPin } from 'lucide-react';

interface WeatherData {
    temperature: number;
    condition: string;
    city: string;
    humidity?: number;
    wind_speed?: number;
    feels_like?: number;
}

interface WeatherWidgetProps {
    className?: string;
}

export default function WeatherWidget({ className = '' }: WeatherWidgetProps) {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadWeather = async () => {
        setLoading(true);
        setError(null);
        
        try {
            // In real app, this would be an API call to weather service
            // For now, simulate API call with mock data
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const mockWeather: WeatherData = {
                temperature: 28,
                condition: "Cerah Berawan",
                city: "Jakarta",
                humidity: 75,
                wind_speed: 12,
                feels_like: 30
            };
            
            setWeather(mockWeather);
        } catch (err) {
            setError('Gagal memuat data cuaca');
            console.error('Error loading weather:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadWeather();
    }, []);

    const getWeatherIcon = (condition: string) => {
        const conditionLower = condition.toLowerCase();
        
        if (conditionLower.includes('cerah')) return '☀️';
        if (conditionLower.includes('berawan')) return '⛅';
        if (conditionLower.includes('hujan')) return '🌧️';
        if (conditionLower.includes('petir')) return '⛈️';
        if (conditionLower.includes('mendung')) return '☁️';
        if (conditionLower.includes('kabut')) return '🌫️';
        
        return '🌤️';
    };

    if (error) {
        return (
            <Card className={`max-w-sm mx-auto ${className}`}>
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Cuaca Hari Ini</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-4">
                        <p className="text-red-600 mb-4">{error}</p>
                        <Button onClick={loadWeather} disabled={loading}>
                            {loading ? (
                                <RefreshCw className="w-4 h-4 animate-spin" />
                            ) : (
                                <RefreshCw className="w-4 h-4" />
                            )}
                            Coba Lagi
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (!weather) {
        return (
            <Card className={`max-w-sm mx-auto ${className}`}>
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Cuaca Hari Ini</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center py-8">
                        <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className={`max-w-sm mx-auto ${className}`}>
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Cuaca Hari Ini</CardTitle>
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={loadWeather} 
                        disabled={loading}
                        className="p-1"
                    >
                        <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-bold">{weather.temperature}°C</p>
                            <p className="text-gray-600">{weather.condition}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                                <MapPin className="w-3 h-3" />
                                <span>{weather.city}</span>
                            </div>
                        </div>
                        <div className="text-5xl">
                            {getWeatherIcon(weather.condition)}
                        </div>
                    </div>
                    
                    {weather.feels_like && (
                        <div className="text-sm text-gray-600">
                            Terasa seperti {weather.feels_like}°C
                        </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                        {weather.humidity && (
                            <div className="text-center">
                                <p className="text-sm text-gray-500">Kelembaban</p>
                                <p className="font-semibold">{weather.humidity}%</p>
                            </div>
                        )}
                        {weather.wind_speed && (
                            <div className="text-center">
                                <p className="text-sm text-gray-500">Angin</p>
                                <p className="font-semibold">{weather.wind_speed} km/h</p>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}