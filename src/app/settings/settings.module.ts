import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { SettingsRoutingModule } from './settings-routing.module'
import { SettingsComponent } from './settings.component'
import { SettingsFormComponent } from './settings-form.component'

@NgModule({
  imports: [NativeScriptCommonModule, SettingsRoutingModule, NativeScriptFormsModule],
  declarations: [SettingsComponent, SettingsFormComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
