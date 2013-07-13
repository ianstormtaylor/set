# set

  Set a property on a model or object.

## Installation

    $ component install ianstormtaylor/set

## Example

Plain objects:    
```js
var set = require('set');

var person = { name: 'ulysses' };
set(person, 'name', 'achilles');
person.name; // achilles
```

Getter/setter methods:
```js
var set = require('set')
  , model = require('model');

var Person = model('person').attr('name');
var person = new Person({ name: 'ulysses' });
set(person, 'name' 'achilles'); 
person.name(); // achilles
```

Get methods:
```js
var Backbone = require('backbone')
  , set = require('set');

var person = new Backbone.Model({ name: 'ulysses' });
set(person, 'name', 'achilles')); 
person.get('name'); // achilles
```

## API

### set(model, prop, value)
  Get the `model`'s `prop` to` `value`.

## License

  MIT
