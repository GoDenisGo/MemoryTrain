package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"
)

func main() {
	fmt.Println("Server started at http://localhost:8080/")

	http.Handle("/", http.FileServer(http.Dir("public")))
	http.HandleFunc("/shadow/", serveShadow)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func serveShadow(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)
	if strings.Contains(r.URL.Path, "README.md") {
		http.NotFound(w, r)
		return
	}
	w.Header().Set("Content-Type", "application/javascript")
	http.ServeFile(w, r, "./public"+r.URL.Path)
}
