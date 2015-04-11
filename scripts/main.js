import {foo} from './foo';
import {FooBar} from './foo';

foo();

console.group('Example of a class');
let fooBar = new FooBar();
fooBar.foo = 'hello world';
console.log(fooBar.toString());
console.groupEnd();

console.group('Arrow Functions');
fooBar.displaysFriends();
console.groupEnd();

console.group('Template Strings');
fooBar.templateStrings();
console.groupEnd();

console.group('Function Parameters');
console.log('Default Params');
fooBar.defaultParams();
console.log('Override default params');
fooBar.defaultParams('Hello', 'World');
console.log('Spread Params');
fooBar.spreadParams('foo', 'bar', 'baz', 'biff');
console.groupEnd();

console.group('Sets');
fooBar.createSet();
console.groupEnd();