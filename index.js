const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, alert) {
      let newArray = (array instanceof Array) ? array.slice() : Object.values(array);

      for (let i = 0; i < newArray.length; i++) {
        alert(newArray[i]);
      };
      return array;
    },

    map: function(array, iteratee) {
      if (!(array instanceof Array)) {
        array = Object.values(array)
      }

      const newArray = []

      for (let i = 0; i < array.length; i++) {
        newArray.push(iteratee(array[i]))
      }

      return newArray
    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0)

      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      let collectionLength = collection.length

      for (let i = 0; i < collectionLength; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      let newArray = []

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArray.push(collection[i])
        }
      }
      return newArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(e => !badBad.has(e))
    },

    sortBy: function(collection, callback) {
      const newArray = [...collection]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection) {
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
        }
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, interatee) {
      const sorted = [collection[0]]

      for (let i = 1; i < collection.length; i++) {
        if (sorted[i-1] !== collection[1]) {
          sorted.push(collection[i])
        }
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()

        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []

      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []

      for (let key in obj) {
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      const functionNames = [] 

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    }
  }
})()

fi.libraryMethod()
