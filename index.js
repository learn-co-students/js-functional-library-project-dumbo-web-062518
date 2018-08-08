fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(list, alert) {
      switch (list) {
        case Array.isArray(list):
          list.forEach(element => alert(element))
          break;
        default:
          for (element in list) { alert(list[element]) }
          break;
      }
      return list;
    },

    map: function(list, callback) {
      const newObj = [];
      for (element in list) { newObj.push(callback(list[element])) }
      return newObj;
    },

    reduce: function(list, callback, accumulator=0) {
      let result = accumulator;
      for (let i=0; i<list.length; i++) {
        result += callback(0, list[i], list);
      }
      return result;
    },

    find: function(list, predicate) {
      for (let i=0; i<list.length; i++) {
        if (predicate(list[i])){
          return list[i];
        }
      }
      return undefined;
    },

    filter: function (list, testtrue) {
      const newObj = [];
      for (let i=0; i<list.length; i++) {
        if (testtrue(list[i])){
          newObj.push(list[i]);
        }
      }
      return newObj;
    },

    size: function (array) {
      let counter = 0;
      for (element in array) {
        counter++;
      }
      return counter;
    },

    first: function(list, arg=1) {
      const newObj = [];
      if (arg === 1) { return list[0]; } else {
        for (let i=0; i<arg; i++) {
          newObj.push(list[i]);
        };
        return newObj;
      };
    },

    last: function(list, arg=1) {
      const newObj = [];
      if (arg === 1) { return list[list.length-1]; } else {
        for (let i=(list.length-1); i>((list.length-1)-arg); i--) {
          newObj.unshift(list[i]);
        };
        return newObj;
      };
    },

    compact: function (array) {
      const newObj = [];
      array.forEach(element => {
        if (!!element) {
          newObj.push(element)
        }
      })
      return newObj;
    },

    sortBy: function (list, callback) {
      const newObj = [];
      const sortedArray = []
      for (element in list) { newObj.push([list[element],callback(list[element])]) }
      newObj.sort(function(a, b) {
        return a[1] - b[1];
      });
        for (let i=0; i<newObj.length; i++) {
           sortedArray.push(parseInt(newObj[i], 10)) }
      return sortedArray;
    },

    flatten: function (array, boolean) {
      let flat = [...array];
      let newflat = [];

      function anyArray(array) {
        trueorfalse = false;
        for (let i=0; i<array.length; i++) {
          trueorfalse = Array.isArray(array[i]);
        }
        return trueorfalse;
      }

      function singleLevel(array) {
        let counter = flat.length
        for (let i=0; i<counter; i++) {
          if (Array.isArray(flat[i])) {
            for (let j=0; j<flat[i].length; j++) {
              newflat.push(flat[i][j]);
            }
          }
          else {
            newflat.push(flat[i]);
          }
        }
        flat = []
        flat = [...newflat];
        newflat = []
        return flat;
      }

      if (boolean) {
        singleLevel(array)
      }
      else {
        while (anyArray(flat)) {
          singleLevel(array)
        }
      }
      return flat;
    },

    uniq: function (array, boolean=true, callback) {
      const dictionary = {}
      const uniqarray = []
      if (boolean === false) {
        let callbackresults = []
        for (let i=0; i<array.length; i++) {
          if (callbackresults.indexOf(callback(array[i])) === -1) {
            callbackresults.push(callback(array[i]))
            uniqarray.push(array[i])
          }
        }
        return uniqarray
      }
      let sortedArray = [...array].sort()
      if (typeof sortedArray[0] === 'object') {
        for (let i=0; i<sortedArray.length; i++) {
          for (let j=i+1; j<sortedArray.length; j++) {
            if (sortedArray[i] === sortedArray[j]) {
              sortedArray.splice(j, 1);
            }
          }
        }
        return sortedArray;
      }
      else {
        for (let i=0; i<sortedArray.length; i++) {
          dictionary[sortedArray[i]]="hello"
        }
        for (element in dictionary) { uniqarray.push(parseInt(element)) }
      }

      return uniqarray;
    },

    keys: function (object) {
      const keys = []
      for (let key in object) {
        keys.push(key)
      }
      return keys;
    },

    values: function (object) {
      const values = []
      for (let key in object) {
        values.push(object[key])
      }
      return values;
    },

    functions: function(object) {
      const functionitems = []
      for (let key in object) {
        if (typeof object[key] === "function") {
          functionitems.push(key)
        }
      }
      return functionitems.sort()
    },

    giveMeMore: function() {

    },


  }
})()

fi.libraryMethod()
