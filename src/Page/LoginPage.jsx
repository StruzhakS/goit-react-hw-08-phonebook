import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'strore/contacts/Operations';
import s from './AuthPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userLogin({ email, userPass }));
    setEmail('');
    setUserPass('');
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePass = e => {
    setUserPass(e.target.value);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <p className={s.nameInput}>Please enter email</p>
        <input
          className={s.input}
          onChange={handleEmail}
          type="email"
          name="email"
          value={email}
          placeholder="mango@mail.com"
        />
      </label>
      <label>
        <p className={s.nameInput}>Please enter password</p>
        <input
          className={s.input}
          onChange={handlePass}
          type="password"
          name="password"
          value={userPass}
          placeholder="********"
        />
      </label>
      <button className={s.addButton} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
