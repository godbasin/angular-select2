/**
 * desc：select2
 * how to use: <select2 [(ngModel)]='your_prop' [options]='your_options' [disabled]='your_condition' ></select2>
 */
declare var require: any
const $ = require('jquery');
require('./select2/select2.min.js');
import { Component, Input, Output, AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, 
    ViewEncapsulation, SimpleChanges } from '@angular/core';
import { CustomInputComponent, customInputAccessor } from './custom-input';

@Component({
    selector: 'select2',
    template: `<select class="form-control" [(ngModel)]="value" [disabled]="disabled"></select>`,
    styleUrls: ['./select2/select2.min.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [customInputAccessor(Select2Component)]
})
// ControlValueAccessor: A bridge between a control and a native element.
export class Select2Component extends CustomInputComponent implements OnChanges, OnDestroy, AfterViewInit {
    @Input() options: any[] = []; // object: {id, text} or array: []
    @Input() disabled: boolean = false;
    @Output() onSelect = new EventEmitter<any>();

    select2: any;
    private el: ElementRef;

    constructor(el: ElementRef) {
        super();
        this.el = el;
    }

    ngAfterViewInit() {
        this.select2.select2('val', [this.value]);
    }

    ngOnChanges(changes: SimpleChanges) {
        // Checking if the plugin is initialized
        if (this.select2 && this.select2.hasClass("select2-hidden-accessible")) {
            // Select2 has been initialized
            if(changes.options){
                // options change
                this.select2.empty();
                this.select2.select2({data: this.options});
            }
            this.select2.trigger('change');
        }else{
            this.select2 = $(this.el.nativeElement).find('select').select2({
                data: this.options,
            }).on('select2:select', (ev: any) => {
                const { id, text } = ev['params']['data'];
                this.value = id;
                this.onSelect.emit({ id, text });
            });
        }
        this.select2.select2('val', [this.value]);
    }

    ngOnDestroy(){
        this.select2.select2('destroy');
    }
}
