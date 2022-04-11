import { interval, timer } from 'rxjs';
import { map, first } from 'rxjs/operators';

const observer = (v) => {
  console.log('v : ', v);
}


// interval(1000).subscribe(observer);

timer(2000).subscribe(observer);