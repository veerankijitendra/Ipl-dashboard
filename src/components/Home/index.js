import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeams = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedTeams)
    this.setState({teams: [...updatedTeams], isLoading: false})
  }

  homeComponent = () => {
    const {teams} = this.state
    return (
      <div className="ipl-home">
        <div className="ipl-logo-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-cards">
          {teams.map(each => (
            <TeamCard key={each.id} team={each} />
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
      this.homeComponent()
    )
  }
}

export default Home
