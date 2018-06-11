import { Component } from '@angular/core';

const options1: any[] = ['1-1', '1-2', '1-3', '1-4', '1-5'];
const options2: any[] = ['2-1', '2-2', '2-3', '2-4', '2-5'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class AppComponent {
  options: any[] = options1;
  optionSelected: any;
  optionsSelected: any;
  settingsOptionSelected: any;
  inputVal: string = '';
  settings: any = { placeholder: 'Changing the settings', data: [{id: 1, text: '1'}, {id: 2, text: '2'}], width: '50%' };

  onSelect({ id, text }) {
    alert(`id: ${id}, text: ${text}`);
    console.log(this.optionSelected);
  }

  changeOptions() {
    this.options = this.options == options1 ? options2 : options1;
    console.log(this.options);
  }

  changeValue() {
    this.optionSelected = this.inputVal;
    this.optionsSelected = [this.inputVal];
  }

  changeSettings() {
    this.settings = { placeholder: 'Changing the settings', data: [{id: 3, text: '3'}, {id: 4, text: '4'}], width: '50%' };
  }
}
