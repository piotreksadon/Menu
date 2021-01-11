const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const p = document.querySelector('p');

function Food(meal, price){
    this.meal = meal;
    this.price = price;
};

Food.prototype.test = function (){
    p.innerText = `${this.meal} kosztuje ${this.price} zł.`
}

const meal1 = new Food('Bigos', 15);
const meal2 = new Food('Pierogi Ruskie', 14);
const meal3 = new Food('Kopytka', 11);

btn1.addEventListener('click', function () {
    meal1.test();
});

btn2.addEventListener('click', function () {
    meal2.test();
});

btn3.addEventListener('click', function () {
    meal3.test();
});