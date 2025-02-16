---
creation_date: 2025-02-15
path: "1-RoughNotes/2025-02-15"
---
# Rough Note - 2025-02-15

- [ ] okay how graphql is diff from rest api 
`graph ql gives flexibility that frontend decide what we want `
- [ ] we can solve this problem in REST api also but we have to make new route every time for full fillment of the requirement and this also don't provide frontend the advantage of doing this so.
- [ ] okay like if we need name from user and post from blog we can do this in rest by using select and include in prisma but if after some months now user need comments all then we need to update backend by versioning and that created lots of development and api versioning 
- [ ] this can be solve by graph ql we can demand from the backend what we need and without changing backend we can make demand what we need and what is going to work for us
- [ ] graph ql and rest api both uses http/http2 protocol in the backhood 
### if frontend demands what we need this can lead to security concern 

--- if frontend demand what we need to take care of security also 
- [ ] Schema-Level Access Control (Allow Only Safe Fields)
- [ ] Role-Based Access Control (RBAC)
- [ ] Query Depth Limiting (DDOS Attack Prevention)
- [ ] Field-Level Permissions
- [ ] Rate Limiting (Too Many Requests)

## Thoughts
- [ ] 