import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={css.userContainer}>
      <p className={css.userName}>Welcome, {name}</p>

      <button type='submit' onClick={() => dispatch(logoutThunk())} className={css.btn}>
        Logout
      </button>
  
    </div>
  );
};

export default UserMenu;
