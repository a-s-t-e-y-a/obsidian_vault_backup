retrieval augmented generation

Aap Large Language Model ko ek over-enthusiastic naye employee ki tarah soch sakte hain jo current events ke saath updated rehne se mana kar deta hai, lekin har sawal ka jawab poore confidence ke saath dega. Afsos ki yeh attitude user trust ko negatively impact kar sakta hai aur aap nahin chahte hain ki aapke chatbots aise behave karein!

RAG in challenges ko solve karne ka ek approach hai.  **Ye LLM ko authoritative, pre-determined knowledge sources** se relevant information retrieve karne ke liye redirect karta hai.

## How RAG works

- **creates** embedding of the external data and store them in a vector database this is done by the help of the new ai technique that convert the data into embedding and then we store that info in the vector database
- second step is **retrieval search**  The next step is to perform a relevancy search. The user query is converted to a vector representation and matched with the vector databases.
- third step is **augmentation** Next, the RAG model augments the user input (or prompts) by adding the relevant retrieved data in context.
- then the llm generates the output
- The next question may be—what if the external data becomes stale? To maintain current information for retrieval, asynchronously update the documents and update embedding representation of the documents. You can do this through automated real-time processes or periodic batch processing.

## Semantic search vs RAG
semantic search does not only search on the basis of keyboard but also understand the reason behind the user ask.

where as RAG search only search according to the keywords only 

Conventional or keyword search solutions in RAG produce limited results for knowledge-intensive tasks

In contrast, semantic search technologies do all the work of knowledge base preparation so developers don't have to. They also generate semantically relevant passages and token words ordered by relevance to maximize the quality of the RAG payload.

![](../../Assets/Pasted%20image%2020250630153925.png)
## Statistical and machine learned representation

![](../../Assets/Pasted%20image%2020250630153534.png)

in this embeddings used by the machine learning model and statistical used by search engines

![](../../Assets/Pasted%20image%2020250630154027.png)
Vector store implement this for me 


## Generation in RAG

![](../../Assets/Pasted%20image%2020250630155215.png)
## Numerical representation  for search

![](../../Assets/Pasted%20image%2020250630152758.png)

