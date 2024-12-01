---
tags:
  - 📅
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
---
---
tags: 📅
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
---
<%*
// Get date
let dateValue = await tp.system.suggester(["today", "yesterday", "tomorrow"], ["today", "yesterday", "tomorrow"])
let newDate = app.plugins.plugins['nldates-obsidian'].parseDate(dateValue).moment.format("YYYY-MM-DD")

// Get project name through direct input
let projectName = await tp.system.prompt("Enter project name")

// Move file
await tp.file.move("7-Meetings/" + newDate + " " + projectName)
-%>

[[<% projectName %>]]

### Prep
- [ ] Review previous meeting notes
- [ ] Prepare agenda items
- [ ] Gather necessary documents

### Notes
- 

### Action Items
- [ ] 
- [ ] 


### Follow-up
- [ ] Send meeting minutes
- [ ] Schedule next meeting
- [ ] Update project timeline