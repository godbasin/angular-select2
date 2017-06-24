# Angular-Select2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Instructions
This project is built for showing how to use angular-select2-component.

# Angular-Select2-Component

Source code in: [https://github.com/godbasin/angular4-select2/tree/npm-publish-code](https://github.com/godbasin/angular4-select2/tree/npm-publish-code).

## Related Versions

Angular-Select2-Component is baseed on these plugins and libs(version):
- [angular(>= 2.0-release)](https://angular.io/)
- [jQuery](https://jquery.com/)
- [select2](https://select2.github.io/)

## How to use 
---
### Install
``` cmd
// npm install
npm install angular-select2-component --save

// if you have not installed jquery
npm install jquery --save
```

### Use as component
1. Import component.

``` javascript
// import NgModule
import {NgModule} from '@angular/core';
// import Select2Component
import {Select2Component} from 'angular-select2-component';

@NgModule({
  // ...
  // declare components
  declarations: [Select2Component]
})
export class YourModule {
}
```

2. Template.

``` html
<select2 [options]="options" [(ngModel)]="optionSelected" (onSelect)="onSelect($event)"></select2>
```
