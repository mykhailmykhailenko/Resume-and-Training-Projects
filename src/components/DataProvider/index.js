import React from 'react';

class DataProvider extends React.Component {
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
            }).catch((err) => {
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
        return this.props.children(this.state);
    }
}

export default DataProvider;