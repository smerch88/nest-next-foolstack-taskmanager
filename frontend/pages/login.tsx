import { useRouter } from 'next/router';
import { useState } from 'react';
import { useLogin } from '../src/hooks/auth/useLogin';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useLogin();
  const router = useRouter();
  const onSubmit = () => {
    if (!name || !password) {
      alert('Please enter information');
    } else {
      login(name, password)
        .then(res => router.push('/taskmanager'))
        .catch(e => alert(e));
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-fit flex-col gap-2">
        <p className="text-2xl font-bold">Login Form</p>
        <label>Username</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          className="h-8 w-80 rounded border border-solid border-black px-2"
          placeholder="username"
        />
        <label className="mt-4">Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="h-8 w-80 rounded border border-solid border-black px-2"
          placeholder="password"
          type="password"
        />
        <button
          onClick={onSubmit}
          className="mt-8 h-10 w-80 rounded bg-black text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}
