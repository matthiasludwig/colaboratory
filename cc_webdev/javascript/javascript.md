# Javascript Lessons Notes

## Higher Order Functions

Calling another (higher order) function from a current function. Arrow functions can also be callback functions.
A simple example is a timing function that invokes another function and times it.

```javascript
const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);
```
