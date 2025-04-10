import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails
  return (
    <div className="latest-match">
      <div className="team-details-logo">
        <div>
          <p className="team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
      </div>
      <hr className="line" />
      <div className="innings-details">
        <h1 className="match-heading">First Innings</h1>
        <p>{firstInnings}</p>
        <h1 className="match-heading">Second Innings</h1>
        <p>{secondInnings}</p>
        <h1 className="match-heading">Man of the Match</h1>
        <p>{manOfTheMatch}</p>
        <h1 className="match-heading">Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
