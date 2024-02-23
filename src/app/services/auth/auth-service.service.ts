import { Injectable } from '@angular/core';
import { FeathersService } from '../feathers/feathers.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private get authenticationClient() {
    return this.feathers.authentication;
  }

  public get getAccessToken() {
    return this.authenticationClient.getAccessToken();
  }

  constructor(private feathers: FeathersService) {}

  async logOut() {
    const accessToken = await this.authenticationClient.getAccessToken();
    return accessToken ? this.feathers.logout() : null;
  }

  login(email: string, password: string): Promise<any> {
    return this.feathers.login(email, password);
  }

  public isAuthenticated() {
    return this.feathers.isAuthenticated();
  }

  public async sendResetPassword(email: string) {
    return this.feathers.sendResetPwd(email);
  }

  public changePassword(email: string, oldPassword: string, newPassword: string) {
    return this.feathers.changePassword(email, oldPassword, newPassword);
  }

  public checkUnique(email: string, ownId: number = null) {
    return this.feathers.checkUnique(email, ownId);
  }
}
