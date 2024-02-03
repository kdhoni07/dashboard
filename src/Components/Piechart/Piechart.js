import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Piechart = () => {
  const data = [
    { name: "Link", value: 50 },
    { name: "Unlink B", value: 50 },
  ];
  // #204e79" />
  // <Bar dataKey="female" stackId="a" fill="#999999
  const COLORS = ["#204e79", "#999999"];
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Piechart;
