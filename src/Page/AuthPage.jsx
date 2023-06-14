import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'strore/contacts/Operations';

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
    <form onSubmit={handleSubmit}>
      <label>
        <p>Please enter name</p>
        <input
          onChange={handleName}
          type="text"
          name="name"
          value={userName}
          placeholder="SlavaU"
        />
      </label>
      <label>
        <p>Please enter email</p>
        <input
          onChange={handleEmail}
          type="email"
          name="email"
          value={email}
          placeholder="mango@mail.com"
        />
      </label>
      <label>
        <p>Please enter password</p>
        <input
          onChange={handlePass}
          type="password"
          name="password"
          value={userPass}
          placeholder="********"
        />
      </label>
      <button type="submit">Registration</button>
    </form>
  );
};

export default AuthPage;
