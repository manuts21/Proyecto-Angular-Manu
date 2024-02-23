import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { User } from 'src/shared/model/user';

export const authFeatureKey = 'auth';

export interface State {
  booting: boolean;
  user: User;
  socketConnected: boolean;
}

export const initialState: State = {
  booting: false,
  user: undefined,
  socketConnected: false,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccessful, (state, { user } ) => ({
    ...state,
    user,
    socketConnected: true,
  })),
  on(AuthActions.logoutAction, (state) => ({
    ...state,
    user: undefined,
  })),
  on(AuthActions.bootingAction, (state, { booting }) => ({
    ...state,
    booting,
    loggedIn: false,
    socketConnected: false,
  })),
);


export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});

