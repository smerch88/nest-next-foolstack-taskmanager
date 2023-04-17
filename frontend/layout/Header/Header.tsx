import { HeaderProps } from './Header.props';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props} className={``}>
      <div className="container">header</div>
    </header>
  );
};
