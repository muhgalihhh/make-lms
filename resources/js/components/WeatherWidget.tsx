import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Sun, CloudRain, CloudLightning, Wind, Thermometer } from 'lucide-react';

interface WeatherData {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    location: string;
}

const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
        case 'sunny':
        case 'clear':
            return <Sun className="w-8 h-8 text-yellow-500" />;
        case 'cloudy':
        case 'overcast':
            return <Cloud className="w-8 h-8 text-gray-500" />;
        case 'rainy':
        case 'rain':
            return <CloudRain className="w-8 h-8 text-blue-500" />;
        case 'stormy':
        case 'thunderstorm':
            return <CloudLightning className="w-8 h-8 text-purple-500" />;
        default:
            return <Sun className="w-8 h-8 text-yellow-500" />;
    }
};

export default function WeatherWidget() {
    const [weather, setWeather] = useState<WeatherData>({
        temperature: 28,
        condition: 'Sunny',
        humidity: 65,
        windSpeed: 12,
        location: 'Pare, Kediri'
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulasi loading weather data
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Cuaca</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded mb-2"></div>
                        <div className="h-6 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-blue-600" />
                    Cuaca
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {/* Location */}
                    <div className="text-sm text-gray-600">
                        {weather.location}
                    </div>
                    
                    {/* Main Weather Info */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {getWeatherIcon(weather.condition)}
                            <div>
                                <div className="text-2xl font-bold">
                                    {weather.temperature}°C
                                </div>
                                <div className="text-sm text-gray-600">
                                    {weather.condition}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Weather Details */}
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Kelembaban:</span>
                            <span className="font-medium">{weather.humidity}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Angin:</span>
                            <span className="font-medium">{weather.windSpeed} km/h</span>
                        </div>
                    </div>
                    
                    {/* Update Time */}
                    <div className="text-xs text-gray-500 text-center pt-2 border-t">
                        Diperbarui: {new Date().toLocaleTimeString('id-ID')}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}