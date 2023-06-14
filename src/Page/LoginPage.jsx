import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'strore/contacts/Operations';

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
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
