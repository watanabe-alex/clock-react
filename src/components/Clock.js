import React from 'react'

export default class Clock extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        setInterval(() => {
            // assim tem que atualizar a pagina sempre
            //this.state.timer = new Date().toLocaleTimeString()
            this.setState({
                timer: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                {this.state.timer}
            </div>
        )
    }
}