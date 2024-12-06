# Incorrect NaN Handling in JavaScript Addition Function

This repository demonstrates a common error in JavaScript: the incorrect handling of NaN (Not a Number) values in an addition function.

## Bug Description
The `foo` function attempts to add two numbers.  It correctly handles null values by returning null. However, it fails to correctly handle NaN values.  The function propagates NaN without explicit handling, leading to unexpected results.

## Solution
The improved version of `foo` explicitly checks for NaN using `isNaN()` and handles it appropriately, returning NaN instead of null or attempting to perform addition.