import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOutAction } from 'strore/Auth/AuthSlice';

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
    <div>
      <div>
        <NavLink style={{ textDecoration: 'none' }} to="/">
          Home
        </NavLink>
        <h2>Phone Book</h2>
      </div>
      {isAuth ? (
        <div>
          <h2>Hello, {userName} </h2>
          <button
            onClick={() => {
              dispatch(logOutAction());
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <NavLink style={{ textDecoration: 'none' }} to="/register">
            Registration
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to="/login">
            Log In
          </NavLink>
        </div>
      )}
    </div>
  );
};
