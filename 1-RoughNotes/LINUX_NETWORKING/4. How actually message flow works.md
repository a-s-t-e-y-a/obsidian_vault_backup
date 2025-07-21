
Message Transmission Flow (Kaise Bheja Jata Hai Message?)

Jab aap user-space se `sendto()` system call karte hain (jaise ki `sys_sendto()` ka example), to ye aise kaam karta hai:

1. **Socket Lookup:** Sabse pehle, `sockfd_lookup_light()` function aapke diye gaye file descriptor (`fd`) se associated **struct socket** ko dhoondhta hai.

2. **User Data Import:** Aap jo data (`buff`, `len`) send karna chahte hain, use `import_single_range()` function `struct iovec` mein copy karta hai aur `msg.msg_iter` se associate karta hai.

3. **Address Handling (Agar destination address diya hai):** Agar aapne `addr` (destination address) provide kiya hai, to:

    ◦ `move_addr_to_kernel()` us user-space address ko kernel-space ke `struct sockaddr_storage` mein copy karta hai.

    ◦ Phir, `msg.msg_name` aur `msg.msg_namelen` ko is kernel-space address par set kiya jata hai.

    ◦ Agar `addr` nahi diya hai (jaise TCP mein jab connection established ho), to `msg.msg_name` `NULL` rehta hai.

4. **Calling** **sock_sendmsg()****:** Saari `struct msghdr` information ready hone ke baad, final step mein **sock_sendmsg()** function ko call kiya jata hai, `struct socket` aur prepared `struct msghdr` ke saath.

5. **Dispatch to Protocol-Specific Function:** `sock_sendmsg()` function phir `struct socket` ke **ops** **field mein stored** **sendmsg** **function pointer** ko call karta hai. Ye `ops->sendmsg` protocol-specific implementation ko dispatch karta hai (jaise TCP ke liye ya UDP ke liye).