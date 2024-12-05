---
creation_date: <% tp.date.now("YYYY-MM-DD") %>
path: "6-FullNotes/<% tp.user.title %>-<% tp.date.now("YYYY-MM-DD") %>-FullNote"
---
<%*
// Prompt the user for a title
const title = await tp.system.prompt("Enter a title for the full note:");
const targetFolder = "6-FullNotes";
const fileName = `${title}-${tp.date.now("YYYY-MM-DD")}-FullNote`;
await tp.file.move(`${targetFolder}/${fileName}`);
_%>

# Full Note - <% tp.date.now("YYYY-MM-DD") %>

## Summary
- [ ] 

## Details
- [ ] 