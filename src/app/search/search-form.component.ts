import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'SearchForm',
  template: `
    <FlexboxLayout flexDirection="row">
        <TextField #texto="ngModel" [(ngModel)]="textFieldValue" hint="Enter text." required  minlen="4"></TextField>
        <Label *ngIf="texto.hasError('required')" text="*"></Label>
        <Label *ngIf="!texto.hasError('required') && texto.hasError('minlen')" text="4+"></Label>
    </FlexboxLayout>
    <Button text="Buscar!" (tap)="onButtonTap()" *ngIf="texto.valid"></Button>
    `,
})
export class SearchFormComponent implements OnInit {
    
    textFieldValue: string = '';

    @Output() search: EventEmitter<string> = new EventEmitter();
    @Input() initial: string;

    ngOnInit(): void {
        this.textFieldValue = this.initial;
    }

    onButtonTap(): void {
        if (this.textFieldValue.length > 2) {
            this.search.emit(this.textFieldValue)
        }
    }
}
