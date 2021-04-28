function findRotationCount(arr) {
    if (arr[arr.length-1] < arr[arr.length-2]) {return arr.length-1}
    if (arr[0] < arr[arr.length-1]) {return 0}
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal < arr[middleIdx-1]) {
          return middleIdx
      } else if (middleVal > arr[0]) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    }
    
    // left and right pointers crossed, val isn't in arr
    return -1;
}

module.exports = findRotationCount