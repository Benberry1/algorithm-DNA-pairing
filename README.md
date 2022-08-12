# Algorithm - DNA Pairing

The aim of this algorithm challenge was to create a function that takes in a string parameter. This reprsents a broken DNA strand. A DNA strand base pair is made up of two characters, either 'A' 'T', 'T' 'A', 'C' 'G', or 'G' 'C'.

The provided string represents a number of broken pairs e.g. ('AGT')

The function must return a 2D array with each letter being replaced by its correct base pair. E.g., using the example above:

```
    [
        ['A', 'T'],
        ['G', 'C'],
        ['T', 'A']
    ]
```

I have created a test file that outlines some test cases for this challenge. I have also included a couple of negative pathway tests for invalid parameter or an undefined parameter.

## Documentation

Below is a list of methods I used with links to the relevant MDN page.

- [If statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Switch statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) (Used in alternative option)
- [For...of loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) (negative pathway handling)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) (negative pathway handling)

## Acknowledgments

This algorithm challenge was provided by [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures). Although they do provide some happy path test cases, I wanted to keep practising using Jest. This also helps break down the challenge into the required acceptence criteria to achieve the challenge.

## Dev Dependencies

- Jest was used for creating test cases

## Installation

To see the code and tests in action follow the below terminal commands:

Ensure that you have [Git](https://git-scm.com/) installed. If not you can just download the files to your computer.

```
git clone (name of repo url/ssh here)
```

```
cd (project-name here)
```

```
npm install
```

```
npm test
```
