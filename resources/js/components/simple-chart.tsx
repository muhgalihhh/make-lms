import { useState } from 'react';

interface ChartData {
    label: string;
    value: number;
    color: string;
}

interface SimpleChartProps {
    data: ChartData[];
    height?: number;
    showValues?: boolean;
}

export function SimpleChart({ data, height = 200, showValues = true }: SimpleChartProps) {
    const maxValue = Math.max(...data.map(d => d.value));
    const total = data.reduce((sum, d) => sum + d.value, 0);

    return (
        <div className="w-full">
            <div className="flex items-end space-x-2 h-48">
                {data.map((item, index) => {
                    const percentage = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
                    const heightPercentage = percentage;
                    
                    return (
                        <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                            <div className="relative w-full">
                                <div
                                    className="w-full rounded-t-sm transition-all duration-300 hover:opacity-80"
                                    style={{
                                        height: `${heightPercentage}%`,
                                        backgroundColor: item.color,
                                        minHeight: '4px'
                                    }}
                                />
                                {showValues && (
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium">
                                        {item.value}
                                    </div>
                                )}
                            </div>
                            <div className="text-xs text-muted-foreground text-center">
                                {item.label}
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Summary */}
            <div className="mt-4 grid grid-cols-2 gap-4">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: item.color }}
                        />
                        <div className="flex-1">
                            <div className="text-sm font-medium">{item.label}</div>
                            <div className="text-xs text-muted-foreground">
                                {item.value} ({((item.value / total) * 100).toFixed(1)}%)
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}