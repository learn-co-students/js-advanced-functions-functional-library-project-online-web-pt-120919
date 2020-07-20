const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },


    each: function(theCollection, alert) {
      let newCollection = (theCollection instanceof Array) ? theCollection : Object.values(theCollection)

      for (let i = 0; i < newCollection.length; i++){
        alert(newCollection[i])
      }
    
      return theCollection
    },

    map: function(theCollection, callbackAction) {
      let newCollection = (theCollection instanceof Array) ? theCollection : Object.values(theCollection)

      let newArray = []

      for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callbackAction(newCollection[i]))
      }

      return newArray
    },

    reduce: function(theCollection, callbackAction, acc) {
      let theNewCollection = theCollection
      if (!acc){
        acc = theCollection[0]
        theNewCollection = theCollection.slice(1)
      }
      for (let i = 0; i < theNewCollection.length; i++){
        acc = callbackAction(acc, theNewCollection[i], theNewCollection)

      }
      return acc
    },

    find: function(theCollection, predicate){
      let valueFound = 0
      for (let i = 0; i < theCollection.length; i++){
        if (predicate(theCollection[i])){
          valueFound = theCollection[i]
          break
        }
        else {
          valueFound = undefined 
        }
      }
      return valueFound
    },

    filter: function(theCollection, predicate){
      let arrayOfValues = []
      for (let i = 0; i < theCollection.length; i++) {
        if (predicate(theCollection[i])) {
          arrayOfValues.push(theCollection[i])
        }
      }
      return arrayOfValues
    },

    size: function(theCollection){
      let theNewCollection = (theCollection instanceof Array) ? theCollection : Object.values(theCollection)
      
      return theNewCollection.length

    },

    first: function(array, nElements = 1){
      let newArray = (nElements > 1) ? array.slice(0, nElements) : array[0]
      return newArray

    },

    last: function(array, nElements = 1) {
      const arraySize = array.length
      let newArray = (nElements > 1) ? array.slice((arraySize - nElements), arraySize) : array[arraySize - 1]

      return newArray
    },

    compact: function(array) {
      let newArray = []

      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray

    },


    sortBy: function (array, callbackAction) {

      let newArray = [...array]
      
      return newArray.sort((a, b) => callbackAction(a) - callbackAction(b))

    },


    flatten: function (array, bool, newArray=[]) {
      if (!Array.isArray(array)) return newArray.push(array)
      
      if (bool) {
        for (let elem of array) {
          if (Array.isArray(elem)) {
            for (let elem2 of elem) {
              newArray.push(elem2)
            }
          } else {
            newArray.push(elem)
          } 
        }
 
        }
      else {
        for (let elem2 of array) {
          this.flatten(elem2, false, newArray)
      }
    }
    return newArray
    },


    uniq: function (array, sorted = false, callback = false) {
      if (sorted) {
        let newArray = [array[0]]
        for (let i = 1; i < array.length; i++) {
          if (newArray[i - 1] !== array[i]) {
            newArray.push(array[i])
          }
        }
        return newArray
      }

      else if (!callback) {

        return Array.from(new Set(array))
      }

      else {
        let modArray = []
        let newArray = []
        for (let elem of array) {
          let elemVal = callback(elem)
          if (!modArray.includes(elemVal) )
          { 
            modArray.push(elemVal)
            newArray.push(elem)
          }
        }
        return newArray
      }
    },
    
    keys: function(obj) {
      return Object.keys(obj)
    },

    values: function(obj) {
      return Object.values(obj)
    },
    
    functions: function(obj) {
      let functions = []
      let objKeys = Object.keys(obj)
      console.log(objKeys)
      for (let key of objKeys) {
        if (typeof obj[key] === "function") {
          functions.push(key)
        }
      }
      return functions.sort()

    },


  }
})()

fi.libraryMethod()
