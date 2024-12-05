---
creation_date: <% tp.date.now("YYYY-MM-DD") %>
path: "1-RoughNotes/<% tp.date.now("YYYY-MM-DD") %>"
---
<%*
// Move the file to the rough notes folder
const title = await tp.system.prompt("Enter a title for the rough note:");
const targetFolder = "1-RoughNotes";
const fileName = `${title}-${tp.date.now("YYYY-MM-DD")}-RoughNote`;
await tp.file.move(`${targetFolder}/${fileName}`);
_%>

# Rough Note - <% tp.date.now("YYYY-MM-DD") %>

## Ideas
- [ ] 

## Thoughts
- [ ] 