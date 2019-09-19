import React from 'react'

class Survey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    loadSurvey = () => {
        console.log(this.props)
        /*if (this.props.client == "Max") {
            filteredMax = this.props.surveys.filter(survey => {
                survey.name == "Max's Survey"
            })
        else {
                this.props.surveys.filter(survey => {
                    filteredChris = survey.name == "Chris's Survey"
                })
            }
        }*/
    }

    render() {
        console.log(this.props)
        return (
            <h1>{this.props.surveys.name}</h1>
        )
    }
}

export default Survey