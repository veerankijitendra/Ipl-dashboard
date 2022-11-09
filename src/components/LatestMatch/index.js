import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const updatedMatchDetails = {
    umpires: latestMatch.umpires,
    result: latestMatch.result,
    manOfTheMatch: latestMatch.man_of_the_match,
    id: latestMatch.id,
    date: latestMatch.date,
    venue: latestMatch.venue,
    competingTeam: latestMatch.competing_team,
    competingTeamLogo: latestMatch.competing_team_logo,
    firstInnings: latestMatch.first_innings,
    secondInnings: latestMatch.second_innings,
    matchStatus: latestMatch.match_status,
  }

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
  } = updatedMatchDetails

  console.table(updatedMatchDetails)

  return (
    <div className="letest-match-details-card">
      <div className="card-1">
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img src={competingTeamLogo} className="logo-image-1" alt={id} />
      <div className="card-2">
        <p className="kkkk">First Innings</p>
        <p className="jjjj">{firstInnings}</p>
        <p className="kkkk">Second Innings</p>
        <p className="jjjj">{secondInnings}</p>
        <p className="kkkk">Man Of The Match</p>
        <p className="jjjj">{manOfTheMatch}</p>
        <p className="kkkk">Umpires</p>
        <p className="jjjj">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
