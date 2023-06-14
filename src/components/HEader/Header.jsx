import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOutAction } from 'strore/Auth/AuthSlice';
import s from './Header.module.css';
import clsx from 'clsx';

export const Header = () => {
  const { isAuth } = useSelector(state => state.auth);
  const { userName } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
  return (
    <div className={s.header}>
      <div className={s.homeBox}>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/"
        >
          Home
        </NavLink>
      </div>
      <h2 className={s.title}>Phone Book</h2>
      {isAuth ? (
        <div className={s.authData}>
          <h2 className={s.title}>Hello, {userName} </h2>
          <button
            className={s.logoutBtn}
            onClick={() => {
              dispatch(logOutAction());
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className={s.authorization}>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            to="/register"
          >
            Registration
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            to="/login"
          >
            Log In
          </NavLink>
        </div>
      )}
    </div>
  );
};
