Here's the same information formatted for an MDN-style document:

---

# JavaScript: Primitives and Objects - Copying and Cloning

## Primitives (Strings, Numbers, Booleans)
Primitives are copied **as a whole value**. This means that when you assign a primitive value to another variable, the values are independent of each other.

**Example:**

```javascript
let a = 10;
let b = a; // 'a' and 'b' are independent
```

- **Result**: `a` and `b` are separate values.

## Objects
Objects are copied **by reference**. This means that when you assign an object to another variable, both variables refer to the same object in memory.

**Example:**

```javascript
let user = { name: "John" };
let admin = user; // 'admin' and 'user' refer to the same object
```

- **Result**: `admin` and `user` point to the same object in memory.

## Shallow Copy (Object.assign)
A shallow copy only copies the top-level properties of an object. Nested objects or arrays inside the object will still refer to the same reference as the original object.

**Example:**

```javascript
let clone = Object.assign({}, user); // Shallow copy of 'user'
```

- **Result**: `clone` and `user` share the same references to nested objects.

## Deep Cloning (structuredClone)
Deep cloning creates a copy of the object as well as its nested objects. In this case, both the object and the nested objects are independent of the original object.

**Example:**

```javascript
let clone = structuredClone(user); // Deep copy of 'user'
```

- **Result**: `clone` and `user` are completely independent, including nested objects.

## Const Objects
The `const` keyword only locks the reference to the object, not the object itself. This means that you can still modify the properties of the object.

**Example:**

```javascript
const user = { name: "John" };
user.name = "Pete"; // Modifying the object is allowed
```

- **Result**: You can change the properties of the object, but you can't reassign the object itself.

## Comparison by Reference
Objects are considered equal if they point to the **same reference**. Even if two objects have the same properties and values, they will not be equal unless they are the exact same object in memory.

**Example:**

```javascript
let a = {};
let b = a; // Both variables point to the same object
a == b; // true
```

- **Result**: `a` and `b` are considered equal because they refer to the same object.

## Independent Objects
Even if two objects have the same properties and values, they will **not** be equal unless they are the same object. 

**Example:**

```javascript
let a = {};
let b = {}; // Different objects, even though both are empty
a == b; // false
```

- **Result**: `a` and `b` are not equal, as they are different objects.

## Circular References
If an object references itself (circular reference), the `structuredClone` method can handle it properly.

**Example:**

```javascript
let user = {};
user.me = user; // Circular reference
let clone = structuredClone(user); // Correctly handles circular references
```

- **Result**: `structuredClone` handles circular references without errors.

## Function Properties
`structuredClone` does **not** support cloning functions.

**Example:**

```javascript
let obj = { f: function() {} };
let clone = structuredClone(obj); // Throws error
```

- **Result**: An error is thrown because functions cannot be cloned using `structuredClone`.

## Summary

- **Primitives** are copied by value.
- **Objects** are copied by reference.
- Use `Object.assign` for **shallow copy** and `structuredClone` for **deep copy**.
- **Nested objects** need deep cloning for independent copies.
- `const` locks the reference of an object but allows modification of its properties.
- Objects are **equal by reference**, not by value.
- **Circular references** are handled by `structuredClone`.
- `structuredClone` does not support cloning **functions**.

---
