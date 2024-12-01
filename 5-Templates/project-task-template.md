---
type: project-task
destination: 9-ProjectTasks
created: <% tp.date.now("YYYY-MM-DD") %>
---
<%*
// Move the file to the project tasks folder
const targetFolder = "9-ProjectTasks";
const fileName = tp.date.now("YYYY-MM-DD");
await tp.file.move(`${targetFolder}/${fileName}`);
_%>

# Task Template

## Project: [Project Name]
**Date:** [YYYY-MM-DD]
**Priority:** [High/Medium/Low]
**Status:** [Not Started/In Progress/Blocked/Completed]

### Description
[Brief description of the task]

### Requirements
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

### Dependencies
- [List any dependencies or blockers]

### Notes
- [Additional notes or context]

---

## Projects List

### EVC-Workflow
- Task: 
- Deadline:
- Priority:
- Assignee:

### Comvosense
- Task:
- Deadline:
- Priority:
- Assignee:

### Hi College
- Task:
- Deadline:
- Priority:
- Assignee:

### Tradiejam
- Task:
- Deadline:
- Priority:
- Assignee:

### Personal Things
- Task:
- Deadline:
- Priority:
- Assignee:

### Progress Tracking
- [ ] Task Started
- [ ] In Development
- [ ] Testing
- [ ] Review
- [ ] Completed

### Time Tracking
- Start Date:
- End Date:
- Total Hours: