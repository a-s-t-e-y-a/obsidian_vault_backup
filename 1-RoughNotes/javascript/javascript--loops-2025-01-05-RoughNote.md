---
creation_date: 2025-01-05
path: "1-RoughNotes/2025-01-05"
---
# Rough Note - 2025-01-05


# for loop

for loop is for until we met a condition 

### Common Pitfall:  for ... in**Unexpected Behavior When Iterating Over an Array**

Though you can use a `for...in` loop to iterate over an array, it's recommended to use a regular `for` or `for...of` loop instead.

The `for...in` loop can iterate over arrays and array-like objects, but it may not always access array indexes in order.

Also, the `for...in` loop returns all properties and inherited properties for an array or array-like object, which can lead to unexpected behavior.

For example, this simple loop works as expected:

```js
const array = [1, 2, 3];

for (const i in array) {
  console.log(i);
}

// 0
// 1
// 2
```

But if something like a JS library you're using modifies the `Array` prototype directly, a `for...in` loop will iterate over that, too:

```js
const array = [1, 2, 3];

Array.prototype.someMethod = true;

for (const i in array) {
  console.log(i);
}

// 0
// 1
// 2
// someMethod
```

Though modifying read-only prototypes like `Array` or `Object` directly goes against best practices, it could be an issue with some libraries or codebases.

Also, since the `for...in` is meant for objects, it's much slower with arrays than other loops.

In short, just remember to only use `for...in` loops to iterate over objects, not arrays.



# for ...of

`for...of` loop iterates over  array , special collection types like map , set and etc 


# difference between for and for ... of 

for is for general purpose can be used for and specific task
for ...of for the only special purpose like array , map and sets 


# forEach 

used for arrays but different then for because it cannot break and continue

## Thoughts
- [ ] 