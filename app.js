console.log('Using webpack and babel and immutable');

// A little bit of ES6 import (badly supported except for webpack)
import { Map } from "immutable";

// Immutable experiment
const first = Map({key: "value"});
console.log(first);
const second = first.set("two", "second");
console.log(second);

// A little bit of ES6 to prove babel right
const a = [1,2,3,4,5];
a.map(v => console.log(v));
