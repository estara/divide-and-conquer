function sortedFrequency(arr, val) {
    if (arr[arr.length-1] < val) {return -1};
    if (arr[0] > val) {return -1};
    if (arr[0] === val && arr[arr.length-1] === val) {return arr.length};
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let rIdx;
    let lIdx;
  
    while (leftIdx <= rightIdx) {
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal < val) {
        // middleVal is too small, look at the right half
        leftIdx = middleIdx + 1;
      } else if (middleVal > val) {
        // middleVal is too large, look at the left half
        rightIdx = middleIdx - 1;
      } else {
        // we found our value!
        lIdx = middleIdx;
        break;
      }
    }
    if (lIdx === arr.length - 1) { return 1;};
    val += 1;
    leftIdx = 0;
    rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
    
        if (middleVal < val) {
          // middleVal is too small, look at the right half
          leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
          // middleVal is too large, look at the left half
          rightIdx = middleIdx - 1;
        } else {
          // we found our value!
          rIdx = middleIdx;
          break;
        }
      }
      if (!rIdx) {rIdx = arr.length;}
      if (lIdx === 1) {
          return (rIdx-1) - (lIdx-1);
      }

      return (rIdx) - (lIdx-1);
}

module.exports = sortedFrequency


