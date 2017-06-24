import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css',]
})
export class AppComponent {
  options: any[] = ['选项1', '选项2', '选项3', '选项4', '选项5'];
  optionSelected: any;

  onSelect({id, text}){
    alert(`id: ${id}, text: ${text}`);
  }
}
