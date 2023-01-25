let list = [1,18,6,2,8,25,3,5,22,9,11,15];

const bubble_sort = (list) => {
  for (let x = 0; x <= list.length-2; x++) {
    for (let y = x+1; y <= list.length-1; y++) {
        if (list[x] > list[y]){
            // const temp = list[y]
            // list[y] = list[x]
            // list[x] = temp
            [list[x], list[y]] = [list[y], list[x]]
        }
    }
  }
  return list
}

console.log(bubble_sort(list))