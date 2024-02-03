// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="liContainer">
      <Link to={`/team-matches/${id}`} className="linkStyle">
        <div className="cardDetails">
          <img src={teamImageUrl} alt={name} className="imageIcon" />
          <p className="teamName">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
