import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsList: [],
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const teamsData = await fetch('https://apis.ccbp.in/ipl')
    const data = await teamsData.json()
    const {teams} = data

    const updateTeamsData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: updateTeamsData, isLoading: false})
  }

  render() {
    const {isLoading, teamsList} = this.state
    return (
      <div className="homeContainer">
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="homeCardContainer">
            <div className="titleAndName">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="iplLogo"
              />
              <h1 className="dasgBoardName">IPL Dashboard</h1>
            </div>
            <ul className="ulConatiner">
              {teamsList.map(eachTeam => (
                <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
