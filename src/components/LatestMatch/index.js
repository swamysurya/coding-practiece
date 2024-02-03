import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updateLatestMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  return (
    <div className="latestMatchContainer">
      <div className="latestMatchCardContainer">
        <div className="leftDetailsAndImage">
          <div className="leftCardDetails">
            <p className="opponentTeamName">
              {updateLatestMatchDetails.competingTeam}
            </p>
            <p className="datestyle">{updateLatestMatchDetails.date}</p>
            <p>{updateLatestMatchDetails.venue}</p>
            <p>{updateLatestMatchDetails.result}</p>
          </div>
          <img
            alt={`latest match {updateLatestMatchDetails.competingTeam}`}
            className="competingTeamLogo"
            src={updateLatestMatchDetails.competingTeamLogo}
          />
        </div>
        <div className="rightCardInfo">
          <p className="med">First Innings</p>
          <p>{updateLatestMatchDetails.firstInnings}</p>
          <p className="med">Second Innings</p>
          <p>{updateLatestMatchDetails.secondInnings}</p>
          <p className="med">Man Of The Match</p>
          <p>{updateLatestMatchDetails.manOfTheMatch}</p>
          <p className="med">Umpires</p>
          <p>{updateLatestMatchDetails.umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
