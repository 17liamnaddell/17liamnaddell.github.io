package main

import (
	"fmt"
)

type Person interface {
	Speak() string
}

type Jen struct {
}

type Gia struct {
}

func (j Jen) Speak() string {
	return "Jennifer:HAMLET MATTERS MORE THAN MY SONE!!!!!!!"
}

func (g Gia) Speak() string {
	return "Gia:I HATE ALL FOOD! INCLUDING ALL FOOD!"
}

func main() {
	animals := []Person{Jen{}, Gia{}}
	for _, animal := range animals {
		fmt.Println(animal.Speak())
	}
	ret(Jen{})
	je.Speak()
}

func ret(je) returned {
	return je
}
