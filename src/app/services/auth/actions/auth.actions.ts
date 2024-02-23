import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginCredentials } from '../../feathers/login-credentials';
import { User } from 'src/shared/model/user';
export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'login': props<{credentials: LoginCredentials}>(),
    'loginFailed': emptyProps(),
    'loginSuccessful': props<{ user: User}>(),
    'logoutAction': emptyProps(),
    'bootingAction': props<{ booting: boolean}>(),
    'disconnectedAction': emptyProps()
  }
});