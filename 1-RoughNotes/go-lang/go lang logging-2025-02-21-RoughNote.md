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

# Logging Facilities vs. Logging Levels

## Logging Facilities
- **Purpose**: Categorize log messages based on the type of service or component generating the log.
- **Use Case**: Organize and manage log messages by grouping them into relevant categories.
- **Examples**: `auth`, `authpriv`, `cron`, `daemon`, `kern`, `lpr`, `mail`, `mark`, `news`, `syslog`, `user`, `uucp`, `local0` to `local7`.
- **Focus**: **What** is generating the log message (e.g., authentication system, mail system, kernel).

## Logging Levels
- **Purpose**: Indicate the severity or importance of a log message.
- **Use Case**: Filter and manage log messages based on their significance.
- **Examples**: `debug`, `info`, `notice`, `warning`, `error`, `critical`, `alert`, `emergency`.
- **Focus**: **How** important or severe the log message is (e.g., informational, warning, critical error).

## Key Differences
1. **Categorization vs. Severity**:
   - **Logging Facilities**: Group log messages by the type of service or component.
   - **Logging Levels**: Indicate the importance or severity of the log message.

2. **Use Case**:
   - **Logging Facilities**: Help in organizing logs by their source, making it easier to manage and search logs related to specific services.
   - **Logging Levels**: Help in filtering logs based on their importance, allowing developers to focus on critical issues.

3. **Examples**:
   - **Logging Facilities**: `auth` for authentication messages, `mail` for mail system messages.
   - **Logging Levels**: `debug` for detailed information, `error` for errors that affect the program's functioning.

## Summary
- **Logging Facilities**: Categorize log messages by their source (e.g., `auth`, `mail`).
- **Logging Levels**: Indicate the severity of log messages (e.g., `debug`, `error`).

# Log Servers

## Log Servers

### Purpose
- **Receive Logging Data**: Collect log messages from different sources.
- **Write to Log Files**: Write collected log messages to specific log files.
- **Centralize Log Management**: Make it easier to monitor and troubleshoot issues across the system.
- Process ruining in the server 

### Types of Log Servers

#### 1. syslogd
- **Description**: The original Unix system utility for message logging.
- **Use Case**: Traditionally used on many Unix variants for logging system and application messages.
- **Example**: On macOS, the `syslogd` process is responsible for logging.

#### 2. rsyslogd
- **Description**: An improved and more reliable version of `syslogd`.
- **Use Case**: Widely used on Linux machines for enhanced logging capabilities.
- **Example**: Most Linux distributions use `rsyslogd` for logging.

### Configuration
- **Configuration Files**: Log servers are configured using files like `/etc/syslog.conf` or `/etc/rsyslog.conf`.
- **Example Configuration**:
  ```plaintext
  auth,authpriv.* /var/log/auth.log
  *.*;auth,authpriv.none -/var/log/syslog
  daemon.* -/var/log/daemon.log
  kern.* -/var/log/kern.log
  ```
- **Explanation**:
  - `auth,authpriv.* /var/log/auth.log`: Logs all authentication messages to `/var/log/auth.log`.
  - `*.*;auth,authpriv.none -/var/log/syslog`: Logs all messages except authentication messages to `/var/log/syslog`.
  - `daemon.* -/var/log/daemon.log`: Logs all daemon messages to `/var/log/daemon.log`.
  - `kern.* -/var/log/kern.log`: Logs all kernel messages to `/var/log/kern.log`.

### Importance
- **Centralized Logging**: Centralize logging, making it easier to manage and analyze logs from various sources.
- **Reliability**: Enhanced reliability and features in log servers like `rsyslogd` ensure that log messages are not lost.
- **Filtering and Routing**: Facilitate filtering and routing of log messages based on their facility and level.

## Summary
- **Log Servers**: Specialized processes that receive logging data and write it to log files.
- **Types**: `syslogd` (original) and `rsyslogd` (improved version).
- **Configuration**: Configured using files like `/etc/syslog.conf` or `/etc/rsyslog.conf`.
- **Importance**: Centralize logging, enhance reliability, and facilitate filtering and routing of log messages.

