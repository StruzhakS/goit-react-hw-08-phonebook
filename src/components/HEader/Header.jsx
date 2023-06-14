import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOutAction } from 'strore/Auth/AuthSlice';
import s from './Header.module.css';

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
        <NavLink className={s.link} to="/">
          Home
        </NavLink>
        <h2>Phone Book</h2>
      </div>
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
          <NavLink className={s.linkAuth} to="/register">
            Registration
          </NavLink>
          <NavLink className={s.linkAuth} to="/login">
            Log In
          </NavLink>
        </div>
      )}
    </div>
  );
};
