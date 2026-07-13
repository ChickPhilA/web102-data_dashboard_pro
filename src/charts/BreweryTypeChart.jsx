import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const BreweryTypeChart = ({ breweryData }) => {
    const typeCounts = {}
    breweryData.forEach((brewery) => {
        const type = brewery.brewery_type
        typeCounts[type] = (typeCounts[type] || 0) + 1
    })

    const chartData = Object.entries(typeCounts).map(([type, count]) => ({ type, count }))

    return (
        <div>
            <h3 className="chart-title">🍺 Brewery Types</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <XAxis dataKey="type" interval={0} angle={-30} textAnchor="end" height={60} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BreweryTypeChart