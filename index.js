const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      const newArray = []
      for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      if (acc) {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i])
        }
        return acc
      } else {
        acc = collection[0]
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc,collection[i])
        }
       }
      return acc
    },

    find: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          return newCollection[i]
        }
      }
      return undefined  
    },

    filter: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      const newArray = []
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          newArray.push(newCollection[i])  
        }
      }
      return newArray
    },    

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, num) {
      return num ? array.slice(0, num) : array[0]
    },

    last: function(array, num) {
      return num ? array.slice(array.length - num, array.length) : array[array.length - 1]
    },

    compact: function(array) {
      const falsey = [false, null, 0, "", undefined, NaN]
      return array.filter(value => !falsey.includes(value))
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(arr, shallow, newArr = []) {
      if(!Array.isArray(arr)) {
        return newArr.push(arr)
      }
      if (shallow) {
        for (let element of arr) {
          if (Array.isArray(element)) {
            for (let value of element) {
              newArr.push(value)
            }
          } else {
            newArr.push(element)
          }
        }
      } else {
        for (let element of arr) {
          this.flatten(element, false, newArr)
        }
      }
      return newArr 
      
    },
  

    uniq: function(collection, isSorted = false, callback = false) {
      if (!callback) {
        return [...new Set(collection)]
      } else {
        let transformedArr = []
        let uniqArr = []
        for (let e of collection) {
          let newE = callback(e)
          if (!transformedArr.includes(newE)) {
            transformedArr.push(callback(newE))
            uniqArr.push(e)
          }
        }
        return uniqArr
      }
    },

    keys: function(object) {
      const keys = []
      for (const key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      const values = []
      for (const key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      const functions = []
      for (const key in object) {
        if (typeof object[key] === "function") {
          functions.push(key)
        }
      }
      return functions.sort()
    },




  }
})()

fi.libraryMethod()
