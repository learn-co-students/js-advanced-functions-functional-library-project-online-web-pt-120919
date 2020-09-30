const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, callback) {
      for (const num in collection) {
        callback(collection[num]);
      }
      return collection;
    },

    map: function(coll, callbackFunc) {
      let newArr = [];
      for (const [key, value] of Object.entries(coll)) {
        newArr.push(callbackFunc(value));
      }
      return newArr;
    },

    reduce: function(numCollection, callbackFn, acc) {
      let count = !!acc ? acc : numCollection[0];
      let newCollection =
        count === acc ? numCollection : numCollection.slice(1);
      newCollection.forEach(number => (count = callbackFn(count, number)));
      return count;
    },
    find: function(collection, predicate) {
      return collection.find(predicate);
    },
    filter: function(collection, predicate) {
      return collection.filter(predicate);
    },
    size: function(collection) {
      return Object.keys(collection).length;
    },
    first: function(collection, n = 0) {
      let newArr = [collection[0], ...collection.slice(1, n)];
      return n === 0 ? collection[0] : newArr;
    },

    last: function(collection, n = 0) {
      let indexed = collection.length - n;
      return n > 0
        ? collection.slice(indexed)
        : collection[collection.length - 1];
    },
    compact: function(collection) {
      return collection.filter(Boolean);
    },
    sortBy: function(collection, callbackFn) {
      let newCollection = Object.assign([], collection);
      return newCollection.sort((a, b) => callbackFn(a) - callbackFn(b));
    },
    flatten: function(collection, secondArg) {
      return secondArg
        ? collection.flat(1)
        : collection.flat(collection.length);
    },
    uniqSorted: function(collection, iteratee) {
      const newArr = [collection[0]];
      for (let i = 1; i < collection.length; i++) {
        if (newArr[i - 1] !== collection[i]) newArr.push(collection[i]);
      }
      return sorted;
    },

    uniq: function(collection, sorted = false, iteratee = false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee);
      } else if (!iteratee) {
        return Array.from(new Set(collection));
      } else {
        const newVals = new Set();
        const uVals = new Set();
        for (let val of collection) {
          const moddedVal = iteratee(val);
          if (!newVals.has(moddedVal)) {
            newVals.add(moddedVal);
            uVals.add(val);
          }
        }
        return Array.from(uVals);
      }
    },
    keys: function(object) {
      return Object.keys(object);
    },
    values: function(object) {
      return Object.values(object);
    },
    functions: function(obj) {
      let newArr = [];
      Object.entries(obj).forEach(k => {
        if (typeof k[1] === "function") {
          newArr.push(k[0]);
        }
      });
      return newArr;
    }
  };
})();

fi.libraryMethod();
