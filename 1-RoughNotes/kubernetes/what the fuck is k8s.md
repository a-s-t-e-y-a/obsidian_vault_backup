
k8s is used to orchestrate the containerized applications
it is the project to cncf
k8s act like the captain of ship which have so many container in them

job of k8s to manage the container that they should run and healthy their scalability

as far as my knowledge is k8s ka use sirf containerized applications ko he manage krne ke liye hota hai 
k8s work is simple to keep monitoring that k8s pod keep running and stay healthy


# first what is a container

jail is a container but container is not a jail
when you package an application with all its dependency or the requirements needed by that application so it is contained and immutable

so mean we take the stack of the project and its run time requirements and bundle them together and handover to the someone so they can run that easily
# k8s ka use kaise hota hai 

1. **Har tarah ke workload ke liye open**  
    Kubernetes kisi bhi application type pe restriction nahi lagata. Chahe stateless service ho, stateful database ho, ya heavy data‑processing job ho—agar woh container mein chal sakti hai, toh Kubernetes pe badiya chalegi.
    
2. **Source code deployment/ build nahi karta**  
    Kubernetes khaud se tumhara source code pull karke build ya deploy nahi karta. CI/CD pipelines (jaise Jenkins, GitLab CI, Argo CD, etc.) tumhari team ki culture aur preferences ke hisaab se alag hoti hain—unko Kubernetes manage nahi karta.
    
3. **Middleware ya DB jaise app‑level services built‑in nahi**  
    Message bus (e.g. RabbitMQ), data frameworks (e.g. Spark), databases (e.g. MySQL), caches, ya cluster storage (e.g. Ceph) jaise components Kubernetes khud provide nahi karta. Haan, tum inko containerized karke Kubernetes pe chala sakte ho, ya phir external services ko Open Service Broker jaise portable mechanisms se access kar sakte ho.
    
4. **Logging, monitoring, alerting ka solution dictate nahi karta**  
    Kubernetes me kuch proof‑of‑concept integrations hain metrics expose karne ke liye, lekin production‑grade logging/monitoring/alerting tools (jaise Prometheus, Grafana, ELK stack) tumhe khud choose karke integrate karne padenge.
    
5. **Koi specific configuration language enforce nahi**  
    JSON, YAML, Jsonnet—koi particular DSL ya toolchain ko Kubernetes mandate nahi karta. Bas declarative API hoti hai jise tum JSON/YAML/jo bhi format se target kar sakte ho.
    
6. **Machine‑level configuration/maintenance/self‑healing nahi manage karta**  
    Kubernetes nodes ka OS patching, BIOS updates, hardware health check, etc. ye sab tumhe khud dekhna hai—Kubernetes in cheezon ka comprehensive solution nahi deta.
    
7. **“Orchestration” wala pura workflow sequencing nahi**  
    Traditional orchestration matlab “pehle A, phir B, phir C” jaise fixed steps ko follow karna. Lekin Kubernetes me aise centralized workflow nahi chalte—yahaan independent control loops continuously desired state (jo tumne declare kiya) ke hisaab se current state ko automatically match karte rehte hain. Kaise pohchenge A se C tak, iski tension nahi—controller khud manage karta hai.
    

Is tarah, Kubernetes ek monolithic orchestrator nahi balki ek set of composable, self‑driving controllers hai jo desired‑state model pe kaam karte hain.

# some basic command for k8s

``` 
kubectl get ns === to get the namespace
kubectl --namespace create <USERNAME> ==== to create the username
kubectl --namespace <USERNAME> krishna get pods
kubectl -n <USERNAME> apply -f <YAML FILE LINK> 
kubectl port-forward -n <USERNAME> <POD NAME> <FORWARD PORT >: <CONTAINER POD>
```


### rolling updates and rolling back

**Rolling Updates:**

- **Definition:** Rolling updates ka matlab hai software ya system ko ek baar mein poora nahi update karna, balki thoda-thoda karke update karna.
- **Purpose:** Is tareeke se downtime kam hota hai aur system fail hone ka risk bhi kam hota hai. Agar koi problem aati hai, toh sirf ek chhoti jagah affect hoti hai, poora system nahi.
- **Example:** Socho aapke paas ek website hai. Bajaye poore website ko ek saath update karne ke, aap ek-ek page ko update karte ho. Isse agar koi problem aati hai, toh sirf uss ek page mein problem hoti hai, baaki website theek se chalta rahata hai.

**Rolling Back:**

- **Definition:** Rolling back ka matlab hai agar naya update problem karta hai, toh aap wapas pehle wale version par jaate ho jo theek tha.
- **Purpose:** Yeh backup plan ki tarah hota hai. Agar naya update theek se kaam nahi karta, toh aap jaldi se pehle wale version par wapas aa jaate ho.
- **Example:** Agar aapne apne phone ka software update kiya aur usme problem aane lagi, toh aap pehle wale version par wapas jaake problem solve kar sakte ho.

## Daemon sets

Kubernetes mein **DaemonSets** ek aisi Kubernetes object hai jo yeh ensure karti hai ki ek specific pod har node par ya kuch selected nodes par run hota rahe. Yeh typically background services ya agents deploy karne ke liye use hoti hai jo har node par hona zaroori hota hai, jaise monitoring agents ya log collectors[1](https://medium.com/@subhampradhan966/daemonsets-in-kubernetes-d21d439fd964).

