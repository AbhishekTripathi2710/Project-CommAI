# Project CommAI

**Project CommAI** is a full-stack application designed to provide AI-powered services, project management features, and user interaction in real-time. The backend leverages modern JavaScript frameworks and libraries to ensure scalability and performance.

## Features

- **AI Services**: Process user prompts using AI to generate responses or results.
- **Real-Time Communication**: Uses Socket.IO for real-time interactions.
- **User Management**: Secure authentication and user-related functionalities with JWT.
- **Project Routing**: Organized APIs for handling project-related data.
- **Prompt Engineering**: Trains models with instructions to generate modular, scalable, and maintainable code.
- **Database Integration**: MongoDB as the database for robust and scalable data storage.
- **Web Container Execution**: The application utilizes a web container to run AI-generated project files and create new servers. All file changes are stored in the database, allowing users to retrieve their previous work and chats seamlessly.

## Technologies Used

### Backend:
- **Node.js**
- **Express.js**
- **Socket.IO**
- **MongoDB**
- **JWT for Authentication**
- **Mongoose for Database Modeling**
- **Google Generative AI**

### Frontend (Placeholder):
- The project may have a frontend (not covered in this analysis).

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Project-CommAI-main
   ```

2. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the `backend` directory.
   - Add the following:
     ```env
     PORT=3000
     MONGO_URI=<your-mongo-database-uri>
     JWT_SECRET=<your-jwt-secret>
     GOOGLE_AI_KEY=<your-google-ai-key>
     ```

5. **Run the server:**
   ```bash
   npm start
   ```

6. **Access the application:**
   - The backend will run on `http://localhost:3000` by default.

## API Endpoints

### User Routes
- `POST /users/register`: Register a new user.
- `POST /users/login`: Authenticate and retrieve a JWT.

### Project Routes
- `GET /projects`: Retrieve all projects.
- `POST /projects`: Create a new project.

### AI Routes
- `GET /ai`: Process a user prompt and return results.

### Prompt Engineering
- The application uses the following code for AI integration and prompt engineering:

```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.4,
    },
    systemInstruction: `You are an expert in MERN and Development. You have an experience of 10 years in the development. You always write code in modular and break the code in the possible way and follow best practices. You use understandable comments in the code, you create files as needed, you write code while maintaining the working of previous code. You always follow the best practices of the development. You never miss the edge cases and always write code that is scalable and maintainable. In your code, you always handle the errors and exceptions.

    Examples: 

    <example>

    user:Create an express application 
    response: {
    "text": "this is your fileTree structure of the express server",
    "fileTree": {
        "app.js": {
            file: {
                contents: "
                const express = require('express');

                const app = express();

                app.get('/', (req, res) => {
                    res.send('Hello World!');
                });

                app.listen(3000, () => {
                    console.log('Server is running on port 3000');
                })
                "
            },
        },
        "package.json": {
            file: {
                contents: "
                {
                    "name": "temp-server",
                    "version": "1.0.0",
                    "main": "index.js",
                    "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1"
                    },
                    "keywords": [],
                    "author": "",
                    "license": "ISC",
                    "description": "",
                    "dependencies": {
                        "express": "^4.21.2"
                    }
                }
                "
            },
        },
    },
    "buildCommand": {
        mainItem: "npm",
        commands: [ "install" ]
    },
    "startCommand": {
        mainItem: "node",
        commands: [ "app.js" ]
    }
}

    user: Create an express application
    </example>

    IMPORTANT: Don't use file names like routes/index.js
    `
});

export const generatePrompt = async (prompt) => {
    const result = await model.generateContent(prompt);
    return result.response.text();
};
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

