# rendering 
what is rendering 
rendering means react functional yaa class component ko call krenga aur view ko update krega

react components render hote waqt do cheze common hoti hai 
 - phele react saari cheezo ko ikhta krta hai jaise ki props , event handler , state 
 - then unka use krke snapshot create krta hai 
 - aur uss snapshot ka use krke view ko update krta hai 


intial render ke waqt react root element jo ki index.html mein hoti hai woh use krke usme phele root component ko add krta hai 


```
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(<App />);
```

## when does react re render

intresting question 
react tab hee render krta hai jab state change hota hai baaqi kch bhi ho jaye react re render nhi krenga 

### What is batching

react sirf ke baar hee re render krta hai react ka algo aise design hai ki woh ek baar hee render hota hai 

```
const handleClick = () => {

  setCount(1)

  setCount(2)

  setCount(3)

}
```


isme react last wala valid maanega aur uske according state update hoga 


but kya agar hum phele waale yaani 
```
setCount(2)
```
waali state ko use krna chaye toh kaise krenge 
ye bhi kr skte hai ek function pass krke 
```
const handleClick = () => {

  setCount(1)

  setCount(2)

  setCount((c) => c + 3)

}
```
 isme react phele waali state ko use krenga
yaani state update hoga 2+3 = 5

# components
components are the classes or the functions that can be reused in the entire project anywhere anytime 
