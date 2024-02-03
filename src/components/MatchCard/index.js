// Write your code here
import './index.css'

const MatchCard = props => {
  const {match} = props
  console.log(match)
  const updatedMatch = {
    umpires: match.umpires,
    result: match.result,
    manOfTheMatch: match.man_of_the_match,
    id: match.id,
    date: match.date,
    venue: match.venue,
    competingTeam: match.competing_team,
    competingTeamLogo: match.competing_team_logo,
    firstInnings: match.first_innings,
    secondInnings: match.second_innings,
    matchStatus: match.match_status,
  }
  const {competingTeamLogo, competingTeam, result, matchStatus} = updatedMatch
  return (
    <li className="listCard">
      <img
        src={competingTeamLogo}
        alt={`competing team {competingTeam}`}
        className="logoT"
      />
      <p className="teamName">{competingTeam}</p>
      <p className="res">{result}</p>
      <p className={matchStatus === 'Won' ? 'green' : 'red'}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
