
//import css
import "./join-team.css"


//import join-team image
import joinTeamImg from "./image/join-team.png"

const JoinTeam = () => {

    return (
        <div className="join-team box-shadow mt-140">
            <div className="jt-info">
                <h3>Join Our Team</h3>
                <p>At Positivus, we thrive on innovation and collaboration. We're always looking
                    for passionate individuals to join our team and help businesses grow. Ready
                    to make an impact?
                </p>

                <a href="" className="explore-career"><button className="careers-btn">Explore Careers</button></a>
            </div>
            <img className="join-team-img" src={joinTeamImg}/>
        </div>
    )
}

export default JoinTeam