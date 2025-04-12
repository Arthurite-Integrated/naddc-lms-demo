"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "North-Central",
    trainees: 420,
  },
  {
    name: "North-East",
    trainees: 340,
  },
  {
    name: "North-West",
    trainees: 580,
  },
  {
    name: "South-East",
    trainees: 520,
  },
  {
    name: "South-South",
    trainees: 490,
  },
  {
    name: "South-West",
    trainees: 503,
  },
]

export function RegionalDistribution() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="trainees" fill="#16a34a" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
