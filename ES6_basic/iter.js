const custoumIterable = {
  [Symbol.iterator]() {
    let counter = 0;
    return {
      next() {
        if (counter < 5) {
          counter++;
          return { done: false, value: counter };
        } else {
          return { done: true, value: undefined };
        }
      }
    }
  }
}


for (const x of custoumIterable) {
  console.log(x);
}
