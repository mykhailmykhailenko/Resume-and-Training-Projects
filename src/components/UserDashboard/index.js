import React, { Component } from 'react';
import UserCard from "../UserCard";
import Spiner from '../Spiner';
import {getUsers} from '../../api/users'

 class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: null,
            isFetching: true,
            page: 1,
            isSort: true,
            filterValue: ''
        }
    }

    componentDidMount = () => {
        this.getData();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.page !== this.state.page)
        this.getData();
    }

    getData = () => {
        const {page} = this.state;

        getUsers({page})
        .then ((data) => {
            this.setState({
                users: data.results
            })
        })
        .catch ((error) => {
            this.setState({
                error
            })
        })
        .finally (() => {
            this.setState({
                isFetching: false
            })
        })
    }

    

    userMap = (userArray) => userArray.map((userObj) => <UserCard user={userObj} key ={userObj.login.uuid}/>);

    sortUsers = () => {
        const {users, isSort} = this.state;
        const newUsers = [...users];
        newUsers.sort((a,b) => (a.name.first > b.name.first && isSort) ? 1 : -1);
        this.setState({
            users: newUsers,
            isSort: !isSort
        })
    }
    

    prev = () => {
        const {page} = this.state;
        if (page >  1) {
            this.setState({
                page: page - 1
            })
        }
     }

    next = () => {
        const {page} = this.state;
        this.setState({
            page: page + 1
        })
    }

    filter = () => {
        const {users, filterValue} = this.state;
        return users.filter(({name: {first, last}}) => {
            return first.toLowerCase().includes(filterValue) || last.toLowerCase().includes(filterValue)
        })
    }

    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name] : value
        })

        this.filter();
    }

    render() {
            const {users, error, isFetching, page, filterValue} = this.state;
        return (
            <section>
                <button onClick={this.sortUsers}>Sorted</button>
                <input 
                type='text'
                placeholder='enter filter value'
                value={filterValue}
                name= 'filterValue'
                onChange={this.changeHandler}/>
                <button onClick={this.prev}>Prev page</button>
                <span>{page}</span>
                <button onClick={this.next}>Next Page</button>
                {error && <div>{error.message}</div>}
                {users.length && (<div className="card-container">
                                {this.userMap(this.filter())}
                            </div>)}
                {isFetching && <Spiner />}
                
            </section>
        );
    }
 }

 export default UserDashboard;