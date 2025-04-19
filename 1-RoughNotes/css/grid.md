# CSS Grid Terminology

## 1. Grid Lines (ग्रिड लाइन्स)
- Grid lines horizontal aur vertical lines hote hain jo grid banate hain.
- Agar grid mein 4 columns hain, toh 5 column lines hongi (last column ke baad wali line included).
- Lines numbering 1 se shuru hoti hai.
  - Left-to-right languages (jaise English) mein, column line 1 left side pe hoti hai.
  - Right-to-left languages (jaise Arabic) mein, column line 1 right side pe hoti hai.

**Example:**
| 1 | 2 | 3 | 4 | 5 | --> Column Lines

---

## 2. Grid Tracks (ग्रिड ट्रैक्स)
- Track do grid lines ke beech ka space hota hai.
  - **Row Track**: Do row lines ke beech ka space.
  - **Column Track**: Do column lines ke beech ka space.
- Tracks ko size diya jata hai (jaise width aur height).

**Example:**
| Track 1 | Track 2 | Track 3 |

---

## 3. Grid Cell (ग्रिड सेल)
- Grid cell sabse chota space hota hai jo row aur column tracks ke intersection se banata hai.
- Ye ek table cell ya spreadsheet ke cell ki tarah hota hai.
- Agar items ko manually place nahi kiya jata, toh items automatically har grid cell mein ek ke hisab se place ho jate hain.

**Example:**
| Cell 1 | Cell 2 |
| Cell 3 | Cell 4 |

---

## 4. Grid Area (ग्रिड एरिया)
- Grid area multiple grid cells ka combination hota hai.
- Jab kisi item ko multiple tracks par span kiya jata hai, toh ek grid area ban jata hai.

**Example:**
| Area 1 | Area 1 |
| Cell 3 | Cell 4 |

---

## 5. Gaps (गैप्स)
- Gaps tracks ke beech ka space hota hai (jaise gutter ya alley).
- Gaps ek regular track ki tarah size lete hain, lekin inme content nahi place kiya ja sakta.
- Grid items ko gaps par span kiya ja sakta hai.

**Example:**
Cell 1	Gap	Cell 2  
Cell 3	Gap	Cell 4

---

## 6. Grid Container (ग्रिड कंटेनर)
- Grid container wo HTML element hota hai jisme `display: grid;` apply kiya jata hai.
- Ye apne direct children ke liye ek naya grid formatting context banata hai.

**Example:**
```css
.container {
  display: grid;
}
```

Summary:
Grid Lines: Grid banane wali lines.

Grid Tracks: Lines ke beech ka space.

Grid Cell: Row aur column tracks ka intersection.

Grid Area: Multiple cells ka combination.

Gaps: Tracks ke beech ka space.

Grid Container: display: grid; wala element.

Grid Item: Grid container ke direct children.
