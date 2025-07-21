
for this all codes resides in the github
these are important things form the labs 

##### Creation[¶](https://linux-kernel-labs.github.io/refs/heads/master/labs/networking.html#creation "Permalink to this headline")

Creation is similar to calling the `socket()` function in user space, but the `struct socket` created will be stored in the `res` parameter:

> - `int sock_create(int family, int type, int protocol, struct socket **res)` creates a socket after the `socket()` system call;
> - `int sock_create_kern(struct net *net, int family, int type, int protocol, struct socket **res)` creates a kernel socket;
> - `int sock_create_lite(int family, int type, int protocol, struct socket **res)` creates a kernel socket without parameter sanity checks.

The parameters of these calls are as follows:

> - `net`, where it is present, used as reference to the network namespace used; we will usually initialize it with `init_net`;
> - `family` represents the family of protocols used in the transfer of information; they usually begin with the `PF_` (Protocol Family) string; the constants representing the family of protocols used are found in `linux/socket.h`, of which the most commonly used is `PF_INET`, for TCP/IP protocols;
> - `type` is the type of socket; the constants used for this parameter are found in `linux/net.h`, of which the most used are `SOCK_STREAM` for a connection based source-to-destination communication and `SOCK_DGRAM` for connectionless communication;
> - `protocol` represents the protocol used and is closely related to the `type` parameter; the constants used for this parameter are found in `linux/in.h`, of which the most used are `IPPROTO_TCP` for TCP and `IPPROTO_UDP` for UDP.