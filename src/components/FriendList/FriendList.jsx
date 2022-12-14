import PropTypes from 'prop-types';
import css from './friendList.module.css'
export const FriendList = ({friendList}) => {
    return (
        <ul class="friend-list">
            {friendList.map(({ avatar, name, isOnline, id }) =>
                <li className={css.item} key={id}>
                {isOnline === true ? <span className={css.online}></span> : <span className={css.offline}></span>}
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
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