import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const data = [
    {
      name: "Jan",
      male: 4000,
      female: 2400,
    },
    {
      name: "Feb",
      male: 3000,
      female: 1398,
    },
    {
      name: "Mar",
      male: 2000,
      female: 9800,
    },
    {
      name: "Apr",
      male: 2780,
      female: 3908,
    },
    {
      name: "May",
      male: 1890,
      female: 4800,
    },
    {
      name: "Jun",
      male: 2390,
      female: 3800,
    },
    {
      name: "July",
      male: 3490,
      female: 4300,
    },
    {
      name: "Aug",
      male: 3490,
      female: 4300,
    },
    {
      name: "Sep",
      male: 3490,
      female: 4300,
    },
    {
      name: "Oct",
      male: 3490,
      female: 4300,
    },
    {
      name: "Nov",
      male: 3490,
      female: 4300,
    },
    {
      name: "Dec",
      male: 3490,
      female: 4300,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart
        width={500}
        height={100}
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="male" stackId="a" fill="#204e79" />
        <Bar dataKey="female" stackId="a" fill="#999999" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;
