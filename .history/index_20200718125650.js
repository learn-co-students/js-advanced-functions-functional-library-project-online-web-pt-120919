const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const num in collection) {
        callback(collection[num])
      }
      return collection
    },

    map: function(coll, callbackFunc) {
      let newArr = []
      for (const [key, value] of Object.entries(coll)) {
        newArr.push(callbackFunc(value))
      }
      return newArr
    },

    reduce: function(numCollection, fn, acc = 0) {
      let num = 0
      numCollection.forEach(num => num = fn(accum, num, numCollection), acc)
      console.log(num)
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
