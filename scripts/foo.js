export function foo() {
  console.log("Export Function: foo()");
}

export class FooBar {
  constructor() {
    console.log("Created FooBar");
    this.foo = 'foo';
    this.bar = 'bar';
    this.myName = 'Jon';
    this.friends = [
      {
        'name' : 'Mark',
        'age' : 25
      },
      {
        'name' : 'David',
        'age' : 24
      },
      {
        'name' : 'Kevin',
        'age' : 21
      },

    ];
  }

  toString() {
    return this.foo + ',' + this.bar;
  }

  displaysFriends() {
    let msgContent = this.friends.map( friend =>
      this.myName + ' knows ' + friend.name
    );
    console.log(msgContent);
  }

  templateStrings() {
    let name = 'Johnny';
    let age = '1000';
    console.log(`My name is ${name} and I am ${age} years old`);
  }

  defaultParams(foo='foo', bar='bar') {
    console.log(foo, bar);
  }

  spreadParams(foo, ...bar) {
    console.log(foo, bar);
  }

  createSet() {
    let data = [1,2,3,4];
    let mySet = new Set(data);
    console.log('Contains 3',mySet.has(3));
    console.log('Contains 5',mySet.has(5));
    console.log('Size: ', mySet.size);

    let mySet2 = new Set();
    mySet2.add('foo');
    mySet2.add('bar');
    console.log('Contains bar: ', mySet2.has('bar'));
    console.log('Size: ', mySet2.size);
  }

}