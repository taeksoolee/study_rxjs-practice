import { of } from 'rxjs';
import { map, first, scan } from 'rxjs/operators';

const arr = [1,2,3,4,5];

of(...arr)
  .pipe(
    map((v) => {
      return v * 2;
    })
  )
  .subscribe((v) => {
    console.log('subscribed ::: ', v);
  });

// 2, 4, 6, 8, 10

console.log('===========')
of(1,2,3).pipe(first()).subscribe((v) => console.log(v));


console.log('===========');
const number$ = of(350, 222, 57);

number$
  .pipe(
    scan((total, curr) => (total, curr), 0),
    map((sum, index) => (sum / (index + 1))),
  )
  .subscribe((avg) => {
    console.log(avg);
  })