import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { carsActions } from '../actions/cars-actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class carsEffects {
    constructor(private actions$: Actions, private router: Router) {

    }
}
