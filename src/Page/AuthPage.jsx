import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'strore/contacts/Operations';
import s from './AuthPage.module.css';
const AuthPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ userName, email, userPass }));
    setUserName('');
    setEmail('');
    setUserPass('');
  };
  const handleName = e => {
    setUserName(e.target.value);
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
        <p className={s.nameInput}>Please enter name</p>
        <input
          className={s.input}
          onChange={handleName}
          type="text"
          name="name"
          value={userName}
          placeholder="SlavaU"
        />
      </label>
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
        Registration
      </button>
    </form>
  );
};

export default AuthPage;
