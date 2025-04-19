
### CASL 

# CASL (Central Authentication Service Library) Notes

## Key Concepts
- **Ability**: User's capability to perform actions (e.g., read, write, manage)
- **Subject**: Resource/entity being acted upon (e.g., User, Post, all)
- **Rules**: Define what actions a user can perform on which subjects

## Flow of CASL
1. **User Login**:
   - Basic user info (userId, roles) stored in session
   - CASL rules are **not** stored in session

2. **Per Request**:
   - Fetch fresh roles/permissions from database
   - Generate CASL ability dynamically
   - Attach to `req.ability` for use in route handlers

## Why Not Store in Session?
- **Security**: Rules may change; fresh generation is safer
- **Performance**: Rules are lightweight to generate
- **Flexibility**: No need to clear session when rules change

## Best Practices
- **Database as Source of Truth**:
  - Store roles/permissions in database
  - Fetch fresh data per request
- **Dynamic Ability Generation**:
  - Generate CASL rules per request
  - Don't rely on cached rules
- **Never Trust Client-Side Data**:
  - Always validate permissions server-side
  - Handle forged requests securely

## Example Implementation