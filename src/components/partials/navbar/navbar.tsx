import cls from 'classnames';
import styles from './navbar.module.css';
import './navbar.module.css';
import { NavLink } from 'react-router-dom';
import { Textinput } from '../../../ui-kit/input/textinput';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';

export const Navbar = () => {
  const location = useLocation();
  const isNeedToSearch = location.pathname === '/users';
  const searchHandler = (e: React.FormEvent<HTMLInputElement>) => {
    // setValue(e.currentTarget.value);
  };
  const { user } = useAppSelector((state) => state.signIn);
  const isUserSignIn = user.email && user.firstName && user.lastName;
  return (
    <nav className={cls(styles.navbar_)}>
      <div className={cls(styles.navbar_logo)}>
        <span>Veselka</span>
      </div>

      <div className={cls(styles.navbar_items, 'top_navbar_items')}>
        {isNeedToSearch && (
          <Textinput
            onChange={searchHandler}
            placeholder="search"
            classNames={['p-0', 'w-auto']}
          />
        )}
        {isUserSignIn ? (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/maps">Maps</NavLink>
            <NavLink to="/signout">Sign out</NavLink>
          </>
        ) : (
          <>
            <NavLink to="auth/signin">Sign In</NavLink>
            <NavLink to="auth/signup">Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
