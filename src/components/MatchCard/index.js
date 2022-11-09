import './index.css'

const MatchCard = props => {
  const {match} = props
  console.table(match)
  const updatedMatchdetails = {
    competingTeamLogo: match.competing_team_logo,
    competingTeam: match.competing_team,
    result: match.result,
    matchStatus: match.match_status,
  }
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = updatedMatchdetails

  const statusColor = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="match-card">
      <img src={competingTeamLogo} alt="team" className="team-logo-image" />
      <p className="team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={statusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
