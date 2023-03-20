// implement n > 0 stacks using a single Array

class Stacks {

    constructor(numStacks, capacity) {
        this.topOfStack = [];
        this.stackData = [];
        this.nextIndex = [];
        this.nextAvailable = 0;

        for (let i = 0; i < numStacks; i++) {
            this.topOfStack[i] = -1;
        }

        for (let i = 0; i < capacity; i++) {
            this.stackData[i] = 0;
            this.nextIndex[i] = i + 1;
        }
        this.nextIndex[this.nextIndex.length - 1] = -1;
    }

    push(stack, value) {
        if (stack < 0 || stack >= this.topOfStack.length) {
            throw new Error();
        }

        if (this.nextAvailable < 0) {
            console.log('The stack is full!');
            return;
        }

        let currentIndex = this.nextAvailable;
        this.nextAvailable = this.nextIndex[currentIndex];
        this.stackData[currentIndex] = value;
        this.nextIndex[currentIndex] = this.topOfStack[stack];
        this.topOfStack[stack] = currentIndex;

        console.log(this.stackData);
    }

    pop(stack) {
        if (stack < 0 || stack >= this.topOfStack.length || this.topOfStack[stack] < 0) {
            throw new RangeError();
        }

        let currentIndex = this.topOfStack[stack];
        let value = this.stackData[currentIndex];
        this.topOfStack[stack] = this.nextIndex[currentIndex];
        this.nextIndex[currentIndex] = this.nextAvailable[currentIndex];
        this.nextAvailable = currentIndex;

        this.stackData[currentIndex] = null;
        console.log(this.stackData);

        return value;
    }

}

const stacks = new Stacks(3, 5);
stacks.push(0, 77);
stacks.push(2, 99);
stacks.push(1, 11);
stacks.push(1, 12);
stacks.push(1, 13);
stacks.push(1, 14);

stacks.pop(2);
stacks.pop(0);
stacks.pop(1);

stacks.push(0, 66);
