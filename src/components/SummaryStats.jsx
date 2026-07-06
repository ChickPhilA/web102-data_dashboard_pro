import '../App.css'

const SummaryStats = ({brewCount, mostCommon, cities}) => {
    return(
        <>
            <div className="stats-row">
                <div id="totalBrew" className="stat-box">
                    <span className="stat-value">{brewCount}</span>
                    <span className="stat-label">Total Breweries</span>
                </div>
                <div id="mostCommonBrew" className="stat-box">
                    <span className="stat-value">{mostCommon}</span>
                    <span className="stat-label">Most Common Type</span>
                </div>
                <div id="uniqueCities" className="stat-box">
                    <span className="stat-value">{cities.size}</span>
                    <span className="stat-label">Unique Cities</span>
                </div>
            </div>
        </>
    )
}

export default SummaryStats