import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

import * as appSettings from "@nativescript/core/application-settings";

require( "nativescript-localstorage" );

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  userName: string;
  constructor() {
    // Use the component constructor to inject providers.
    // appSettings.setBoolean("estaLogueado", false)
    // appSettings.setString("userName", "Messi");
    
    
    localStorage.setItem('userName', 'Ronaldo');
  }

  ngOnInit(): void {
    
    // this.userName = appSettings.getString('userName', 'Diego');
    this.userName = localStorage.getItem('userName');
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onPersistUserData(text: string): void {
    localStorage.setItem('userName', text);
    this.userName = localStorage.getItem('userName');
    // appSettings.setString("userName", text);
    // this.userName = appSettings.getString('userName');
  }
}
