import "./SlideWindowComponent.scss";

// Nov 14, 2024, Sliding Window: Maximum Number of Vowels in a Substring of Given Length (Medium)

function SlideWindowComponent() {
  const maxVowels = function (s, k) {
    const vowels = ["a", "e", "i", "o", "u"];

    let maxVowelsCount = 0;

    let currentVowelsCount = 0;

    for (let i = 0; i < k; i++) {
      if (vowels.includes(s[i])) {
        currentVowelsCount++;
      }
    }

    maxVowelsCount = currentVowelsCount;

    for (let i = k; i < s.length; i++) {
      if (vowels.includes(s[i - k])) currentVowelsCount--;
      if (vowels.includes(s[i])) currentVowelsCount++;

      maxVowelsCount = Math.max(maxVowelsCount, currentVowelsCount);
    }

    return maxVowelsCount;
  };

  console.log(maxVowels("adisegs", 2));

  // sliding window variance: condition
  var longestOnes = function (nums, k) {
    let max = 0,
      left = 0,
      counter = 0;

    for (let right = 0; right < nums.length; right++) {
      if (nums[right] === 0) {
        counter++;
      }

      while (counter > k) {
        if (nums[left] == 0) {
          counter = counter - 1;
        }
        left++;
      }

      max = Math.max(max, right - left + 1);
    }

    return max;
  };

  console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

  return <div></div>;
}

export default SlideWindowComponent;
