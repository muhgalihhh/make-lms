interface LineChartData {
    date: string;
    regular: number;
    premium: number;
}

interface LineChartProps {
    data: LineChartData[];
    height?: number;
}

export function LineChart({ data, height = 200 }: LineChartProps) {
    if (data.length === 0) {
        return (
            <div className="flex items-center justify-center h-48 text-muted-foreground">
                Tidak ada data untuk ditampilkan
            </div>
        );
    }

    const maxValue = Math.max(
        ...data.flatMap(d => [d.regular, d.premium])
    );

    const points = data.map((item, index) => {
        const x = (index / (data.length - 1)) * 100;
        const regularY = maxValue > 0 ? 100 - (item.regular / maxValue) * 100 : 50;
        const premiumY = maxValue > 0 ? 100 - (item.premium / maxValue) * 100 : 50;
        
        return { x, regularY, premiumY, date: item.date, regular: item.regular, premium: item.premium };
    });

    const regularPath = points.map((point, index) => {
        if (index === 0) return `M ${point.x} ${point.regularY}`;
        return `L ${point.x} ${point.regularY}`;
    }).join(' ');

    const premiumPath = points.map((point, index) => {
        if (index === 0) return `M ${point.x} ${point.premiumY}`;
        return `L ${point.x} ${point.premiumY}`;
    }).join(' ');

    return (
        <div className="w-full">
            <div className="relative" style={{ height }}>
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 25, 50, 75, 100].map((y) => (
                        <line
                            key={y}
                            x1="0"
                            y1={y}
                            x2="100"
                            y2={y}
                            stroke="#e5e7eb"
                            strokeWidth="0.5"
                            strokeDasharray="2,2"
                        />
                    ))}
                    
                    {/* Regular users line */}
                    <path
                        d={regularPath}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    
                    {/* Premium users line */}
                    <path
                        d={premiumPath}
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    {points.map((point, index) => (
                        <g key={index}>
                            <circle
                                cx={point.x}
                                cy={point.regularY}
                                r="1.5"
                                fill="#3b82f6"
                            />
                            <circle
                                cx={point.x}
                                cy={point.premiumY}
                                r="1.5"
                                fill="#10b981"
                            />
                        </g>
                    ))}
                </svg>
                
                {/* Legend */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
                    {data.map((item, index) => (
                        <div key={index} className="text-center">
                            <div>{item.date}</div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Legend */}
            <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-blue-500"></div>
                    <span className="text-sm text-muted-foreground">Regular Users</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-green-500"></div>
                    <span className="text-sm text-muted-foreground">Premium Users</span>
                </div>
            </div>
        </div>
    );
}