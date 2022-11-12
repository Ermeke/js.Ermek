const mainblock = document.querySelector('.mainblock');
let position = 0;
let topPosition = 0;

const move = () => {
    if (position <= 440 && topPosition === 0 ) {
        position += 20;
        mainblock.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position >= 440 && topPosition <= 440) {
        topPosition += 20;
        mainblock.style.top = `${topPosition}px`
        setTimeout(move, 100);
    } else if (topPosition >= 440 && position !== 0) {
        position -= 20;
        mainblock.style.left = `${position}px`;
        setTimeout(move, 100);
    } else if (position <= 0 &&  topPosition >= 0) {
        topPosition -=20;
        mainblock.style.top = `${topPosition}px`
        setTimeout(move, 100);
    }
};
move();
// #2
let number =0;

const startNew = document.querySelector("#start")
const stopNov = document.querySelector("#stop")

console.log(start);


startNew.addEventListener("click", () => {
     startFunction = setInterval(interval, 1000);
     function interval() {
        number ++;
        console.log(`${number} seconds later`);
    }
});

stopNov.addEventListener("click",() => {
    clearInterval(startFunction);
    console.clear()
    number = 0;
    });


// #3
const func = (number) => {
    console.log(number);
    const culck = () => {
        let i = number *8;
        console.log(i);
    };
   culck();
}
func(9);






// Дополнительное задание


/// Сортировать все не четные числа в новый массив 
// подсказка нужно использовать методы массивов которые возвращяет новый массив


// let arr = [1,3,4,6,7,11,12,13]
// let array = [5, 3, 2, 8, 1, 4] ,
//   indices = [];

//   array
//    .filter((v, i) => v % 2 && indices.push(i))
//    .sort ((a, b) => a - b )
//    .forEach((v, i) => array[indices[i]] = v );

//    console.log(array);


