const $password = document.querySelector(".password");
const $rangeInput = document.querySelector(".range-input");
const $rangeNumber = document.querySelector(".range-number");
const $findButton = document.querySelector(".find-button");
const $message = document.querySelector(".message");

$password.addEventListener("input", (e) => {
  const input = e.target;

  if (input.value.length >= 19) {
    input.value = input.value.substring(0, input.value.length - 1);
  }

  $rangeInput.value = input.value.length;
  $rangeNumber.textContent = input.value.length;
});

$rangeInput.addEventListener("input", (e) => {
  const input = e.target;

  $rangeNumber.textContent = input.value;
});

function generatePermutationsInGroups(arr, groupSize) {
  const result = [];

  function swap(a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function generateHelper(start) {
    if (start === groupSize) {
      result.push(arr.slice(0, groupSize).join(""));
      return;
    }

    for (let i = start; i < arr.length; i++) {
      swap(start, i);
      generateHelper(start + 1);
      swap(start, i);
    }
  }

  generateHelper(0);
  return result;
}

$findButton.addEventListener("click", () => {
  const password = String($password.value);
  const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const groupSize = $rangeInput.value;

  if (groupSize > 10) {
    let firstTenPermutations = generatePermutationsInGroups(inputArray, 10);
    let remainingPermutations = generatePermutationsInGroups(
      inputArray,
      groupSize - 10
    );

    for (let i = 0; i < firstTenPermutations.length; i++) {
      for (let j = 0; j < remainingPermutations.length; j++) {
        let permutation = firstTenPermutations[i] + remainingPermutations[j];
        if (permutation === password) {
          $message.textContent = `
                    Your password was found in position ${i} ${j}: 
                    Your password is ${permutation}`;
          return;
        }
      }
    }
  }

  const permutations = generatePermutationsInGroups(inputArray, +groupSize);

  for (let i = 0; i < permutations.length; i++) {
    if (permutations[i] === password) {
      $message.textContent = `
        Your password was found in position ${i}:
        your password is ${permutations[i]}
      `;
      return;
    }
  }

  $message.textContent = `
    Your password was not found
    Your password must be a number password and each digit must be different
  `;
});
