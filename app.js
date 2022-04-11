// observable
import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();
  }, 1000);
});

const test = () => {
  observable.subscribe({
    next(x) {
      console.log('x : ', x);
    },
    error(err) {
      console.error('wrong');
    },
    complete() {
      console.log('done');
    }
  });
}

test();