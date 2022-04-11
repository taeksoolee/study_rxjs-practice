const btn = document.querySelector('#btn');

// let count = 0;
// btn.addEventListener('click', () => {
//   console.log(`clicked ${count++}`);
// });

const { Observable, fromEvent } = rxjs;
const { scan } = rxjs.operators

const observable = fromEvent(btn, 'click')
  .pipe(scan((count, curr) => {
    console.log(curr);
    return count + 1;
  }, 0));

const observer = count => console.log(`Clicked ${count}`);
observable.subscribe(observer);