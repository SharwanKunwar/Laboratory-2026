# Sorting Algorithms

This document explains three important sorting algorithms:
- Selection Sort
- Insertion Sort
- Shell Sort

---

## 1️⃣ Selection Sort

### 🔹 Idea (One Line)
Repeatedly select the smallest element from the unsorted part and place it at the beginning.

### 🔹 How It Works
- Assume the first element is the minimum
- Compare it with remaining elements
- Find the smallest element
- Swap it with the first position
- Move to the next position and repeat

### 🔹 Example
**Array:** `64, 25, 12, 22, 11`

- Pass 1 → smallest = 11 → swap with 64  
  `11, 25, 12, 22, 64`

- Pass 2 → smallest = 12  
  `11, 12, 25, 22, 64`

- Pass 3 → smallest = 22  
  `11, 12, 22, 25, 64`

**Sorted Array:** ✅

### 🔹 Properties
- **Time Complexity**
    - Best Case: O(n²)
    - Average Case: O(n²)
    - Worst Case: O(n²)
- **Space Complexity:** O(1)
- **Stable:** ❌ No
- **In-place:** ✅ Yes

### 🔹 When to Use
✔ Small datasets  
✔ When minimum number of swaps is required

---

## 2️⃣ Insertion Sort

### 🔹 Idea (One Line)
Builds the sorted list one element at a time by inserting elements into their correct position.

### 🔹 How It Works
- Assume the first element is already sorted
- Take the next element (key)
- Compare it with previous elements
- Shift larger elements to the right
- Insert the key at the correct position

### 🔹 Example
**Array:** `8, 3, 5, 2`

- Step 1: `8 | 3 5 2`
- Insert 3 → `3, 8 | 5 2`
- Insert 5 → `3, 5, 8 | 2`
- Insert 2 → `2, 3, 5, 8`

**Sorted Array:** ✅

### 🔹 Properties
- **Time Complexity**
    - Best Case: O(n) *(Already sorted)*
    - Average Case: O(n²)
    - Worst Case: O(n²)
- **Space Complexity:** O(1)
- **Stable:** ✅ Yes
- **In-place:** ✅ Yes

### 🔹 When to Use
✔ Nearly sorted arrays  
✔ Small datasets  
✔ Used in advanced algorithms like **TimSort**

---

## 3️⃣ Shell Sort

### 🔹 Idea (One Line)
An optimized version of insertion sort that compares elements far apart using a gap.

### 🔹 How It Works
- Choose a gap (usually n/2)
- Perform insertion sort for elements at that gap
- Reduce the gap
- Repeat until gap becomes 1

### 🔹 Example
**Array:** `12, 34, 54, 2, 3`

- Gap = 2  
  Compare (12, 54), (34, 2), (54, 3)

  After gap sorting:  
  `12, 2, 3, 34, 54`

- Gap = 1 (Normal insertion sort)  
  `2, 3, 12, 34, 54`

**Sorted Array:** ✅

### 🔹 Properties
- **Time Complexity**
    - Best Case: O(n log n)
    - Average Case: O(n¹·⁵)
    - Worst Case: O(n²)
- **Space Complexity:** O(1)
- **Stable:** ❌ No
- **In-place:** ✅ Yes

### 🔹 When to Use
✔ Medium-sized arrays  
✔ Faster than insertion sort  
✔ When memory is limited

---

## 🔥 Quick Comparison Table

| Algorithm        | Best Case | Average Case | Worst Case | Stable | In-place |
|------------------|-----------|--------------|------------|--------|----------|
| Selection Sort   | O(n²)     | O(n²)        | O(n²)      | ❌     | ✅       |
| Insertion Sort   | O(n)      | O(n²)        | O(n²)      | ✅     | ✅       |
| Shell Sort       | O(n log n)| O(n¹·⁵)      | O(n²)      | ❌     | ✅       |

---

## 💡 Exam Tips (Very Important)

- **Best for nearly sorted array:** Insertion Sort
- **Minimum swaps required:** Selection Sort
- **Improved insertion sort:** Shell Sort

---
