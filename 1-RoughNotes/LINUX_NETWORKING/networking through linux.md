This guide is going to help you understand what networking is, how networking works, and how you can learn networking.

**Disclaimer:** I am learning networking concepts, so I am also a beginner. Treat me like one. You can take this guide as documentation of my journey to learn networking. Rather than focusing on the top commands used in Linux, I am going to deep dive into this topic.


Let's start.

### What is the OSI Model?

The OSI model is pretty basic with 7 layers of networks, but in the real world, we are now using the TCP/IP model, which has only 4 layers:

- Application layer
- Transport layer
- Internet layer
- Network layer

For more information, you can go and search about these models.

What I am particularly interested in is how networking is implemented at the kernel level and how I can leverage that.

I am going to follow linux labs --- https://linux-kernel-labs.github.io/refs/heads/master/labs/networking.html

Linux kernel can be compiled without networking support 
But who  gonna like that linux kernel .. when internet becomes our identity

- the kernel is only responsible till the transport layer after that all thing happens in user-space so application layer happens in browser or postman or curl level 
- they do the context switching from user-space to kernel level many time

### networking in user space 

For user 