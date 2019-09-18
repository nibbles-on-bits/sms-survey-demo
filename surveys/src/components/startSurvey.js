import React from 'react'
import { Link } from 'react-router-dom'

import Survey from './Survey'

class startSurvey extends React.Component {
    constructor(props) {
        super();
        this.state = {
            client: '',
            survey: '',
            surveys: [
                {
                    name: "Max's Survey",
                    question1: "When is your birthday?",
                    question2: "What is your favorite food?",
                    questiong3: "Where do you live?"
                },
                {
                    name: "Chris' Survey",
                    question1: "When is your birthday?",
                    question2: "What is your favorite food?",
                    questiong3: "Where do you live?"
                }
            ],
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Surveys!!!!</h1>
                <h2>Stuff:{this.state.stuff}</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Type Client Name"
                        onChange={this.handleChanges}
                    />
                    <input
                        type="text"
                        placeholder="Type Client Survey Name"
                        onChange={this.handleChanges}
                    />
                    <Link to="/survey">
                        <button type="submit">Submit</button>
                    </Link>
                </form>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Survey surveys={this.state.surveys} client={this.state.client} />
            </div>
        )
    }
}

export default startSurvey