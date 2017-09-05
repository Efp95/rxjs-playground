import {Observable, Observer} from "rxjs"

const numbers = [1, 5, 10];
var source = Observable.from(numbers);

class MyObserver implements Observer<number> {

    next(value) {
        console.log(`Value: ${value}`);
    }

    error(e) {
        console.log(`Exception: ${e}`);
    }

    complete() {
        console.log('Complete');
    }
}

source.subscribe(new MyObserver());
source.subscribe(value => console.log(`Value: ${value}`)
                , e => console.log(`Exception: ${e}`)
                , () => console.log('Complete'));