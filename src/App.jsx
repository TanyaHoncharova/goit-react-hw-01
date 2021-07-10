import Profile from './components/Profile/profile';
import user from './components/dataFile/user';

import Statistics from './components/statistics/statistics';
import statData from './components/dataFile/statistical-data';

import FriendsList from './components/FriendList/FriendList';
import friends from './components/dataFile/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import items from './components/dataFile/transactions.json';

import './App.css';

function App() {
  return (
    <>
    <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
    <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />
      <FriendsList friends={friends} />
      <TransactionHistory  items={items}/>      
      </>
  );
}

export default App;
