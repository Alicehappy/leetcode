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
  return <div></div>;
}

export default SlideWindowComponent;
