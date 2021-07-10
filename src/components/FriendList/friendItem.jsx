import PropTypes from "prop-types";
import defaultPhoto from '../dataFile/defaultPhoto.jpg';


const FriendItem = ({ friends }) => {
    return (
        
        friends.map(({ id, isOnline, avatar, name }) => (
            <li className="item" key={id}>
                <span className="status">{isOnline.toString()}</span>
                <img className="avatar" src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
            </li>
        ))
    )
};  

FriendItem.defaultProps = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: defaultPhoto,
    })
  ),
};

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendItem;