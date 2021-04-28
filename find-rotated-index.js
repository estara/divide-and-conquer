function findRotatedIndex(arr, val) {
    if (arr[0] === val) {return 0};
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let firstLoop = true;
  
    while (leftIdx <= rightIdx) {
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
      
      if (firstLoop) {
          firstLoop = false;
        if (middleVal === val) {return middleIdx}
        if (middleVal > val && arr[middleIdx-1] !== val) {
            // middleVal is too large, look at the right half
            leftIdx = middleIdx + 1;
        } else if (middleVal < val) {
            // middleVal is too small, look at the left half
            rightIdx = middleIdx - 1;
        } 
    } else {
        if (middleVal === val) {return middleIdx}
        if (middleVal < val) {
            // middleVal is too large, look at the right half
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            // middleVal is too small, look at the left half
            rightIdx = middleIdx - 1;
        } 
    }

    }
    
    // left and right pointers crossed, val isn't in arr
    return -1;
}

module.exports = findRotatedIndex