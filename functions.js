// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
function sortDesc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
function nestedEvenSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

module.exports = { sortDesc, maxSubarraySum, nestedEvenSum };
