class Sorter {
  constructor() {
      this.arr = [];
      this.comparator = this.ComparatorDirect
  }

  add(element) {
      this.arr.push(element);
  }

  at(index) {
      return this.arr[index];
  }

  get length() {
      return this.arr.length;
  }

  toArray() {
      return this.arr;
  }

  sort(indices) {
      if (indices.length > 1) {
          var map = [];
          for (var i=0; i<indices.length; i++) {
              map.push(this.arr[indices[i]]);
          }

          map.sort(this.comparator);
          indices.sort(this.ComparatorDirect);

          for (var val in map) {
              this.arr.splice(indices[val], 1, map[val]);
          }
      }
  }

  setComparator(compareFunction) {
      this.comparator  = compareFunction;
  }

  ComparatorDirect(a,b){return a - b};
}

module.exports = Sorter;