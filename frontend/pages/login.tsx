import { NextPage } from 'next';
import { withLayout } from '@/layout/Layout';
import { loginAdmin } from '@/services/api';
import { useState } from 'react';

const LoginPage: NextPage = () => {
  const [login, setLogin] = useState('smerch');
  const [password, setPassword] = useState('123456aA');

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(login);
    console.log(password);
    loginAdmin({ username: login, password: password });
    // Here you can make an API request to log the user in
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          login:
          <input type="login" value={login} onChange={handleLoginChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default withLayout(LoginPage);
