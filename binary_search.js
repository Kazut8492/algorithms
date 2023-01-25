var list = [1, 3, 5, 11, 12, 13, 17, 22, 25, 28];
var key = 5;
var binary_search = function (list, key, imin, imax) {
    if (imax < imin) {
        return false;
    }
    else {
        var imid = Math.trunc(imin + (imax - imin) / 2);
        if (key < list[imid]) {
            return binary_search(list, key, imin, imid - 1);
        }
        else if (key > list[imid]) {
            return binary_search(list, key, imid + 1, imax);
        }
        else {
            return imid;
        }
    }
};
console.log(binary_search(list, key, 0, list.length - 1));
