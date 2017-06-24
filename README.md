# Angular-Select2-Component

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