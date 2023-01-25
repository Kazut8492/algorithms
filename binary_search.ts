// type tsc `binary_search.ts` to compile and `node binary_search.js` to run

const list = [1,3,5,11,12,13,17,22,25,28]
const key = 5

const binary_search = (
  list:number[],
  key:number,
  imin:number,
  imax:number,
) => {
  if (imax < imin) {
    return -1
  } else {
    const imid = Math.trunc(imin + (imax - imin) /2)
    if (key < list[imid]) {
      return binary_search(list, key, imin, imid-1)
    } else if (key > list[imid]) {
      return binary_search(list, key, imid+1, imax)
    } else {
      return imid
    }
  }
}



console.log(binary_search(list, key, 0, list.length-1))