import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'SettingsForm',
  template: `
    <FlexboxLayout flexDirection="row">
        <TextField #texto="ngModel" [(ngModel)]="textFieldValue" hint="Enter new username"></TextField>
    </FlexboxLayout>
    <Button text="Save" (tap)="onSave()" *ngIf="texto.valid"></Button>
    `,
})
export class SettingsFormComponent implements OnInit {
    
    textFieldValue: string = '';

    @Output() setting: EventEmitter<string> = new EventEmitter();
    @Input() initial: string;

    ngOnInit(): void {
        this.textFieldValue = this.initial;
    }

    onSave(): void {
        if (this.textFieldValue.length > 2) {
            this.setting.emit(this.textFieldValue)
        }
    }
}
