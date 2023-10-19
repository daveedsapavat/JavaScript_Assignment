function sortArrayDescending(arr) {
    arr.sort(function(a, b) {
      return b - a;
    });
  }
  
  // Example usage:
  const numbers = [3, 6, 1, 7, 8, 5];
  
  sortArrayDescending(numbers);
  console.log("sorted array : "+ '' + numbers); 

  // input : [3, 6, 1, 7, 8, 5]
  // Output will be [8, 7, 6, 5, 3, 1]