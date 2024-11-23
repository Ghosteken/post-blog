Development Setup
To start the project in development mode, you need to follow these steps:

1. Install Dependencies
Before running the development server, ensure you have all the necessary dependencies installed.

Run the following command to install the dependencies defined in the package.json:

bash
Copy code
yarn install
This will install all the required packages and generate a yarn.lock file (if it doesn't exist already) to ensure consistent installations across all environments.

2. Start the Development Server
To run the development server, use the following command:

bash
Copy code
yarn dev
This will start the server in development mode, typically on a local server (http://localhost:3000), depending on the configuration of your project.

3. View the Application
Once the development server is running, open your browser and visit:

arduino
Copy code
http://localhost:3000
Your project should now be up and running in development mode, with live-reloading enabled.

4. Troubleshooting
If you encounter issues during the setup or running of the application, ensure that you:

Have the correct versions of Node.js and Yarn installed.
Have installed all dependencies with yarn install.
Check for any error messages in the terminal or browser and follow any troubleshooting steps they suggest.
