
//import css
import "./create-proposal.css"


//import create proposal image
import createProposalImg from "./images/create-proposal.png"

const CreateProposal = () => {

    return (
        <div className="create-proposal mt-140">
            <div className="create-proposal-info">
                
                <h3>Let’s Create Your Next Success Story</h3>

                <p>
                    Contact us today to learn more about how our digital marketing services can help your
                    business grow and succeed online.
                </p>

                <a href=""><button className="create-proposal-btn">Get your free proposal</button></a>

            </div>
            <img className="create-proposal-img" src={createProposalImg}/>
        </div>
    )
}

export default CreateProposal
