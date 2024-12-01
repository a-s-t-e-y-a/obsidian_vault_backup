---
creation_date: <% tp.date.now("YYYY-MM-DD") %>
path: "8-DailyTasks/<% tp.date.now("YYYY-MM-DD") %>"
---
<%*
// Move the file to the daily tasks folder
const targetFolder = "8-DailyTasks";
const fileName = tp.date.now("YYYY-MM-DD");
await tp.file.move(`${targetFolder}/${fileName}`);
_%>

# Daily Tasks - <% tp.date.now("YYYY-MM-DD") %>

## Morning Routine

## Today's Tasks
### 🔴 High Priority
- [ ] 

### 🟡 Medium Priority
- [ ] 

### 🟢 Low Priority
- [ ] 
