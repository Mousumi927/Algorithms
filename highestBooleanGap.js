//Q: Find the highest boolean gap in an Array.

function findHighestBooleanGap(arr) {
    let currentGap = 0;
    let maxGap = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        currentGap++;
      } else {
        if (currentGap > maxGap) {
          maxGap = currentGap;
        }
        currentGap = 0;
      }
    }
  
    if (currentGap > maxGap) {
      maxGap = currentGap;
    }
  
    return maxGap;
  }
  
  // try here
  const booleanArray = [1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0];
  const highestGap = findHighestBooleanGap(booleanArray);
  console.log('Highest boolean gap:', highestGap);
  