import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import Loader from 'react-loader-spinner'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.renderTeamCards()
  }

  renderTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="home-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} />
            </div>
          ) : (
            <div>
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="logo-image"
                />
                <h1 className="heading">IPL Dashboard</h1>
              </div>
              <ul className="teams-container">
                {teamsData.map(team => (
                  <TeamCard teamDetails={team} key={team.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
