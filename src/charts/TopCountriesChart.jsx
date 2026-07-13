import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ["#C8860D", "#3E2723", "#E9A825", "#5D4037", "#D9B171", "#8A5A34", "#F3C969", "#7A4B2A"]

const TopCountriesChart = ({breweryData}) => {
    const countriesCount = {}

    breweryData.forEach((brewery) => {
        const country = brewery.country
        countriesCount[country] = (countriesCount[country] || 0) + 1
    })
    
    const chartData = Object.entries(countriesCount).map(([country, count]) => ({country, count}))

    return (
        <div>
            <h3 className="chart-title">🌍 Top Countries</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="count"
                        nameKey="country"
                        outerRadius={100}
                        label
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={entry.country} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TopCountriesChart