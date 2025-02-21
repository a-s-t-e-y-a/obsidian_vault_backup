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

## Summary
- **Logging**: Sends messages to log files for debugging and monitoring.
- **fmt**: Prints formatted output to the terminal.
- **Sprintf**: Returns formatted strings for later use.
- **io.WriteString**: Writes strings directly to a writer.

# Logging Functions

## Logging Functions

### 1. log.Print()
- **Purpose**: Print log messages without formatting.
- **Use Case**: Simple log message.
- **Example**:
  ```go
  log.Print("This is a simple log message")
  ```

### 2. log.Println()
- **Purpose**: Print log messages with a newline.
- **Use Case**: Log message with a newline.
- **Example**:
  ```go
  log.Println("This is a log message with a newline")
  ```

### 3. log.Printf()
- **Purpose**: Print formatted log messages.
- **Use Case**: Formatted log message.
- **Example**:
  ```go
  log.Printf("Formatted log message: %s", "example")
  ```

### 4. log.Fatal()
- **Purpose**: Print log message and terminate the program.
- **Use Case**: Serious error, stop the program immediately.
- **Example**:
  ```go
  log.Fatal("This is a fatal error message")
  ```

### 5. log.Fatalln()
- **Purpose**: Print log message with a newline and terminate the program.
- **Use Case**: Serious error with a newline, stop the program immediately.
- **Example**:
  ```go
  log.Fatalln("This is a fatal error message with a newline")
  ```

### 6. log.Fatalf()
- **Purpose**: Print formatted log message and terminate the program.
- **Use Case**: Serious error with formatting, stop the program immediately.
- **Example**:
  ```go
  log.Fatalf("Formatted fatal error message: %s", "example")
  ```

### 7. log.Panic()
- **Purpose**: Print log message and enter panic state.
- **Use Case**: Unrecoverable error, crash the program.
- **Example**:
  ```go
  log.Panic("This is a panic error message")
  ```

### 8. log.Panicln()
- **Purpose**: Print log message with a newline and enter panic state.
- **Use Case**: Unrecoverable error with a newline, crash the program.
- **Example**:
  ```go
  log.Panicln("This is a panic error message with a newline")
  ```

### 9. log.Panicf()
- **Purpose**: Print formatted log message and enter panic state.
- **Use Case**: Unrecoverable error with formatting, crash the program.
- **Example**:
  ```go
  log.Panicf("Formatted panic error message: %s", "example")
  ```

## Summary
- **log.Print()**: Simple log message without formatting.
- **log.Println()**: Log message with a newline.
- **log.Printf()**: Formatted log message.
- **log.Fatal()**: Log message and terminate the program.
- **log.Fatalln()**: Log message with a newline and terminate the program.
- **log.Fatalf()**: Formatted log message and terminate the program.
- **log.Panic()**: Log message and enter panic state.
- **log.Panicln()**: Log message with a newline and enter panic state.
- **log.Panicf()**: Formatted log message and enter panic state.

# Logging Levels

- **Debug**: Detailed information for developers.
- **Info**: General information about routine operations.
- **Notice**: Important events that are significant under normal conditions.
- **Warning**: Potential problems that are not yet serious.
- **Error**: Errors that affect the program's functioning.
- **Critical**: Critical conditions that seriously affect the program.
- **Alert**: Conditions that require immediate action.
- **Emergency**: System failure conditions that require immediate recovery.
# Logging Facilities

- **auth**: Security and authorization messages.
- **authpriv**: Private security and authorization messages.
- **cron**: Scheduling and cron job messages.
- **daemon**: System daemon messages.
- **kern**: Kernel messages.
- **lpr**: Line printer subsystem messages.
- **mail**: Mail system messages.
- **mark**: Timestamp messages.
- **news**: Network news subsystem messages.
- **syslog**: Internal syslog messages.
- **user**: Generic user-level messages.
- **uucp**: UUCP messages.
- **local0 to local7**: Custom application and local service messages.
## Thoughts
- [ ] 