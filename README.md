
# Zaillex

A brief description of the project and how to get it running 

I have used react and tailwind on the frontend and express and mongoDB on the backend


## Run Locally

Clone the project

```bash
  git clone https://github.com/Introfect/zaillex.git
```

Go to the project directory

open two terminals and navigate inside client and server folders seperately 


Install dependencies in both the folders 

```bash
  npm install
```
in the server folder you would need to add a .env file and copy paste the below lines, in the MONGO_URI  please add your mongodb connection link 
```bash
  MONGO_URI=your mongo url
  PORT=5000
  JWT_SECRET=secret
```
Start the server use the command on both client and server

```bash
  npm start
```




