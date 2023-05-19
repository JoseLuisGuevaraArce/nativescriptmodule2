import { Component } from '@angular/core'
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

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  searchResults: Array<TopicModel>;
  topics:TopicModel[] = this.topicsService.getTopics();

  constructor(
    private topicsService: TopicsService,
    private routerExtensions: RouterExtensions
  ) {}

  doLater(fn) {setTimeout(fn, 100);};

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onItemTap(args): void {
    this.routerExtensions.navigate(['search/details', this.topics[args.index].id]);
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

  initSearch(text: string) {
    this.searchResults = this.topics.filter((x) => x.topic.indexOf(text) >= 0);
  }
}
