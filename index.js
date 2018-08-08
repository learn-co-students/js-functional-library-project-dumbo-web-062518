fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, func) {
      let values;
      if (Array.isArray(arr)){
        values = [...arr]
      } else {
        values = Object.values(arr)
      }
      // debugger;
      for (var i = 0; i < values.length; i++){
        func(values[i])
      }
      return arr
    },

    map: function(coll, cb) {
      let finalArr;
      if (Array.isArray(coll)){
        finalArr = [...coll]
      } else {
        finalArr = [...Object.values(coll)]
      }
      for (var i = 0; i < finalArr.length; i++){
        finalArr[i] = cb(finalArr[i])
      }
      return finalArr
    },

    reduce: function(arr, cb, start = 0) {
      let finalVal = start
      for (let i = 0; i < arr.length; i++){
        finalVal = cb(finalVal, arr[i])
      }
      return finalVal
    },
    
    find: function(arr, cb) {
      const values = Array.isArray(arr) ? arr : Object.values(arr)
      // debugger;
      for (var i = 0; i < values.length; i++){
        // debugger;
        if (cb(arr[i])){
          return arr[i];
        }
      }
    },

    filter: function(collection, cb){
      const truths = []
      for (var i = 0; i < collection.length; i++){
        if (cb(collection[i])){
          truths.push(collection[i])
        }
      }
      return truths
    },

    size: function(coll){
      const collection = Array.isArray(coll) ? coll : Object.values(coll)
      let count = 0
      for (var i = 0; i < collection.length; i++){
        if (collection[i] !== undefined){
          count++
        }
      }
      return count
    },

    first: function(arr, n = 1){
      if (n === 1){
        return arr[0]
      }
      return arr.slice(0, n)
    },

    last: function(arr, n){
      if (!n){
        return arr[arr.length - 1]
      } else {
        return arr.slice(0 - n)
      }
    },

    compact: function(arr){
      const values = []
      for (var i = 0; i < arr.length; i++){
        if (arr[i]){
          values.push(arr[i])
        }
      }
      return values
    },

    keys: function(obj){
      const keys = []
      for (var k in obj){
        keys.push(k)
      }
      return keys
    },

    values: function(obj){
      const vals = []
      for (var k in obj){
        vals.push(obj[k])
      }
      return vals
    },

    flatten: function(arr, option){
      const finalArr = []
      if (option){
        const finalArr = []
        for (var i = 0; i < arr.length; i++){
          if (Array.isArray(arr[i])){
            finalArr.push(...arr[i])
          } else {
            finalArr.push(arr[i])
          }
        }
        return finalArr
      } else {
        // debugger
        for (var i = 0; i < arr.length; i++){
          if (!Array.isArray(arr[i])){
            finalArr.push(arr[i])
          } else {
            const results = this.flatten(arr[i])
            finalArr.push(...results)
          }
        }
        return finalArr
      }
    },

    uniq: function(collection, bool, iterate){
      // with iterate, returns only the values that produce unique outcomes
      if (!iterate){
        return [...new Set(collection)]
      }
      const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iterate(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      },

      sortBy: function(coll, cb){
        const results = []
        let sorted;
        let final;
        
        for (var i = 0; i < coll.length; i++){
          results.push({item: coll[i], result: cb(coll[i])})
        }
        // const mappedResults = []
        // for (var k in coll){
        //   mappedResults.push(coll[k])
        // }
        // debugger;
        // if (typeof cb(coll[0]) === 'string'){
        //   return results.sort((a, b) => a.item.localCompare(b.item)).map(x => x.item)
        // } else {
          sorted = results.sort((a, b) => a.result - b.result)
          final = sorted.map(x => x.item)
          return final
        // }
      },

      functions: function(obj){
        const names = []
        for (var k in obj){
          if (typeof obj[k] === 'function'){
            names.push(k)
          }
        }
        return names.sort()
      }
  }
})()

fi.libraryMethod()
// fi.each([1,2,3,4], alert)
