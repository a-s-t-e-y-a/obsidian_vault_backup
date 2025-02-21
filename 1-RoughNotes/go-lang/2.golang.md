---
creation_date: 2025-02-21
path: "1-RoughNotes/2025-02-21"
---
# Rough Note - 2025-02-21

## Ideas
# Go Programming Short Notes

## Table of Contents
1. [Short Assignment Operator (`:=`)](#short-assignment-operator-)
2. [Reading from Standard Input](#reading-from-standard-input)
3. [Working with Command-Line Arguments](#working-with-command-line-arguments)
4. [Error Output](#error-output)
5. [Difference between `io.WriteString` and `fmt`](#difference-between-iowritestring-and-fmt)

---

## Short Assignment Operator (`:=`)

- **Purpose**: Used to declare and initialize a variable in a single statement.
- **Syntax**: `variable := value`
- **Scope**: Can only be used inside functions.
- used to declare and initialize both at same time
- **Example**:
  ```go
  m := 123
```

- **Re-declaration**: Cannot be used on already declared variables.
- **Multiple Variables**: Can declare and initialize multiple variables.
```
i, k := 3, 4 
j, k := 1, 2 // Valid because 'j' is new
```

## Reading from Standard Input

- **Purpose**: Read data from the user during runtime.
- **Packages**: `bufio` for buffered I/O, `os` for standard input.
- **Example**:
    
`# Go Code Example

Below is a simple Go program that reads input from the user and echoes it back with a `>` prefix.

```go
package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
	var f *os.Stdin
	f= os.Stdin
    scanner := bufio.NewScanner(f)
    for scanner.Scan() {
        fmt.Println(">", scanner.Text())
    }
}
```
- **Explanation**:
    - `bufio.NewScanner(os.Stdin)`: Creates a scanner to read from standard input.
    - `scanner.Scan()`: Reads input line by line.
    - `scanner.Text()`: Returns the text of the current line.

## Working with Command-Line Arguments

- **Purpose**: Pass additional data to the program when it is run.
- **Package**: `os` for accessing command-line arguments.
- **Example**:
    

```go
package main

import (
    "fmt"
    "os"
    "strconv"
)

func main() {
    if len(os.Args) == 1 {
        fmt.Println("Please give one or more floats.")
        os.Exit(1)
    }
    arguments := os.Args
    min, _ := strconv.ParseFloat(arguments[1], 64)
    max, _ := strconv.ParseFloat(arguments[1], 64)

    for i := 2; i < len(arguments); i++ {
        n, _ := strconv.ParseFloat(arguments[i], 64)
        if n < min {
            min = n
        }
        if n > max {
            max = n
        }
    }
    fmt.Println("Min:", min)
    fmt.Println("Max:", max)
}
```
- **Explanation**:
    - `os.Args`: Slice containing command-line arguments.
    - `strconv.ParseFloat`: Converts string to float.
    - `os.Exit(1)`: Exits the program with an error status.

## Difference between Command-Line Arguments and Standard Input

- **Command-Line Arguments**:
    
    - Passed to the program when it is run.
    - Accessed using `os.Args` slice.
    - Example: `go run cla.go -10 0 1`
    - Use case: Passing initial configuration or parameters.
- **Standard Input**:
    
    - Read from the user during runtime.
    - Accessed using `os.Stdin`.
    - Example: User types input in the terminal.
    - Use case: Interactive programs where input is required during execution.
## Error Output

- **Purpose**: Handle errors and warnings separately from standard output.
- **Package**: `io` for writing strings, `os` for standard error.
- **Example**:
    

```go
package main

import (
    "io"
    "os"
)

func main() {
    myString := ""
    arguments := os.Args
    if len(arguments) == 1 {
        myString = "Please give me one argument!"
    } else {
        myString = arguments[1]
    }

    io.WriteString(os.Stdout, "This is Standard output\n")
    io.WriteString(os.Stderr, myString)
    io.WriteString(os.Stderr, "\n")
}
```
```
```


- **Explanation**:
    - `os.Stderr`: Represents standard error.
    - `io.WriteString`: Writes a string to standard error.
    - Redirecting Output: Use shell commands to redirect standard error to files or discard it.

## Difference between `io.WriteString` and `fmt`

- **`io.WriteString`**:
    
    - Writes a string directly to a writer.
    - Syntax: `io.WriteString(writer, string)`
    - Example:
        

- - `io.WriteString(os.Stdout, "This is Standard output\n")`
        
    - Use Case: Simple string output.
- **`fmt` Package**:
    
    - Provides formatted I/O operations.
    - Common Functions: `fmt.Println`, `fmt.Printf`, `fmt.Sprintf`
    - Example:
        

- - `fmt.Println("This is Standard output") fmt.Printf("Formatted output: %s\n", "example")`
        
    - Use Case: Formatted output with variables.
- **Key Differences**:
    
    - `io.WriteString`: Simple and efficient for strings.
    - `fmt`: Flexible and powerful for formatted output.

## Additional Notes

- **Error Handling**: Always check for errors when using functions that return them.
- **Validation**: Validate command-line arguments to avoid runtime errors.
- **Performance**: Use buffered I/O for efficient reading and writing.

---


## Thoughts
- [ ] 