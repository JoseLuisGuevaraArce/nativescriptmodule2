import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Button, Color, CoreTypes, GestureEventData, Label, View } from "@nativescript/core";

import { TopicModel } from "~/app/components/models/topic.model";
import { TopicsService } from "~/app/components/services/topics.service";

@Component({
  // moduleId: module.id,
  selector: 'ns-details',
  templateUrl: 'details.component.html'
})
export class DetailsComponent implements OnInit {

  @ViewChild('detailsLayout') detailsLayout: ElementRef;
  topic: TopicModel | undefined = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tipicsService: TopicsService,
    private routerExtensions: RouterExtensions
  ) {}

  doLater(fn) {setTimeout(fn, 100);};

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.topic;
      // this.topic = this.tipicsService.getTopicById(id)
    }
  }

  back(): void {
    this.routerExtensions.navigate(['search']);
  }

  refreshList(args) {
    const pullRefresh = args.object;
    const self = this;
    setTimeout(function () {
      pullRefresh.refreshing = false;
      self.topic.details.push({
        user: 'Joseph Nogales',
        comment: 'Its my life...',
        avatar: '~/app/assets/user.png',
      });
    }, 1000);
  }

  onLongPress(args:GestureEventData):void {
    const buttonAn = <Button>args.object;
    buttonAn.animate({
      backgroundColor: new Color('green'),
      duration: 300,
      delay: 150
    }).then(() => buttonAn.animate({
      backgroundColor: new Color('#F6F1F1'),
      duration: 300,
      delay: 150,
      curve: CoreTypes.AnimationCurve.easeIn
    }))
  }

}