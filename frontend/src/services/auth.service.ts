import axios, { AxiosInstance } from 'axios';

export class AuthService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!',
    });
  }

  login = (username: string, password: string) => {
    return this.instance
      .post('/auth/signin', {
        username,
        password,
      })
      .then(res => {
        return {
          accessToken: res.data.accessToken,
        };
      });
  };
}
