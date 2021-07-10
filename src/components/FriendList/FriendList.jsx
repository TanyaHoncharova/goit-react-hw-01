import PropTypes from "prop-types";
// import FriendItem from './friendItem';

const FriendsList = (friends) =>(
    <ul class="friends-list" >
        {friends.map(({ avatar, name, isOnline, id }) => {
            return (
                <li className="item" key={id}>
                <span className="status">{isOnline.toString()}</span>
                <img className="avatar" src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
            </li>
            )
        })
            
        }
        {/* <FriendItem friends={friends}/> */}
        </ul>);

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default FriendsList;