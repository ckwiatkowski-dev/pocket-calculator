# Pocket Calculator App✨

## Project Description 📍

The **Pocket Calculator App** is a sleek, responsive web-based calculator designed to handle everyday mathematical operations with ease. Inspired by the aesthetic design of the iPhone calculator, this app provides users with an intuitive interface and smooth functionality for a delightful calculation experience.

### Key Features 🌟

- **Basic Arithmetic Operations** – Perform addition, subtraction, multiplication, and division effortlessly.
- **Real-time Updates** – Automatically converts expressions into results after pressing the spacebar or equals (`=`).
- **Smart Expression Handling** – Seamlessly transitions calculations into results for continuous operations.
- **Error Prevention** – Restricts invalid actions, like multiple operators in a row, or pressing equals without a valid expression.
- **Dynamic Sign Changing** – Change the sign of any number in an equation with a single click of the `+/-` button, encapsulating negative numbers in parentheses for clarity.
- **Modern UI Design** – Inspired by iOS calculator aesthetics with vibrant colors, rounded buttons, and a clean, professional layout.
- **Responsive Design** – Optimized for desktops, tablets, and mobile devices.

---

## Technologies ⚙️

The Handy Calculator App is built with the following technologies:
- **React** – for building the user interface.
- **TypeScript** – for type-safe development and better maintainability.
- **CSS Modules** – for modular and scoped styling, ensuring a polished and modern look.

---

## How to Run the Project Locally 🔧

To run the **Pocket Calculator App** on your local machine, follow these steps:

### 1. Clone the Repository

Clone the project repository to your local machine using the following command:

```bash
git clone https://github.com/ckwiatkowski-dev/pocket-calculator
```

Navigate into the project folder:

```bash
cd pocket-calculator
```

---

### 2. Install Dependencies

Use `npm` (or `yarn`) to install all necessary packages:

```bash
npm install
```

---

### 3. Run the Application

Start the development server with the following command:

```bash
npm start
```

Visit the app in your browser at [http://localhost:3000](http://localhost:3000).

---

### 4. Troubleshooting

#### **Common Issues:**
- **Problem:** Missing Node.js or npm.
  - **Solution:** Ensure that you have [Node.js](https://nodejs.org/) installed on your machine. Run `node -v` and `npm -v` to check.
- **Problem:** App doesn’t load or crashes.
  - **Solution:** Restart the app by stopping the development server (`Ctrl + C`) and running `npm start` again.

---

## Features in Action 🚀

### Basic Usage

1. Perform simple operations such as `5 + 10` or `50 / 2`.
2. Press the `=` button or spacebar to calculate results.
3. Continue typing new operations, and the previous result will be reused seamlessly.

### Advanced Behavior

- **Changing signs:**
  - Input `5`, press `+/-` → Displays `(-5)`.
  - Input `(-5) + 10`, press `+/-` on `10` → Changes to `(-5) + (-10)`.
- **Prevents invalid expressions:**
  - Clicking `=` without an equation does nothing.
  - Disallows adding multiple operators, e.g., `5 ++` is corrected automatically.

---

## Building the App for Production 📦

To build the app for production, run:

```bash
npm run build
```

This creates an optimized `build/` folder that can be deployed to platforms like **Netlify** or **Vercel**.

---

## License 📝

This project is licensed under an **All Rights Reserved** license. The code, design, and all assets are protected and cannot be copied, modified, or distributed without explicit permission.

---

## Acknowledgments 🙏

Thank you for exploring the Pocket Calculator App! This project showcases my skills in **React**, **TypeScript**, and **frontend development**. Feel free to share feedback or ask questions—your input is always welcome!

---

## Contact 📬

```bash
Email: cyprkwiat@gmail.com
```

---

## Future Improvements 🚀

```bash
- Add scientific functions like trigonometry, square roots, and exponents.
- Implement a history log for previous calculations.
- Include a dark mode toggle.
```

---

## Demo 🌐

Check out the live demo of the Handy Calculator App here: [Pocket Calculator Demo](https://handy-calculator-demo.netlify.app/)
