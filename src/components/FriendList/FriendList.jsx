import PropTypes from "prop-types";
import defaultPhoto from '../dataFile/defaultPhoto.jpg';

const FriendsList = ({friends}) =>(
    <ul className="friends-list" >
        {friends.map(e => {
            return (
               <li className="item" key={e.id}>
                    <span className="status">{ e.isOnline}</span>
                <img className="avatar" src={e.avatar} alt={e.name} width="48" />
                <p className="name">{e.name} </p>
                </li>)}
        )}       
        </ul>);



FriendsList.defaultProps = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: defaultPhoto,
    })
  ),
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FriendsList;