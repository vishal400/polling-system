# Polling System

The Polling System is a web application that allows users to create polls, add options, and vote on those options.

## Features
- Create Questions
- Add Options to Questions
- Add Votes to an Option of a Specific Question
- Delete Options
- Delete Questions

## Files and Folder Structure
```bash
    ├── config
    |  └── mongoose.js
    ├── controllers
    |  └── api
    |     ├── options_api.js
    |     └── questions_api.js
    ├── index.js
    ├── models
    |  ├── Option.js
    |  └── Question.js
    ├── package.json
    ├── README.md
    └── routes
    ├── api
    |  ├── index.js
    |  ├── options.js
    |  └── questions.js
    └── index.js
```

## Getting Started
To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/vishal400/polling-system.git
   ```
2. Install dependencies:
   ```bash
   npm intall
   ```
3. Start application:
   ```bash
   npm start
   ```
