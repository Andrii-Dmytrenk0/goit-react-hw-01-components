import PropTypes from 'prop-types';

export const FriendList = ({friendList}) => {
    return (
        <ul class="friend-list">
            {friendList.map(({ avatar, name, isOnline, id }) =>
                <li class="item" key={id}>
                <span class="status"></span>
                <img class="avatar" src={avatar} alt="User avatar" width="48" />
                    <p class="name">{name}</p>
            </li>
            )}
        </ul>
    )
}

FriendList.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
}