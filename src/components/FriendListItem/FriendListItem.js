import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className="item" >
  <span className={ isOnline ? styles.status : styles.isNotActive}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p> 
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;