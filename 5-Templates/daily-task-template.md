---
tags: 📅/task
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
---
<%*
// Get date
let dateValue = await tp.system.suggester(["today", "yesterday", "tomorrow"], ["today", "yesterday", "tomorrow"])
let newDate = app.plugins.plugins['nldates-obsidian'].parseDate(dateValue).moment.format("YYYY-MM-DD")

// Get task name through direct input
let taskName = await tp.system.prompt("Enter task name")

// Move file
await tp.file.move("8-Tasks/" + newDate + " " + taskName)
-%>

# Task: <%= taskName %>

### Time Tracking
Start Time: `$= dv.date(dv.current().startTime || "Not started")`
End Time: `$= dv.date(dv.current().endTime || "Not ended")`
Duration: `$= dv.duration(dv.current().startTime, dv.current().endTime) || "In progress"`

### Status
- [ ] Started
- [ ] Completed

### Task Details
- **Priority**: 
- **Project**: [[]]
- **Category**: 

### Notes
- 

### Blockers
- 

### Time Log
| Start | End | Duration | Notes |
|-------|-----|----------|-------|
|       |     |          |       |

### Related Tasks
- 