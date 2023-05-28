import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of} from 'rxjs'
import { map } from 'rxjs/operators'

//STATE
export class News {
    constructor(public title: string) {}
}

export interface NewsState {
    items: News[],
    suggested: News
}

export function initializeNewsState() {
    return {
        items: [],
        suggested: null
    };
}

export enum NewsActionType {
    INIT_MY_DATA = "[News] Init my data",
    NEW_NEWS = "[News] New",
    SUGGESTED_NEW = "[News] Suggest"
}

export class InitMyDataAction implements Action {
    type = NewsActionType.INIT_MY_DATA;
    constructor(public titulares: Array<string>) {}
}

export class NewNewsAction implements Action {
    type = NewsActionType.NEW_NEWS;
    constructor(public news: News) {}
}

export class SuggestedAction implements Action {
    type = NewsActionType.SUGGESTED_NEW;
    constructor(public news: News) {}
}

export type NewsTravelActions = NewNewsAction | InitMyDataAction;

//REDUCERS

export function reducersNews(
    state: NewsState,
    action: NewsTravelActions
): NewsState {
    switch (action.type) {
        case NewsActionType.INIT_MY_DATA: {
            const titulares: Array<string> = (action as InitMyDataAction).titulares;

            return {
                ...state,
                items: titulares.map((t) => new News(t))
            }
        }
        case NewsActionType.NEW_NEWS: {
            return {
                ...state,
                items: [...state.items, (action as NewNewsAction).news]
            }
        }
        case NewsActionType.SUGGESTED_NEW: {
            return {
                ...state,
                suggested: (action as SuggestedAction).news
            }
        }
    }

    return state;
}

//EFECTS
//tslint:disable-next-line:max-classes-per-file
@Injectable()
export class NewsEffects {

    // @Effect()
    // newAdded$: Observable<Action> = this.actions$.pipe(
    //     ofType(NewsActionType.NEW_NEWS),
    //     map((action: NewNewsAction) => new SuggestedAction(action.news))
    // )

    newAdded$: Observable<Action> = createEffect(() =>
     this.actions$.pipe(
        ofType(NewsActionType.NEW_NEWS),
        map((action: NewNewsAction) => new SuggestedAction(action.news))
    ));

    constructor(private actions$: Actions) {}

}