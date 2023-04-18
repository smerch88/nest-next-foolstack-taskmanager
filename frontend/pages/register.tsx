import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRegister } from '../src/hooks/auth/useRegister';

export default function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useRegister();
  const router = useRouter();
  const onSubmit = () => {
    if (!name || !password) {
      alert('Please enter information');
    } else {
      register(name, password)
        .then(res => router.push('/login'))
        .catch(e => alert(e));
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-fit flex-col gap-2">
        <p className="text-2xl font-bold">Register Form</p>
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
          Register
        </button>
      </div>
    </div>
  );
}
