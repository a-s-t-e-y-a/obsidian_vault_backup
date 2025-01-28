---
creation_date: <% tp.date.now("YYYY-MM-DD") %>
path: "8-DailyTasks/<% tp.date.now("YYYY-MM-DD") %>"
---
<%*
// Move the file to the daily tasks folder
const targetFolder = "2-Task-for-subtask";
const fileName = tp.date.now("YYYY-MM-DD");
await tp.file.move(`${targetFolder}/${fileName}`);
_%>

# Daily Tasks - <% tp.date.now("YYYY-MM-DD") %>


## Today's Tasks
### 🔴 High Priority
- [ ] 

### 🟡 Medium Priority
- [ ] 

### 🟢 Low Priority
- [ ] 
