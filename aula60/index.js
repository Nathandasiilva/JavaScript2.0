function* gerador1() {
    // Codigo qualuqer
    yield 'Valor 1';
    // Codigo qualuqer
    yield 'Valor 2';
    // Codigo qualuqer
    yield 'Valor 3';
 }

 const g1 = gerador1();
 for (let valor of g1) {
    console.log(valor);
}

function* gerador2() {
    yield 0;
    yield 1;
    yield 2;
}

function* gerador3() {
    yield* gerador2();
    yield 3;
    yield 4;
    yield 5;
}

const g3 = gerador3();

function* geradora4() {
    yield function() {
        console.log('Vim do y1');
    };

    //...

    yield function() {
        console.log('Vim da y2');
    };
}
const g4 = geradora4();
const func1 = g4.next().value;
const func2 = g4.next().value;
func1();
func2();


