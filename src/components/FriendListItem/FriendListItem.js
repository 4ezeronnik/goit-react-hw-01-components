import PropTypes from 'prop-types';

const FriendList = ({ avatar, name, isOnline }) => {
    return (
        <ul class="friend-list">
            {friends.map(friend =>
                <li class="item">
                    <span class="status"></span>
                    <img class="avatar" src="" alt="User avatar" width="48" />
                    <p class="name"></p>
                </li>
            )
            }
        </ul>
    )
}