---
creation_date: 2025-03-26
path: "1-RoughNotes/2025-03-26"
---
# CSS Box Model & Sizing

## 1. Content & Sizing

### Extrinsic Sizing
- Box ka size manually set kiya jata hai (fixed `width` & `height`).
- Agar content bada ho toh overflow ho sakta hai.
- Example:
  ```css
  .box {
    width: 200px;
    height: 100px;
  }
  ```

### Intrinsic Sizing
- Browser automatically content ke hisaab se size decide karta hai.
- Example:
  ```css
  .box {
    width: min-content;
  }
  ```
- Yeh box sirf utna hi bada hoga jitna uska content require karega.

## 2. Overflow Control
- Jab content box se bahar chala jaye toh `overflow` property ka use hota hai:
  ```css
  .box {
    overflow: auto; /* Scrollbar automatically add hoga agar zarurat ho */
  }
  ```

## 3. Box Model Components

### Content Box
- Jahan actual text ya image hoti hai.

### Padding Box
- Content ke around extra space.
- Example:
  ```css
  padding: 20px;
  ```

### Border Box
- Padding ke bahar ek frame.
- Example:
  ```css
  border: 5px solid black;
  ```

### Margin Box
- Box aur doosre elements ke beech ka gap.
- Example:
  ```css
  margin: 10px;
  ```

## 4. Analogy: Picture Frames
| Box Model | Example |
|-----------|---------|
| Content Box | Artwork (Actual picture) |
| Padding Box | White space around picture |
| Border Box | Picture frame |
| Margin Box | Space between frames |

## 5. Box-Sizing Property
By default, `box-sizing: content-box;` hota hai, lekin `border-box` use karne se width aur height padding aur border ke andar adjust ho jata hai:

```css
.box {
  width: 200px;
  padding: 20px;
  border: 10px solid;
  box-sizing: border-box;
}
```

## 6. Debugging with DevTools
- Browser DevTools ka use karke elements ka box model check kar sakte hain.
- Default browser styles bhi dekh sakte hain jo "user agent stylesheet" ke under hote hain.

## 7. Global Reset for Consistent Box Model
```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## Summary
- **Extrinsic Sizing**: Fixed dimensions, overflow ka issue ho sakta hai.
- **Intrinsic Sizing**: Browser content ke hisaab se adjust karega.
- **Box Model**: Content, padding, border aur margin se milkar banta hai.
- **Box-Sizing**: `border-box` use karna layout consistency ke liye better hai.
- **DevTools Debugging**: Browser DevTools ka use karke box model visualize kar sakte hain.
