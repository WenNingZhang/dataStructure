package main

import (
	"fmt"
	"strings"
)

type MapSum struct {
	 _map map[string]int	// define map
}


/** Initialize your data structure here. */
func Constructor() MapSum {
	return MapSum{
		_map:make(map[string]int),	// create map object
	}
}


func (this *MapSum) Insert(key string, val int)  {
	this._map[key] = val
}


func (this *MapSum) Sum(prefix string) int {
	sum := 0
	for k, v := range this._map {
		if (strings.HasPrefix(k, prefix)) {
			sum += v
		}
	}
	return sum
}

/**
 * Your MapSum object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(key,val);
 * param_2 := obj.Sum(prefix);
 */

func main() {
	obj := Constructor();
	obj.Insert("apple",2);
	param_2 := obj.Sum("app");
	fmt.Print(param_2)
}
