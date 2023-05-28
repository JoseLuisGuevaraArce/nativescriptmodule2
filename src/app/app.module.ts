import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { TopicsService } from './components/services/topics.service'
import { initializeNewsState, NewsEffects, NewsState, reducersNews } from './components/models/news-state.model'
import { ActionReducerMap, StoreModule as NgRxStoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

require( "nativescript-localstorage" );

//REDUX INIT
export interface AppState {
  news: NewsState;
}

// const reducers: ActionReducerMap<AppState> = {
//   news: reducersNews
// }

// const reducersInitialState = {
//   news: initializeNewsState()
// }
//End REDUX INIT 

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    // NgRxStoreModule.forRoot(reducers, {initialState: reducersInitialState}),
    // EffectsModule.forRoot([NewsEffects])
  ],
  // providers: [TopicsService, NewsEffects],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
