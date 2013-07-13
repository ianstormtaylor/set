describe('set', function () {
  var assert = require('assert')
    , Backbone = require('backbone')
    , model = require('model')
    , set = require('set');

  it('should handle plain objects', function () {
    var person = { name: 'ulysses' };
    set(person, 'name', 'achilles');
    assert('achilles' === person.name);
  });

  it('should handle getter/setter methods', function () {
    var Person = model('person').attr('name');
    var person = new Person({ name: 'ulysses' });
    set(person, 'name', 'achilles');
    assert('achilles' === person.name());
  });

  it('should handle get methods', function () {
    var person = new Backbone.Model({ name: 'ulysses' });
    set(person, 'name', 'achilles');
    assert('achilles' === person.get('name'));
  });
});