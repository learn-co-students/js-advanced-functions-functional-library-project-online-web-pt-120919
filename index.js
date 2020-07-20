const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for ( const i in collection ){
        callback(collection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      let newCollection = []

      for (let i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			for (let i = 0; i < collection.length; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
    },

    find: function(collection, predicate){

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]))
          return collection[i]
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let newArray = []

      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i]))
         newArray.push(collection[i])
      }
      return newArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, n = false) {
      if (n) {
        return array.slice(0, n)
      } else {
       return array[0]
     }
    },

    last: function(array, n = false) {
      if (n) {
        return array.slice(array.length - n)
      } else {
        return array[array.length -1]
      }
    },

    compact: function(array){
      let falsy = [false, NaN, undefined, "", 0, null]
      return array.filter(e => !falsy.includes(e))
    },

    sortBy: function(array, callback) {
      let newArray = array.slice()
      newArray.sort(function(a, b){
        return callback(a) - callback(b)
      })
      return newArray
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection) {
      let sorted = [collection[0]]

      for(let i = 1; i < collection.length; i++) {
        if (sorted[sorted.length - 1] !== collection[i]) {
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

    keys: function(object) {
      return Object.getOwnPropertyNames(object)
    },

    values: function(object) {
      let values = Object.keys(object).map(function (key) {
        return object[key]
      })
      return values
    },

    functions: function(object) {
      let functionNames = []

      for(let key in object) {
        if (typeof object[key] === "function") {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()
