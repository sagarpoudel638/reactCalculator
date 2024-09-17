**React Calculator**

This is a simple calculator built using React, which allows users to perform basic arithmetic operations. The app features a dynamic display and clickable buttons, connected through event listeners to perform real-time calculations.

**Features**

•  Addition, Subtraction, Multiplication, and Division operations

•  Real-time calculation display

•  Responsive design

**Project Structure**

•  Wrapper.js: Contains the main structure of the calculator, including the "Display "and "Numpad"  components.

•  Display.js: Displays the current input or result.

•  Numpad.js: Contains the number and operator buttons, rendered using the Button component.

•  Button.js: Represents each button in the calculator.

  

**Getting Started**

  

**Prerequisites**

  

Before running the app, make sure you have the following installed on your machine:

  

•  [Node.js](https://nodejs.org/) (v14 or higher)

•  [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

  

**Installation**

  

1.  Clone the repository:   
		`git clone https://github.com/your-username/react-calculator.git`
2. Navigate to the project directory:
	`cd react-calculator`
3. Install the required dependencies:
	`npm install`
4. Alternatively, if you’re using Yarn:
	`yarn install`

**Starting the App**
To run the app in development mode, use the following command:
`npm start`
_Or if using Yarn:_
`yarn start`

The app will be available at [http://localhost:3000](http://localhost:3000) in your browser.

**Building the App**

 
To build the app for production, run:

`npm run build`
_Or if using Yarn:_
`yarn build`

The build files will be placed in the build/ folder, optimized for performance.

  

**Calculator Logic**

  

•  Each button is connected to an event listener using the forEach method in Numpad.js.

•  The display is updated dynamically through the Display.js component.

•  The eval() function is used to handle arithmetic operations when the user clicks the equals (=) button.

  

**Available Scripts**

  

•  npm start: Starts the development server.

•  npm run build: Builds the project for production.

•  npm test: Runs the test suite (if applicable).

•  npm run eject: Ejects the app from Create React App (not recommended).

  

**Technologies Used**

  

•  **React**: A JavaScript library for building user interfaces.

•  **CSS**: For styling the calculator components.

•  **JavaScript**: The logic behind the calculator operations.

  

**License**

  

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

  

**Contributing**

  

If you’d like to contribute to this project, feel free to fork the repository and submit a pull request with your improvements.