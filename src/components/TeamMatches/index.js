import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchData: {}}

  componentDidMount() {
    this.renderMatchDetails()
  }

  renderMatchDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const {team_banner_url, latest_match_details, recent_matches} = data
    const {
      umpires,
      result,
      man_of_the_match,
      id: matchId,
      date,
      venue,
      competing_team,
      competing_team_logo,
      first_innings,
      second_innings,
      match_status,
    } = latest_match_details
    const formattedData = {
      teamBannerUrl: team_banner_url,
      latestMatchDetails: {
        umpires: umpires,
        result: result,
        manOfTheMatch: man_of_the_match,
        id: matchId,
        date: date,
        venue: venue,
        competingTeam: competing_team,
        competingTeamLogo: competing_team_logo,
        firstInnings: first_innings,
        secondInnings: second_innings,
        matchStatus: match_status,
      },
      recentMatches: recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        id: eachMatch.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }
    this.setState({teamMatchData: formattedData, isLoading: false})
  }

  render() {
    const {teamMatchData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchData
    return (
      <div className="teammatch-bg-container">
        {isLoading ? (
          <div className="loader-container" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="teammatch-details">
            <img
              src={teamBannerUrl}
              className="team-banner-url"
              alt="team banner"
            />
            <div>
              <p className="latest-match-heading">Latest Matches</p>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
              <ul className="recentmatches-container">
                {recentMatches.map(eachrecentMatchDetails => (
                  <MatchCard
                    key={eachrecentMatchDetails.id}
                    recentMatchDetails={eachrecentMatchDetails}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
