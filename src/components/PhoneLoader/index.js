import React from 'react';

class PhoneLoader extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            data: [],
            isFetching: true,
            error: null
        }

        this.componentDidMount = () => {
            this.props.loadData()
            .then((data) => {
                this.setState({
                    data
                })
            }).catch ((err) => {
                this.setState({
                    err
                })
            }).finally (() => {
                this.setState({
                    isFetching: false
                })
            })
        }
    }

    
    render() {
        const loyaut = this.props.renderThis(this.state);
        return loyaut
    }
}

export default PhoneLoader;
