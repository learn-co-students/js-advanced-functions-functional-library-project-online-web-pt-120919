const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let idx = 0; idx < newCollection.length; idx++) {
        iteratee(newCollection[idx])
      }
      return collection
    },


    map: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let returnedCollection = []
      for (let idx = 0; idx < newCollection.length; idx++){
        returnedCollection.push(iteratee(newCollection[idx]))
      }
      return returnedCollection  
    },

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
		},

    find: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let idx = 0; idx < newCollection.length; idx++) {
        if (predicate(newCollection[idx])) return newCollection[idx]
      }
      return undefined 
    },

    filter: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let returnedCollection = []
      for (let idx = 0; idx < newCollection.length; idx++){
        if (predicate(newCollection[idx])) returnedCollection.push(newCollection[idx])
      }
      return returnedCollection  
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
      // const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      // let size = 0
      // for (let idx = 0; idx < newCollection.length; idx++){
      //   size += 1
      // }
      // return size 
    },

    first: function(collection, n = false) {
      if (n <= collection.length && n) { 
        return collection.slice(0, n) 
      } else {
        return collection[0]
      }
    },

    last: function(collection, n = false) {
      if (n <= collection.length && n) { 
        return collection.slice(collection.length - n) 
      } else {
        return collection[collection.length - 1]
      }
    },

    compact: function(collection) {
      const falsy = [false, null, 0, "", undefined, NaN]
      return collection.filter(e => !falsy.includes(e))
    },

    sortBy: function(collection, callback) {
      let newArr = collection.slice()
      return newArr.sort(function(a, b) {
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

    keys: function(obj) {
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    }
  }
})()

fi.libraryMethod()
