## 📌 **Flexbox Complete Notes (Hinglish) – From Start to End** 🚀  

### **🔹 Flexbox Kya Hai?**
Flexbox ek **CSS layout model** hai jo **container ke andar items ka size aur position dynamically adjust karne ke liye use hota hai**. Yeh responsive layouts banane me madad karta hai.

---

## **1️⃣ Flex Container vs. Flex Items**
### **Flex Container (`display: flex;`)
**
✅ `display: flex;` lagane se ek container **Flexbox container** ban jata hai, aur uske andar ke elements **Flex Items** ban jate hain.

```css
.container {
  display: flex;
}
```

### **Flex Items (Children of Flex Container)**
✅ `display: flex;` sirf **direct child elements** par apply hota hai.

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

---

## **2️⃣ Main Axis vs. Cross Axis**
✅ **Flexbox ka alignment** do axis par kaam karta hai:

| Axis | Meaning |
|------|---------|
| **Main Axis** | Items ka primary direction (`flex-direction` decide karta hai) |
| **Cross Axis** | Main axis ke perpendicular direction me alignment |

```css
.container {
  display: flex;
  flex-direction: row; /* Main Axis → Horizontal */
}
```

### **Example: `flex-direction`**
| `flex-direction` | Main Axis | Cross Axis |
|-----------------|-----------|------------|
| `row` (default) | Left to Right | Top to Bottom |
| `row-reverse` | Right to Left | Top to Bottom |
| `column` | Top to Bottom | Left to Right |
| `column-reverse` | Bottom to Top | Left to Right |

```css
.container {
  display: flex;
  flex-direction: column;
}
```

---

## **3️⃣ Flex Wrap – Items Multiple Rows Me Kaise Aayenge?**
✅ By default, Flexbox ek hi row me sab items ko rakhne ki koshish karta hai, **chahe space kam ho**.  
Agar items ko multiple rows me lana ho, toh `flex-wrap` use karte hain.
Flex wrap sirf row wise kaam krta hai woh column wise kaam nhi krta hai

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

| Property           | Meaning                                             |
| ------------------ | --------------------------------------------------- |
| `nowrap` (default) | Sab items ek hi line me rahenge                     |
| `wrap`             | Space kam hone par items next line me chale jayenge |
| `wrap-reverse`     | Items next line me, **reverse order me** aayenge    |

---

## **4️⃣ Flex Grow & Flex Shrink**
✅ Ye **items ka size adjust** karne me madad karte hain.

### **🛠 `flex-grow` → Available Space Ko Kaise Distribute Kare**
- **Default: `0` (grow nahi karega)**
- **Bada value = Jyada grow karega**  

```css
.item1 { flex-grow: 1; } /* 1 part lega */
.item2 { flex-grow: 2; } /* 2 parts lega */
.item3 { flex-grow: 3; } /* 3 parts lega */
```

👉 **Total available space 6 parts me divide hoga**:  
🟦 `1` part, 🔵 `2` parts, 🟩 `3` parts

---

### **🛠 `flex-shrink` → Space Kam Hone Par Kaun Kitna Shrink Kare**
- **Default: `1` (sab shrink karenge)**
- **Bada value = Jyada shrink karega**

```css
.item1 { flex-shrink: 1; } /* Kam shrink hoga */
.item2 { flex-shrink: 2; } /* Jyada shrink hoga */
```

👉 **Agar parent ka size kam hota hai, toh bada shrink factor wale items pehle chhote honge**.

---

## **5️⃣ Flex Basis – Default Size Kya Ho**
✅ **Ek flex item ka default width/height decide karta hai**.  
Agar `flex-basis: 200px;` diya ho, toh item **by default 200px ka hoga**, phir `flex-grow` ya `flex-shrink` adjust karega.

```css
.item {
  flex-basis: 200px;
}
```

---

## **📏 Summary – Quick Cheatsheet**
| Property | Use |
|----------|----------|
| `flex-direction` | Main Axis decide karta hai |
| `flex-wrap` | Items ko wrap karne ke liye |
| `flex-grow` | Items kaise grow karenge |
| `flex-shrink` | Items kaise shrink honge |
| `flex-basis` | Default size decide karta hai |
| `justify-content` | Main axis alignment |
| `align-items` | Cross axis alignment |
| `align-content` | Multiple rows ka alignment |
| `order` | Custom sequence |

---

🚀 **Ye complete guide hai, agar aur koi doubt hai toh batao!** 😃
