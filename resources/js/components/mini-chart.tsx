import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

interface MiniChartProps {
  data: { value: number }[]
  color?: string
  height?: number
}

export function MiniChart({ data, color = "#3b82f6", height = 50 }: MiniChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={false}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="text-xs font-medium">
                    {payload[0].value}
                  </div>
                </div>
              )
            }
            return null
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}