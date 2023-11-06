import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

class UserCard extends React.Component {

    render() {
        const {name: {first, last}, picture: {large}, email} = this.props.user;
        return (
            <div className='card-wrapper'>
                <div className='image-wrapper'>
                     <img src={large} alt='' className='avatar'/>
                </div>
                <h2>{first} {last}</h2>
                <p className='desc'>{email}</p>
                <button>Connect</button>
            </div>
        )
    }
}

UserCard.defaultProps = {
    user: {
        name: {
            first: 'User',
            last: 'Anonym'
        },
        email: 'anonym@gmail.com',
        picture : {
            large: 'https://as1.ftcdn.net/v2/jpg/05/53/79/60/1000_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'
        }

    } 
    
}

UserCard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string,
            last: PropTypes.string
        }),
        email: PropTypes.string,
        picture: PropTypes.shape({
            large: PropTypes.string
        })
    }).isRequired
}


export default UserCard;
