import { useDispatch, useSelector } from 'react-redux';
import { Header } from 'components/HEader/Header';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from 'Page/AuthPage';
import LoginPage from 'Page/LoginPage';

import ContactForm from 'components/ContactForm/ContactForm';
import { getRefreshUser } from 'strore/contacts/Operations';

function App() {
  const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRefreshUser());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            isAuth ? (
              <ContactForm />
            ) : (
              <h1>
                Увійдіть або зареєструйтесь для того, щоб користуватись
                телефонною книжкою
              </h1>
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
