import { authService } from '../../services';

export const useRegister = () => {
  const register = async (username: string, password: string) => {
    const status = await authService.register(username, password);
    return status;
  };

  return { register };
};
