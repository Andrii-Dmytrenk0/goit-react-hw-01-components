import { FriendList } from "./FriendList/FriendList";
import list from "./FriendList/friends"
import User from "./Profile/profile";
import profile from "./Profile/user"
import stats from "./Statistics/data"
import { Statistics } from "./Statistics/statistics";
import { Transaction } from "./TransactionHistory/TransactionHistory";
import history from './TransactionHistory/transactions'


export const App = () => {
  return <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      color: '#010101',
      backgroundColor: '#eeeeee',
    }}>
    <User user={profile}/>
    <Statistics title="Upload stats" statistics={stats} />
    <Statistics statistics={stats} />
    <FriendList friendList={list} />
    <Transaction items={history}/>
  </div>
};
