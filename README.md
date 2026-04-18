# 💰 WealthWise AI – Smart Financial Assistant

## 🚨 Chosen Vertical

Personal Finance / AI Assistant

---

## 🧠 Problem Statement

Many individuals struggle to understand their spending habits and manage finances effectively. This often leads to overspending, low savings, and poor financial decisions.

---

## 💡 Solution

WealthWise AI is a smart financial assistant that analyzes user expense data and provides intelligent insights. It helps users identify overspending patterns, improve savings, and make better financial decisions.

---

## ⚙️ Approach & Logic

### 🔄 Workflow

1. User provides categorized expense data
2. System calculates total spending and distribution
3. Detects high-spending categories
4. Applies rule-based logic and AI prompts
5. Generates insights, suggestions, and a financial score

---

### 🧠 Decision Rules

* If any category exceeds **40%** → marked as overspending
* If total expenses are too high → low savings warning
* Financial score is calculated based on spending balance

---

## 🤖 Use of AI

This project uses structured prompting to simulate an AI-powered assistant. Prompts are designed to:

* Analyze financial data
* Generate insights
* Provide personalized suggestions

Developed using:

* Google Antigravity

---

## 📂 Project Structure

wealthwise-ai/

* README.md
* prompts.txt
* sample-input-output.json
* logic.js

---

## 📥 Sample Input

```json
{
  "food": 5000,
  "travel": 2000,
  "shopping": 3000
}
```

---

## 📤 Sample Output

```json
{
  "insight": "You are overspending on food",
  "suggestion": "Reduce food expenses by 20%",
  "score": "6/10"
}
```

---

## ⚠️ Assumptions

* Users provide monthly categorized expense data
* Categories are predefined
* Suggestions follow general financial practices

---

## 🔒 Security & Efficiency

* No sensitive data stored
* Lightweight and efficient design
* Minimal resource usage

---

## 🧪 Testing

* Tested with different expense inputs
* Verified overspending detection and scoring

---

## ♿ Accessibility

* Simple output format
* Easy to understand insights

---

## 🚀 Future Improvements

* Real-time expense tracking
* Advanced AI predictions
* Cloud integration

---

## 🧑‍💻 Author

Solo Developer – End-to-End Implementation
