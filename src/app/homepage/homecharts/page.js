"use client";

import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "January", Appointment: 186, Emergency: 80 },
  { month: "February", Appointment: 305, Emergency: 200 },
  { month: "March", Appointment: 237, Emergency: 120 },
  { month: "April", Appointment: 73, Emergency: 190 },
  { month: "May", Appointment: 209, Emergency: 130 },
  { month: "June", Appointment: 214, Emergency: 140 },
];

export default function Homechart() {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">Appointments & Emergencies</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Appointment" fill="#2563eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Emergency" fill="#60a5fa" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
