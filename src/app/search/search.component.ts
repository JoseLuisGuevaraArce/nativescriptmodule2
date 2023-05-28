import { Component, OnInit } from '@angular/core'
import { Application, Button, EventData } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
// DIALOGS
import * as dialogs from '@nativescript/core/ui/dialogs'
//TOAST
import { Toasty } from 'nativescript-swypelab-toasty';

import { RadSideDrawer } from 'nativescript-ui-sidedrawer'

import { TopicsService } from '../components/services/topics.service'
import { TopicModel } from '../components/models/topic.model'
import { Category } from '../components/enums/enums'
import { AppState } from '../app.module';
import { Store } from '@ngrx/store';
import { NewNewsAction, News } from '../components/models/news-state.model';

require( "nativescript-localstorage" );

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  searchResults: Array<TopicModel>;
  topics:any;
  // topics = this.topicsService.getTopics();

  constructor(
    private topicsService: TopicsService,
    private routerExtensions: RouterExtensions,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.topicsService.getTopics().then(resp => {
      this.topics = resp;
    });
    console.log(this.topics);

    localStorage.setItemObject('favorites', []) ;

    this.store.select((state) => state.news.suggested)
      .subscribe((data) => {
        const f = data;
        if (f!== null) {
          const toast = new Toasty({ text: 'Sugerimos leer: '  + f.title});
          this.doLater(() => toast.show());
        }
      })
    
  }

  doLater(fn) {setTimeout(fn, 100);};

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onItemTap(args): void {
    this.routerExtensions.navigate(['search/details', this.topics[args.index].id]);
    // this.store.dispatch(new NewNewsAction(new News(args.view.bindingContext)))
  }

  onEditItem(event, idx: number) {
    const categories = [
      Category.Entertainment,
      Category.Travels,
      Category.Meals
    ]

    // DIALOGS
    this.doLater(() => {
      dialogs.action('Edit category!', 'Cancel', categories)
        .then(result => {
          if (result === Category.Entertainment) {
            this.topics[idx].category = Category.Entertainment;
          } else if (result === Category.Travels) {
            this.topics[idx].category = Category.Travels;
          } else if (result === Category.Meals) {
            this.topics[idx].category = Category.Meals;
          }

          const toast = new Toasty({ text: 'Update SUCCESS' });
          this.doLater(() => toast.show());
        })
    })
  }

  // initSearch(text: string) {
  //   this.searchResults = this.topics.filter((x) => x.topic.indexOf(text) >= 0);
  // }
  initSearch(text: string) {
    console.dir('Init Search: ' + text);
    this.topicsService.search(text)
      .then((r: any) => {
        console.log('Results: ' + JSON.stringify(r));
        this.searchResults = r;
      }).catch((e) => {
        console.log('joseluis: ' + e);
        const toast = new Toasty({ text: 'Error searching' });
        this.doLater(() => toast.show());
      })
    
  }

  onAddFavorite(event, idx: number) {
    let local = localStorage.getItem('favorites');

    const newFavorites: any[] = [];

    for (let index = 0; index < localStorage.getItem('favorites').length; index++) {
      newFavorites.push(local[index])
    }
    
    newFavorites.push({
      name: this.topics[idx].topic
    })

    localStorage.setItemObject('favorites', newFavorites) ;
    console.log(localStorage.getItem('favorites'));
  }
}
