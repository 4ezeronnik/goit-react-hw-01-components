import Profile from "../components/Profile/ Profile";
import Statistics from "../components/Statistics/Statistics"
import user from './user.json';
import data from './data.json';

export default function App () {
  return (
    <div>
      <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} /> 
      </div>
    </div>
   
  );
  
}

