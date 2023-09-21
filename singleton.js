// Патерн Одинак - потрібен для того, щоб гарантувати
// тільки один екземпляр будь-чого(наприклад товару у корзині товарів інтернет магазину)
// і забезпечує глобальну точку доступу до цього екземпляра
class Counter {

	constructor() {
		if (typeof Counter.instance === 'object') { //перевіряємо чи є об'єкт
			return Counter.instance; //якщо є то повертаємо його ж
		}
		this.count = 0;
		Counter.instance = this; //якщо його немає, то створюємо
		return this;
	}
  
	getCount() { //метод, який повертає значення
		return this.count;
	}
  
	increaseCount() { //метод, який повертає значення збільшене на одиницю
		return this.count++;
	}
}


const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount2.getCount());
console.log(myCount1.getCount());

// Result: 4 4