# Go Program to Send Information to Log Files (Hinglish Explanation)

## Go Program: `logFiles.go`

```go
package main

import (
	"fmt"
	"log"
	"log/syslog"
	"os"
	"path/filepath"
)

func main() {
	// Get the program name
	programName := filepath.Base(os.Args[0])

	// Create a syslog writer for LOG_INFO and LOG_LOCAL7
	sysLog, err := syslog.New(syslog.LOG_INFO|syslog.LOG_LOCAL7, programName)
	if err != nil {
		log.Fatal(err)
	} else {
		log.SetOutput(sysLog)
	}

	// Send a log message to LOG_INFO and LOG_LOCAL7
	log.Println("LOG_INFO + LOG_LOCAL7: Logging in Go!")

	// Create a syslog writer for LOG_MAIL
	sysLog, err = syslog.New(syslog.LOG_MAIL, "Some program!")
	if err != nil {
		log.Fatal(err)
	} else {
		log.SetOutput(sysLog)
	}

	// Send a log message to LOG_MAIL
	log.Println("LOG_MAIL: Logging in Go!")

	// Print a message to the terminal
	fmt.Println("Will you see this?")
}
```

## Explanation in Hinglish

1. **Import Packages**:
   - `fmt`: Formatted I/O ke liye use hota hai, jaise terminal par message print karna.
   - `log`: Logging ke liye use hota hai, jaise log messages ko generate karna aur unhe handle karna.
   - `log/syslog`: System logger ke saath communicate karne ke liye use hota hai, jaise log messages ko syslog server par bhejna.
   - `os`: Operating system ke saath interact karne ke liye use hota hai, jaise environment variables access karna.
   - `path/filepath`: File paths ko manipulate karne ke liye use hota hai, jaise file ka base name nikalna.

2. **Get Program Name**:
   - `programName := filepath.Base(os.Args[0])`: Yahan hum program ka base name nikal rahe hain. `os.Args[0]` se hum current executable ka path milta hai, aur `filepath.Base` se hum uska base name nikal lete hain.

3. **Create Syslog Writer for LOG_INFO and LOG_LOCAL7**:
   - `syslog.New(syslog.LOG_INFO|syslog.LOG_LOCAL7, programName)`: Yeh ek naya syslog writer create karta hai jo `LOG_INFO` level aur `LOG_LOCAL7` facility use karta hai.
   - `log.SetOutput(sysLog)`: Yeh default logger ka output destination set karta hai syslog writer par.

4. **Send Log Message to LOG_INFO and LOG_LOCAL7**:
   - `log.Println("LOG_INFO + LOG_LOCAL7: Logging in Go!")`: Yeh ek log message bhejta hai syslog par jo `LOG_INFO` level aur `LOG_LOCAL7` facility use karta hai.

5. **Create Another Syslog Writer for LOG_MAIL**:
   - `syslog.New(syslog.LOG_MAIL, "Some program!")`: Yeh ek naya syslog writer create karta hai jo `LOG_MAIL` facility use karta hai.
   - `log.SetOutput(sysLog)`: Yeh default logger ka output destination set karta hai new syslog writer par.

6. **Send Another Log Message to LOG_MAIL**:
   - `log.Println("LOG_MAIL: Logging in Go!")`: Yeh ek aur log message bhejta hai syslog par jo `LOG_MAIL` facility use karta hai.

7. **Print to Terminal**:
   - `fmt.Println("Will you see this?")`: Yeh ek message print karta hai terminal par. Yeh message syslog par nahi jayega, sirf terminal par dikhayi dega.

## Running the Program

- **Compile and Run**:
  ```sh
  go run logFiles.go
  ```

- **Check Log Files**:
  - Log messages appropriate log files mein likhe jayenge, jo syslog server ke configuration par depend karta hai. For example:
    - `/var/log/cisco.log` for `LOG_LOCAL7` messages.
    - `/var/log/mail.log` for `LOG_MAIL` messages.
    - `/var/log/syslog` for general log messages.

