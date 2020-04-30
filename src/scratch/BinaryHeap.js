class BinaryHeap {
  constructor() {
    this.values = [];
  }

  // Assumption is that value does not already exist in the heap
  insert(value) {
    this.values.push(value);
    let ix = this.values.length - 1;
    //eslint-disable-next-line no-constant-condition
    while (ix > 0) {
      let pix = Math.floor((ix - 1) / 2);

      if (this.values[pix] > this.values[ix]) return;

      this._swop(ix, pix);
      ix = pix;
    }
  }

  _swop(ix1, ix2) {
    const swop = this.values[ix1];
    this.values[ix1] = this.values[ix2];
    this.values[ix2] = swop;
  }

  removeMax() {
    if (this.values.length === 0) {
      return null;
    }
    const max = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    let ix = 0;
    while (ix < this.values.length) {
      let lcix = 2 * ix + 1;
      let rcix = 2 * ix + 2;
      let cix =
        rcix >= this.values.length || this.values[lcix] > this.values[rcix]
          ? lcix
          : rcix;
      if (this.values[ix] < this.values[cix]) {
        this._swop(ix, cix);
        ix = cix;
      } else {
        break;
      }
    }

    return max;
  }
}

test("BinaryHeap", () => {
  const heap = new BinaryHeap();
  expect(heap.removeMax()).toBeNull();
  heap.insert(1);
  expect(heap.removeMax()).toBe(1);
  expect(heap.values.length).toBe(0);
  heap.insert(5);
  heap.insert(7);
  heap.insert(3);
  heap.insert(8);
  heap.insert(9);
  heap.insert(1);
  expect(heap.values).toEqual([9, 8, 3, 5, 7, 1]);
  expect(heap.removeMax()).toBe(9);
  expect(heap.values).toEqual([8, 7, 3, 5, 1]);
  expect(heap.removeMax()).toBe(8);
  expect(heap.values).toEqual([7, 5, 3, 1]);
});
