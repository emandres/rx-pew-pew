# Reactive Extensions

## Iterator
```typescript
interface Iterator {
    next(): () => { value: T, done: bool }
    // implicit: errors can be thrown
}
```

Consumers **pull** values out of an iterator. Execution is synchronous.

## Observable
```typescript
interface Observer {
    next(): T => void
    error(): E => void
    done(): () => void 
}
```

Producers **push** values to consumers. Execution is asynchronous.

## List Monad

```typescript
//Iteratable
let l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
l.filter(x => x % 2 == 0)               // => [2, 4, 6, 8, 10]
    .map(x => x ** 2)                   // => [4, 16, 36, 64, 100]
    .reduce((acc, cur) => acc + cur, 0) // => 220

//Observable
let o = Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
o.filter(x => x % 2 == 0)
    .map(x => x ** 2)
    .scan((acc, cur) => acc + cur, 0) // => [4, 20, 56, 120, 220]
```

Also flatMap!

## Time Based Operations

* Delay
* Throttle
* Debounce
* And so much more!

## Resources

https://www.youtube.com/watch?v=dwP1TNXE6fc (9m)

https://www.youtube.com/watch?v=3pKNRgResq0 (30m)