## Notes
- **Syslog Server Configuration**: Ensure karo ki syslog server properly configure hai specified logging facilities (`LOG_LOCAL7`, `LOG_MAIL`) handle karne ke liye.
- **Dynamic Logging Configuration**: Program demonstrate karta hai kaise logging configuration dynamically change ki ja sakti hai code ke andar.

# About log.Fatal()

## `log.Fatal()` Explanation

### Purpose
- **Matlab**: `log.Fatal()` ka use hota hai jab koi critical error ho jata hai aur program ko immediately stop karna padta hai.
- **Use Case**: Jab koi serious error ho jata hai jo ki program ko rok sakta hai, tab `log.Fatal()` use kiya jata hai.

### How It Works
- **Log Message**: `log.Fatal()` ek log message print karta hai.
- **Terminate Program**: Baad mein, yeh program ko terminate karta hai.
- **Exit Status**: Program ko terminate karne ke baad, yeh ek non-zero exit status return karta hai, jisse pata chalta hai ki program successfully complete nahi hua.

### Example
```go
package main

import (
	"fmt"
	"log"
	"log/syslog"
)

func main() {
	sysLog, err := syslog.New(syslog.LOG_ALERT|syslog.LOG_MAIL, "Some program!")
	if err != nil {
		log.Fatal(err)
	} else {
		log.SetOutput(sysLog)
	}

	log.Fatal("This is a fatal error message")
	fmt.Println("Will you see this?")
}
```

### Explanation in Hinglish
1. **Import Packages**:
   ```go
   import (
	   "fmt"
	   "log"
	   "log/syslog"
   )
   ```
   - **Matlab**: Yahan humne `fmt`, `log`, aur `log/syslog` packages import kiye hain. `fmt` terminal par message print karne ke liye use hota hai, `log` logging ke liye use hota hai, aur `log/syslog` syslog server ke saath communicate karne ke liye use hota hai.

2. **Create Syslog Writer**:
   ```go
   sysLog, err := syslog.New(syslog.LOG_ALERT|syslog.LOG_MAIL, "Some program!")
   ```
   - **Matlab**: Yahan hum ek syslog writer create kar rahe hain jo `LOG_ALERT` level aur `LOG_MAIL` facility use karta hai.

3. **Check for Error**:
   ```go
   if err != nil {
	   log.Fatal(err)
   } else {
	   log.SetOutput(sysLog)
   }
   ```
   - **Matlab**: Agar syslog writer create karne mein koi error aata hai, toh `log.Fatal(err)` call hoga, jo error message print karke program ko terminate karega. Nahi toh, hum default logger ka output destination set karte hain syslog writer par.

4. **Log Fatal Error Message**:
   ```go
   log.Fatal("This is a fatal error message")
   ```
   - **Matlab**: Yahan hum ek fatal error message log kar rahe hain. Is message ke baad, program automatically terminate ho jayega.

5. **Print to Terminal**:
   ```go
   fmt.Println("Will you see this?")
   ```
   - **Matlab**: Yeh line execute nahi hogi kyunki `log.Fatal()` ne pehle hi program ko terminate kar diya hoga. Isliye, yeh message terminal par nahi dikhayi dega.

### When to Use `log.Fatal()`
- **Critical Errors**: Jab koi critical error ho jata hai aur program ko immediately stop karna padta hai.
- **Initialization Failures**: Jab koi important initialization step fail ho jata hai, jisse program correctly function nahi kar sakta.
- **Unrecoverable Errors**: Jab koi error ho jata hai jo ki recover nahi kiya ja sakta.

### Summary
- **`log.Fatal()`**: Logs a message and then terminates the program.
- **Use Case**: Critical errors, initialization failures, unrecoverable errors.
- **Example**:
  ```go
  log.Fatal("This is a fatal error message")
  ```
## Thoughts
- [ ] 