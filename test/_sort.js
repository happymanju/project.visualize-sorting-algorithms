const InsertionSort = require("../src/Sort");
const { expect } = require("chai");

describe("InsertionSort", () => {
  it("should be instantiate an InsertionSort object", () => {
    let targetArray = [2, 8, 3, 7, 0, 9, 1, 4, 6];
    const inSort = new InsertionSort(targetArray);
    expect(inSort instanceof InsertionSort).to.equal(true);
  });
  it("should have a sort method", () => {
    let targetArray = [2, 8, 3, 7, 0, 9, 1, 4, 6];
    const inSort = new InsertionSort(targetArray);
    expect(inSort.sort).to.be.a("function");
  });

  it("should have a returnValue method", () => {
    let targetArray = [2, 8, 3, 7, 0, 9, 1, 4, 6];
    const inSort = new InsertionSort(targetArray);
    expect(inSort.sort).to.be.a("function");
  });

  it("should save sorting steps as separate variables on the object", () => {
    let targetArray = [2, 8, 3, 7, 0, 9, 1, 4, 6];

    const inSort = new InsertionSort(targetArray);
    inSort.sort();

    expect(typeof inSort.steps[0]).to.equal("object");
  });
});
