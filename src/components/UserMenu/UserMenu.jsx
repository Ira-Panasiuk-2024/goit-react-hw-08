import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={css.userContainer}>
      <p className={css.userName}>Welcome, {name}</p>
      <Button
        type="submit"
        onClick={() => dispatch(logoutThunk())}
        fullWidth
        variant="contained"
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
