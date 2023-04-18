import Link from 'next/link';
import { HeaderProps } from './Header.props';
import { useLogout } from '@/src/hooks/auth/useLogout';
import { useRouter } from 'next/router';
import { useCurrentUser } from '@/src/hooks/auth/useCurrentUser';

const pages = [
  { id: '1', href: '/', title: 'home' },
  { id: '2', href: '/about', title: 'about' },
  { id: '3', href: '/taskmanager', title: 'taskmanager' },
];

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const { user: currentUser } = useCurrentUser();

  const { logout } = useLogout();
  const router = useRouter();

  return (
    <header {...props} className={``}>
      <div className="container">
        <nav>
          <ul>
            {pages.map(({ id, href, title }) => (
              <li key={id}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {currentUser ? (
          <button
            onClick={() => {
              logout();
              router.push('/login');
            }}
            className="mt-2 cursor-pointer rounded border border-solid border-black px-4 py-2"
          >
            Logout
          </button>
        ) : (
          <div>
            <button
              onClick={() => {
                router.push('/login');
              }}
              className="mt-2 cursor-pointer rounded border border-solid border-black px-4 py-2"
            >
              LogIn
            </button>
            <button
              onClick={() => {
                router.push('/register');
              }}
              className="mt-2 cursor-pointer rounded border border-solid border-black px-4 py-2"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
