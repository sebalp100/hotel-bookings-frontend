import { useCurrentUserQuery } from '../api/authLog';
import Home from './Home';
import Login from './Login';

function Test() {
  const { data: currentUserData, isLoading } = useCurrentUserQuery();

  if (isLoading) {
    return (
      <div className="spinnerContainer">
        <span className="loader" />
      </div>
    );
  }

  return currentUserData ? <Home /> : <Login />;
}

export default Test;
