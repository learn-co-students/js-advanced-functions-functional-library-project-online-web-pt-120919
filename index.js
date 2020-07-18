const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const i in collection){
        callback(collection[i])
      }
      return collection
    },

    map: function(collection, element) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      
      const newCollection = []

      for (let i = 0; i < collection.length; i++)
        newCollection.push(element(collection[i]))

        return newCollection
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
      for (const i in collection) {
        if (predicate(collection[i]) === true) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      const newArray = []
      for (const i in collection) {
        if (predicate(collection[i]) === true) {
           newArray.push(collection[i])
        }
      }
      return newArray
    },

    size: function(collection){
      return Object.keys(collection).length
    },

    first: function(array, n){
      if (n === undefined){
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      if (n === undefined){
        return array[array.length - 1]
      }else {
        return array.slice(array.length - n)
      }
    },

    compact: function(array){
      const newArr = []
      for(const i in array){
        if (array[i]){
          newArr.push(array[i])
        }
      }
      return newArr
    },

    sortBy: function(array, callback){
      const newArr = [...array]
      return newArr.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function flatten(array, shallow){
      let newArr = []
      for(var i in array){
        if (shallow === true){
          if(Array.isArray(array[i])) {
              newArr = newArr.concat(array[i])
          } else {
              newArr.push(array[i])
          }
        }
        else {
          if(Array.isArray(array[i])) {
              newArr = newArr.concat(flatten(array[i]))
          } else {
              newArr.push(array[i])
          }
        }
      }
      return newArr
      
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
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
          const modVal = iteratee(val)
          if (!modifiedVals.has(modVal)) {
            modifiedVals.add(modVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    

    keys: function(object) {
      let newArr = []
      for(let key in object){
        newArr.push(key)
      }
      return newArr
    },

    values: function(object){
      let newArr = []
      for(let value in object){
        newArr.push(object[value])
      }
      return newArr
    },
    functions: function(fi) {
      let newArr = []
      for(let i in fi) {
        if(typeof fi[i] === "function"){
        newArr.push(i)}
      }
      newArr.sort()
      return newArr
    },


  }
})()

fi.libraryMethod()
