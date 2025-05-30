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


```

const handleClick = () => {

  setCount(1)

  setCount((c) => c + 3)

  setCount(7)

  setCount((c) => c + 10)

}
```
for example iska state output rhenga 7+10 = 17 



#### react update component as well its child component also 

```
import * as React from "react"
import Wave from "./Wave"

function Greeting ({ name }) {
  const [index, setIndex] = React.useState(0)

  const greetings = ['Hello', "Hola", "Bonjour"]

  const handleClick = () => {
    const nextIndex = index === greetings.length - 1
      ? 0
      : index + 1
    setIndex(nextIndex)
  }

  return (
    <main>
      <h1>{greetings[index]}, {name}</h1>
      <button onClick={handleClick}>
        Next Greeting
      </button>
      <Wave />
    </main>
  )
}

export default function App () {
  return <Greeting name="Tyler" />
}
```
 iss waale code mein agar Greeting component hoga then Wave component bhi update hoga

lekin wave component ko update krne ka koi mtlb nhi hai 
toh hum wave component ko React.memo(Wave)
mein use kr skte hai 
Wave componenet re render naa ho

## React memo 

react memo tab hee render krenga jab component ke actually mein props change honge

## Strict mode 


# components
components are the classes or the functions that can be reused in the entire project anywhere anytime 
