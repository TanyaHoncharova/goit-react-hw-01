import Profile from './components/Profile/profile';
import user from './components/dataFile/user';

import Statistics from './components/statistics/statistics';
import statData from './components/dataFile/statistical-data';

// import FriendsList from './components/FriendList/FriendList';
// import friends from './components/dataFile/friends.json';

import './App.css';

function App() {
  return (
    <>
    <div className="profile">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
    </div>
    <div className="Stat" >
        <Statistics title="Upload stats" stats={statData} />;
        <Statistics stats={statData} />;
      </div>

      
      </>
  );
}

export default App;
