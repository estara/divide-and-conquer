function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal > val) {
        rightIdx = middleIdx - 1;
      } else if (middleVal < val && arr[middleIdx+1] <= val) {
        leftIdx = middleIdx + 1;
      } else {
        // we found our value!
        return middleVal;
      }
    }
    
    // left and right pointers crossed, val isn't in arr
    return -1;
}

module.exports = findFloor