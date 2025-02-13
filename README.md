# Famous Robot Scientists

This project is a simple **React application** that displays a list of famous scientists as robots. Users can search for a scientist by name using a search bar. The application dynamically filters and displays matching robots.

## 🚀 Features

- Display a list of famous scientists as robot cards.
- Search for a scientist dynamically.
- Responsive and visually appealing UI.
- Uses the **RoboHash API** to generate unique robot avatars.
- Uses React **useState** for state management.

## 🛠️ Technologies Used

- **React**: For building the UI.
- **JavaScript (ES6+)**: For logic and structure.
- **CSS**: For styling.
- **RoboHash API**: For generating robot avatars.

## 📂 Project Structure

```
📂 Project Root
├── 📄 App.jsx         # Main component rendering search and cards
├── 📄 CardComponent.jsx # Renders individual robot cards
├── 📄 SearchBox.jsx   # Search input component
├── 📄 robots.js       # Array of famous scientists
├── 📄 README.md       # Project documentation (this file)
```

## 🏗️ Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repository.git
   ```
2. **Navigate into the project directory:**
   ```sh
   cd your-repository
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Run the application:**
   ```sh
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173` (default for Vite).

## 🎮 Usage

- Start typing a scientist's name in the **search box** to filter the list.
- Each scientist is represented as a unique robot generated from **RoboHash**.
- Click or hover over a scientist's card for details (if extended in future versions).

## 📜 Code Overview

### **CardComponent.jsx**
This component receives scientist details as props and renders a card with an image, name, username, and email.

### **App.jsx**
- Manages the **searchField** state.
- Filters the `robots.js` array based on user input.
- Renders `SearchBox` and a list of `CardComponent` components.

### **SearchBox.jsx**
- Handles user input for searching scientists.

### **robots.js**
- Contains a static list of famous scientists with their details.

## 💡 Future Enhancements

- Add a **scientist details page** when clicking a robot.
- Fetch scientist data from an **API** instead of a static list.
- Improve UI with additional animations and styling.
- Implement sorting by fields like **name** or **username**.

## 🤝 Contributing
Contributions are welcome! Feel free to **fork** this repository, submit issues, or create pull requests.

## 📜 License
This project is licensed under the **MIT License**.

---

📌 **Made with ❤️ using React**

# Robot-scientist
