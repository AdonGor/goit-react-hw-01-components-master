import Layout from "./components/Layout/Layout";
import ProfileList from "./components/ProfileList/ProfileList";
import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/StatisticsList/StatisticsList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import profileList from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions  from "./data/transactions.json";

function App() {
  return (
    <>
      <Layout>
        <ProfileList profile={profileList}/>
        <Statistics stats={statisticalData}/>
        <FriendList friends={friends}/>
        <TransactionHistory items={transactions}/>
      </Layout>
    </>
  );
}

export default App;
