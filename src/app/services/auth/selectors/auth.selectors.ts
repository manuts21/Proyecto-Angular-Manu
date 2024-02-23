import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const userSelector = createSelector(selectAuthState, (state) => state.user);

export const userIdSelector = createSelector(userSelector, (user) => user.id);

export const isLoggedInSelector = createSelector(userSelector, (auth) => !!auth);

export const isLoggedOutSelector = createSelector(isLoggedInSelector, (loggedIn) => !loggedIn);

export const selectUserPhoto = createSelector(
  userSelector,
  (user) => user?.backgroundUrl
);

export const selectUserRoleIds = createSelector(
  userSelector,
  (user) => user?.roles ?? []
);

export const selectNickname = createSelector(
  userSelector,
  (user) => user?.nickName
);

export const selectName = createSelector(
  userSelector,
  (user) => user?.name
);
