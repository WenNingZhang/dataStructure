package main

import (
	"fmt"
	"strconv"
)

func findNthDigit(n int) int {
	len, count, start := 1, 9, 1

	for n > len * count {
		n -= len * count
		len++
		count *= 10
		start *= 10
	}

	number := start + (n-1)/len

	str_number := strconv.Itoa(number)

	nthDigit := string(str_number[(n-1) % len])

	value, _ := strconv.Atoi(nthDigit)
	return value
}

func main() {
	a := findNthDigit(100)
	fmt.Println(a)
}
