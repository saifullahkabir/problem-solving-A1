type UniqueValue = (string | number | undefined)[];

const getUniqueValues = (array1: UniqueValue, array2: UniqueValue): UniqueValue =>{
  const newArr: UniqueValue = [];

  const isExist = (value: string | number | undefined): boolean => {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < array1.length; i++) {
    if (!isExist(array1[i])) {
      newArr[newArr.length] = array1[i];
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!isExist(array2[i])) {
      newArr[newArr.length] = array2[i];
    }
  }

  return newArr;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));



// if using any build in func

// const dupArr = [...array1, ...array2];
//   const newArr: UniqueValue = [];
//     dupArr.forEach(e => {
//         if(!newArr.includes(e)){
//             newArr.push(e)
//         }
//     })
//     return newArr;
