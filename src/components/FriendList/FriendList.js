import PropTypes from 'prop-types';

import FriendListItem from "components/FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape(
            {
            id: PropTypes.number.isRequired,
            }
        )
    ).isRequired
    
};



export default FriendList;