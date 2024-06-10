import { Counter } from '$lib/count.svelte';
import { describe, test, it, beforeEach, expect } from 'vitest';

describe('Counter Instance', () => {
	let countInstance: Counter;
	beforeEach(() => {
		countInstance = Counter.create(0, 1);
	});

	it('should be defined', () => {
		expect(countInstance.display).toBe(0);
	});

	describe('increment behavior', () => {
		it('increment by 1', () => {
			countInstance.increment();
			expect(countInstance.display).toBe(1);
		});

		it('increment by 4, twice', () => {
			countInstance.amount = 4;
			countInstance.increment();
			countInstance.increment();
			expect(countInstance.display).toBe(8);
		});
	});

	it('decrement by 1', () => {
		countInstance.decrement();
		expect(countInstance.display).toBe(-1);
	});
});
