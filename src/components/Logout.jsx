import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../api/authLog';

function LogoutButton() {
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();

  async function handleClick() {
    await logout();
    localStorage.setItem('isLoggedIn', false);
    navigate('/login');
  }

  return (
    <button type="button" onClick={handleClick} disabled={isLoading}>
      {isLoading ? 'Logging out...' : 'Log out'}
    </button>
  );
}

export default LogoutButton;
