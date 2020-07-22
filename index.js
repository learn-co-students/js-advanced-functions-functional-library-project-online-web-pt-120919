const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, alert) {
      const newArray = (arr instanceof Array) ? arr.slice() : Object.values(arr)

      for (let i = 0; i < newArray.length; i++) {
        alert(newArray[i])
      }

      return arr
    },

    map: function(arr, callback) {
      if (!(arr instanceof Array))
        arr = Object.values(arr)

      const newArray = []

      for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i]))
      }

      return newArray
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
      if (!(collection instanceof Array))

      collection = Object.values(collection)

        for (let i = 0; i< collection.length; i++) {
          if (predicate(collection[i])) {return collection[i]}
        }
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

        let newCollection = []

        for (let i = 0; i< collection.length; i++) {
          if (predicate(collection[i])) {
            newCollection.push(collection[i])
          }
        }
        return newCollection
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, num) {
      return (!!num) ? collection.slice(0, num): collection[0]

    },

    last: function(collection, num) {
      return (!!num) ? collection.slice(num * -1) : collection[collection.length-1]

    },

    compact: function(collection) {
      let newCollection = []
      
      for (let i = 0; i < collection.length; i++) {
        if (!!collection[i]) {
          newCollection.push(collection[i])
        }
      }
      return newCollection
    }, 

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, singleLevel) {
      if(!!singleLevel){	     

        const singleLevelAry = [];
        for (const elem of array){
          if (Array.isArray(elem)){
            this.each(elem, nestedElem => singleLevelAry.push(nestedElem))
          }else{
            singleLevelAry.push(elem);
          }
        }
        return singleLevelAry;
      }else{	 
        return this.map(array.toString().split(","), str=>parseInt(str));	 
      }
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
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  
  }
})()

fi.libraryMethod()
