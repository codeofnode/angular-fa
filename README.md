# angular-fa
#### A simple angular directive to put fixed alert on top of page.

## Install
     npm install --save angular-fa

## Usage
First make your app dependent to `ngFixedAlert`
```javascript
var app = angular.module('app', [ 'ngFixedAlert' ]);
```
Then simply add this line inside body of page

```html
<div r-fa="{{alertMessageScopeVar}}"></div>
<!-- If at any time alertMessageScopeVar becomes empty, the alert will disappear.  -->
```

### Options as attributes of the element with which `r-fa` is linked
* `closable` : if its value is false, the alert can not be disappear. For any other value or no value, alert will displayed until user clears that or timeout happens
* `autoHide` : Only means if closable != `false`. `autoHide` can be number of milliseconds or can be false.
If its value is false, then alert will not disappear until user click on cross link. If its value is numeric then alert will be visible for specified number of miliseconds. By default its value is false,

## Licence
MIT
