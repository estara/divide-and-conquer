function countZeroes(info) {
    if (info[0] === 0) {return info.length};
    let leftIdx = 0;
    let rightIdx = info.length - 1;
    let idx;
  
    while (leftIdx <= rightIdx) {
        
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = info[middleIdx];
      
  
      if (middleVal === 0 && info[middleIdx-1] > 0) {
          idx = middleIdx;
          break;
      } else if (middleVal > 0) {
        // middleVal is too big, look at the right half
        leftIdx = middleIdx + 1;
        
      } else if (middleVal === 0) {
          
        // middleVal is not the first 0, look at the left half
        rightIdx = middleIdx - 1;
      }
    }
    

    // left and right pointers crossed, val isn't in arr
    if (idx) {return info.length - idx;}
    return 0;
}

module.exports = countZeroes