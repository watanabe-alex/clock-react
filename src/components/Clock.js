import React from 'react'

export default class Clock extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        let interval_id = setInterval(() => {
            // assim tem que atualizar a pagina sempre
            //this.state.timer = new Date().toLocaleTimeString()
            this.setState({
                timer: new Date().toLocaleTimeString()
            })
        }, 1000)

        this.setState({
            ...this.state,
            interval_id: interval_id
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval_id);
    }

    render() {
        return (
            <div>
                {this.state.timer}
            </div>
        )
    }
}