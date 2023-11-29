package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("Server started at http://localhost:8080/")

	http.Handle("/", http.FileServer(http.Dir("public")))

	log.Fatal(http.ListenAndServe(":8080", nil))

}
