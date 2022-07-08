import FriendListItem from "components/FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
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

export default FriendList;