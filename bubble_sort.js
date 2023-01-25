let list = [1,6,2,8,3,5,9,11,15,18,22,25];

const bubble_sort = (list) => {
  for (let x = 0; x < list.length-1; x++) {
    for (let y = x; y < list.length-1; y++) {
        if (list[x] > list[y]){
            const temp = list[y]
            list[y] = list[x]
            list[x] = temp
        }
    }
  }
  return list
}

console.log(bubble_sort(list))