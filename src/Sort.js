class InsertionSort {
  constructor(array) {
    this.array = array;
    this.steps = [];
  }
  sort() {
    for (let i = 1; i <= this.array.length - 1; i++) {
      let j = i;
      this.steps.push(this.array);
      while (j > 0 && this.array[j - 1] > this.array[j]) {
        const left = this.array[j - 1];
        const right = this.array[j];

        this.array[j - 1] = right;
        this.array[j] = left;
        j -= 1;
      }
    }

    return this.array;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = InsertionSort;
