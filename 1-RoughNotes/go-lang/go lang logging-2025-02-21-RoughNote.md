---
creation_date: 2025-02-21
path: "1-RoughNotes/2025-02-21"
---
# Rough Note - 2025-02-21

## Ideas
# Logging vs fmt, Sprintf, io.WriteString

## Logging
- **Purpose**: Record program behavior and events.
- **Use Case**: Debugging and monitoring.
- **Advantages**:
  - Logs are saved in files, not lost after printing.
  - Can be searched and processed using Unix tools like `grep`, `awk`, `sed`.
- **Example**:
  ```go
  log.Println("This is a log message")
  ```

## fmt Package
- **Purpose**: Formatted I/O.
- **Use Case**: Print formatted output to the terminal.
- **Example**:
  ```go
  fmt.Println("This is a formatted message")
  ```

## Sprintf Function
- **Purpose**: Format a string and return it.
- **Use Case**: Create formatted strings for later use.
- **Example**:
  ```go
  message := fmt.Sprintf("Formatted string: %s", "example")
  ```

## io.WriteString Function
- **Purpose**: Write a string directly to a writer (e.g., file, buffer).
- **Use Case**: Directly write strings without formatting.
- **Example**:
  ```go
  io.WriteString(os.Stdout, "This is a direct write to output")
  ```

## Summary
- **Logging**: Sends messages to log files for debugging and monitoring.
- **fmt**: Prints formatted output to the terminal.
- **Sprintf**: Returns formatted strings for later use.
- **io.WriteString**: Writes strings directly to a writer.

## Thoughts
- [ ] 