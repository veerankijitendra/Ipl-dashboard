import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: {}, isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamDetails: {...updatedData}, isLoading: false})
  }

  teamMathes = () => {
    const {teamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails
    return (
      <div className="team-details-con">
        <img src={teamBannerUrl} alt="banner image" className="banner-image" />
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <LatestMatch latestMatch={latestMatchDetails} />
        <ul className="match-card-list">
          {recentMatches.map(each => (
            <MatchCard key={each.id} match={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    ) : (
      this.teamMathes()
    )
  }
}

export default TeamMatches
