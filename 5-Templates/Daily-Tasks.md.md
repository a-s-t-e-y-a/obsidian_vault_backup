---
tags: 📅/daily
cssclass: timer-enabled
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
---

# Tasks for <% tp.date.now("YYYY-MM-DD") %>

## 📋 Today's Tasks
- [ ] Task 1 
    ```button
    name Start
    type command
    action Execute JavaScript: app.customJS.Timer.startTimer('1')
    class timer-start
    ```
    ```button
    name Stop
    type command
    action Execute JavaScript: app.customJS.Timer.stopTimer('1')
    class timer-stop
    ```
    <span id="time-1">00:00:00</span>

- [ ] Task 2
    ```button
    name Start
    type command
    action Execute JavaScript: app.customJS.Timer.startTimer('2')
    class timer-start
    ```
    ```button
    name Stop
    type command
    action Execute JavaScript: app.customJS.Timer.stopTimer('2')
    class timer-stop
    ```
    <span id="time-2">00:00:00</span>

## ⏳ Pending Tasks