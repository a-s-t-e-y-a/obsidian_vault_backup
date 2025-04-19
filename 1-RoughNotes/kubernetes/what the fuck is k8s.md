k8s is used to orchestrate the containerized applications
it is the project to cncf

as far as my knowledge is k8s ka use sirf containerized applications ko he manage krne ke liye hota hai 


# first what is a container

jail is a container but container is not a jail
when you package an application with all its dependency or the requirnments needed by that application so it is contained and immutable 
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

# 