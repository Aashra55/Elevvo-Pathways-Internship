import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", earnings: 400 },
  { month: "Feb", earnings: 600 },
  { month: "Mar", earnings: 800 },
  { month: "Apr", earnings: 300 },
  { month: "May", earnings: 900 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip contentStyle={{
            backgroundColor:"#171717e3",
            color: "#32cd32",
            fontWeight: "bold",
            borderColor:"#171717"
        }}
        cursor={{fill:"#000"}}
        />
        <Bar dataKey="earnings" fill="#32cd32" background={{fill:"#000"}} radius={[6, 6, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
}
