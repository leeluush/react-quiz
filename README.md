# 🧠 React Quiz Application

This project is a comprehensive quiz application built with React. It leverages modern React features, including `useReducer` for state management, and dynamically fetches quiz questions from a JSON server. The application includes features such as a countdown timer, real-time scoring, and interactive feedback to enhance the user experience.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Features
- 📝 **Dynamic Data Fetching**: Fetches quiz questions from a JSON server.
- 🔄 **State Management**: Uses `useReducer` for managing complex state transitions.
- 🎨 **Interactive Components**: Modular components including `Header`, `Question`, `Timer`, and `Progress`.
- ⚡ **Real-Time Feedback**: Provides immediate feedback on answers with visual indicators.
- ⏱️ **Timer and Scoring**: Includes a countdown timer and real-time scoring.
- 📱 **Responsive Design**: Styled to be responsive and user-friendly on various devices.
- ❗ **Error Handling**: Robust error handling for API failures.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/react-quiz-app.git
    cd react-quiz-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Usage

1. **Start the JSON server**:
    ```bash
    npm run server
    ```

2. **Start the React application**:
    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

- 🚀 **Start Development Server**:
    ```bash
    npm start
    ```
    Runs the app in development mode. Open `http://localhost:3000` to view it in the browser.

- 🔧 **Start JSON Server**:
    ```bash
    npm run server
    ```
    Starts the JSON server to serve quiz questions from `data/questions.json`.

- 🏗️ **Build**:
    ```bash
    npm run build
    ```
    Builds the app for production to the `build` folder.

- ✅ **Run Tests**:
    ```bash
    npm test
    ```
    Launches the test runner in interactive watch mode.

- ⚙️ **Eject**:
    ```bash
    npm run eject
    ```
    If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Dependencies

- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **React Scripts**: 5.0.1
- **JSON Server**: ^1.0.0-alpha.23
- **@testing-library/react**: ^13.4.0
- **@testing-library/jest-dom**: ^5.17.0
- **@testing-library/user-event**: ^13.5.0
- **Web Vitals**: ^2.1.4

## License

This project is licensed under the MIT License.
