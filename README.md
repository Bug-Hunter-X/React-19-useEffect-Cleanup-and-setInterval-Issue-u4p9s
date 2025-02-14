# React 19 useEffect Cleanup and setInterval Issue
This repository demonstrates a common issue encountered when using the `useEffect` hook with `setInterval` in React 19 and its solution.

## Problem
The example code in `bug.js` demonstrates a scenario where `setInterval` is used within a `useEffect` hook without proper cleanup.  This leads to multiple intervals running concurrently, potentially causing unexpected behavior and memory leaks. 

## Solution
The solution in `bugSolution.js` showcases the correct way to handle this by introducing a cleanup function that calls `clearInterval` to stop the interval when the component unmounts or when the dependencies change.