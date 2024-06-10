export class Counter {
	count: number = $state(0);
	amount: number = $state(1);
	display: number = $derived.by(() => {
		return this.count * this.amount;
	});

	private constructor(count: number, amount: number) {
		this.count = count;
		this.amount = amount;
	}

	static create(count: number, amount: number) {
		return new this(count, amount);
	}

	increment() {
		console.log('increment');
		this.count += 1;
		console.log(this.count);
	}
	decrement() {
		this.count -= 1;
	}
	reset() {
		this.count = 0;
	}
}

// MVVM
// Dependency injection
// IoC (inversion of control)

// abstract class CounterBase {
// 	#amount: number;
// 	#count: number;
// 	constructor() {
// 		this.#amount = 0;
// 		this.#count = 0;
// 	}
// 	abstract increment(): void;
// 	abstract decrement(): void;
// 	abstract reset(): void;
// }

// export class CounterModel extends CounterBase {
// 	count: number = 0;
// 	amount: number = 0;
// 	constructor() {
// 		super();
// 	}
// 	increment() {
// 		this.count += 1;
// 	}
// 	decrement() {
// 		this.count -= 1;
// 	}
// 	reset() {
// 		this.count = 0;
// 	}
// }

// export class CounterViewModel<T extends CounterBase> {
// 	model: T;
// 	display: number = $state(0);

// 	constructor(model: T) {
// 		this.model = model;
// 	}

// 	handleIncrement() {
// 		this.model.increment();
// 		this.updateState();
// 	}

// 	handleDecrement() {}

// 	updateState() {
// 		this.display = this.model.amount * this.model.count;
// 	}
// }
