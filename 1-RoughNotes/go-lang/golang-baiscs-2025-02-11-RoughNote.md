---
creation_date: 2025-02-11
path: "1-RoughNotes/2025-02-11"
---
# Rough Note - 2025-02-11

## Ideas
- [ ] all exported member function from the file always be started from capital letter like ` Print in fmt.Println('')`
- [ ] you can run go by two ways one by `creating executable ` and another one is using `go run command `
- [ ] you can't leave go program by importing package and leaving it unused
- [ ] ![[Pasted image 20250220001330.png]]![[/Pasted image 20250220001155.png]]
go put semicolon automatically so if you start curly braces from the second line then it led to error because it puts semicolon automatically

# Dependency Management: Go vs pnpm

## **Go Modules**
- **Global Cache**:
  - Dependencies are stored in a global cache (`$GOPATH/pkg/mod` or `$GOMODCACHE`).
  - No need to re-download dependencies for multiple projects.
  - if one project uses `a` package and if second project also uses `a` package then go downloads in one global directory and reuse it with direct reference  

- **Project Management**:
  - Each project has a `go.mod` file for dependency declarations.
  - A `go.sum` file ensures dependency integrity.

- **Dependency Resolution**:
  - Uses **Minimal Version Selection (MVS)** to resolve dependencies.
  - Ensures a single version of each dependency per project.

- **Efficiency**:
  - Saves disk space by avoiding duplication.
  - No project-specific `node_modules`-like folders.

- **Commands**:
  - `go mod init`: Initialize a new module.
  - `go mod tidy`: Download and sync dependencies.
  - `go get`: Add a new dependency.
  - `go list -m all`: List all dependencies.

---

## **pnpm** { we are taking pnpm as node js reference}
- **Global Store**:
  - Dependencies are stored in a global store and linked to projects using **hard links** and **symbolic links**.
  - Avoids duplication across projects.
  - npm and yarn does not support global cache and download package for every project seperately

- **Project Management**:
  - Each project has its own `node_modules` folder with symbolic links to the global store.
  - Uses `pnpm-lock.yaml` for dependency locking.

- **Dependency Resolution**:
  - Uses **nested dependency resolution** to avoid conflicts.
  - Avoids "dependency hoisting" seen in `npm` and `yarn`.

- **Efficiency**:
  - Extremely disk-space efficient due to hard links.
  - Maintains compatibility with tools expecting `node_modules`.

- **Commands**:
  - `pnpm install`: Install dependencies.
  - `pnpm add <package>`: Add a new dependency.
  - `pnpm update`: Update dependencies.

---

## **Key Differences**
| Feature                     | Go Modules                                | pnpm                                      |
|-----------------------------|------------------------------------------|------------------------------------------|
| **Dependency Storage**      | Global cache (`$GOPATH/pkg/mod`).        | Global store + symbolic links in `node_modules`. |
| **Project Isolation**       | No project-specific folders.             | Each project has its own `node_modules`. |
| **Dependency Resolution**  | Minimal Version Selection (MVS).         | Nested dependency resolution.            |
| **Disk Space Efficiency**   | Efficient (global cache).                | Highly efficient (hard links + global store). |
| **Lock File**               | `go.sum`.                                | `pnpm-lock.yaml`.                        |
| **Compatibility**           | No `node_modules`-like folder.           | Maintains `node_modules` for compatibility. |


---

## **Quick Commands Cheat Sheet**

### **Go Modules**
```
go mod init <module-name>  # Initialize a new module.
go mod tidy                # Download and sync dependencies.
go get <package>           # Add a new dependency.
go list -m all             # List all dependencies.
```

# How go prints in output screen

| **Function**       | **Description**                                                                 | **Example**                                                                 | **Output**         |
|--------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------|--------------------|
| `fmt.Println()`    | Prints arguments followed by a newline.                                         | `fmt.Println("Hello", "World")`                                             | `Hello World`      |
| `fmt.Print()`      | Prints arguments without adding a newline.                                      | `fmt.Print("Hello", "World")`                                               | `HelloWorld`       |
| `fmt.Printf()`     | Prints formatted output with format specifiers.                                 | `fmt.Printf("%s %s\n", "Hello", "World")`                                   | `Hello World`      |
| `fmt.Sprintln()`   | Returns a string with arguments and a newline.                                  | `result := fmt.Sprintln("Hello", "World")`                                  | `Hello World`      |
| `fmt.Sprint()`     | Returns a string with arguments without a newline.                              | `result := fmt.Sprint("Hello", "World")`                                    | `HelloWorld`       |
| `fmt.Sprintf()`    | Returns a formatted string with format specifiers.                              | `result := fmt.Sprintf("%s %s", "Hello", "World")`                          | `Hello World`      |
| `fmt.Fprintln()`   | Writes arguments to an `io.Writer` followed by a newline.                       | `fmt.Fprintln(os.Stdout, "Hello", "World")`                                 | `Hello World`      |
| `fmt.Fprint()`     | Writes arguments to an `io.Writer` without adding a newline.                    | `fmt.Fprint(os.Stdout, "Hello", "World")`                                   | `HelloWorld`       |
| `fmt.Fprintf()`    | Writes formatted output to an `io.Writer`.                                      | `fmt.Fprintf(os.Stdout, "%s %s\n", "Hello", "World")`                       | `Hello World`      |

------
