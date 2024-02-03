import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesData: {}}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamMatchesData: updatedData, isLoading: false})
  }

  render() {
    const {teamMatchesData, isLoading} = this.state
    const {recentMatches} = teamMatchesData
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    console.log(`teamMatchesContainer ${id}`)
    return (
      <div className={`teamMatchesContainer ${id}`}>
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div>
            <img
              src={teamMatchesData.teamBannerUrl}
              className="teambanner"
              alt="team banner"
            />
            <p className="latestMatches">Latest Matches</p>
            <LatestMatch
              latestMatchDetails={teamMatchesData.latestMatchDetails}
            />
            <ul className="ulontainer">
              {recentMatches.map(eachMatch => (
                <MatchCard match={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
