const express = require('express');
const app = express();
const path = require('path');
const tasks = require('./routes/tasks')
const {dbconnect} = require('./db/connect')

// middleware
app.use(express.static('./public'))
app.use(express.json())


// routes
// app.get('/hello', (req, res) => {
//   res.send('Task Manager App')
// })


app.use('/api/v1/tasks',tasks)



// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

dbconnect



// Define the directory where your HTML files are located
const publicDirectoryPath = path.join(__dirname, '/public');

// Set up middleware to serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Start the server on a specific port (e.g., 3000)
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





