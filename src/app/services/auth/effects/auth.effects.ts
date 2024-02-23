import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { AuthActions } from '../actions/auth.actions';
import { toastFn } from 'src/shared/util/toast';
import { getTranslationFn } from 'src/shared/util/translate';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthenticationResult } from '@feathersjs/authentication';
import { FeathersService } from '../../feathers/feathers.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    _toastFn = toastFn();

    _getTranslationFn = getTranslationFn();

    loginClicked$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AuthActions.login),
                map(async ({ credentials }) => {
                    const { email, password } = credentials;
                    const authResult: AuthenticationResult =
                        await this.feathersService
                            .authenticate({
                                email,
                                password,
                                strategy: 'local',
                            })
                            .catch(async (error) => {
                                this.toasLoginError(error);
                                return undefined;
                            });
                    if (authResult) {
                        localStorage.setItem('authResult', JSON.stringify(authResult));
                        this.router.navigate(['/']);
                    }
                })
            ),
        { dispatch: false }
    );

    constructor(private actions$: Actions, private feathersService: FeathersService, private router: Router) {}

    toasLoginError(error) {
        let message = error && error.message ? error.message : error;
        if (error?.code === 401) {
            message = {
                translationKey: 'WRONG_CREDENTIALS',
            };
        }

        this._toastFn({
            key: 'root-inform',
            severity: 'error',
            summary: {
                translationKey: 'LOGIN_FAILED_TITLE',
            },
            detail: {
                translationKey: 'WRONG_CREDENTIALS',
            },
        });
    }
}
