import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
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
  } = recentMatchDetails
  const className = matchStatus === 'Lost' ? 'lost-text' : 'won-text'
  return (
    <li className="match-card">
      <img src={competingTeamLogo} className="recent-match-logo" alt={`competing team ${competingTeam}`}/>
      <p className="recent-match-team">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className={className}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
