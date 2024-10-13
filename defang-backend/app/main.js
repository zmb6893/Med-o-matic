const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("/", (req, res) => {
    res.send({
        "path" : req.path,
        "method" : req.method,
        "headers" : req.headers,
        "args" : req.query,
        "body" : req.body
    });
});

const AWS = require('aws-sdk')
const PORT = process.env.PORT || 3000;

require('dotenv').config({ path: './conf/.env' }); // Add this line if using a .env file
AWS.config.update({ region: process.env.AWS_REGION });
console.log(process.env.AWS_SECRET_ACCESS_KEY)

const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' }); // Change to your AWS region

// Route to get data from DynamoDB
app.get('/tasks', async (req, res) => {
	const params = {
	  TableName: 'mock-data'
	};
  
	try {
	  const data = await dynamoDb.scan(params).promise();
	  res.json(data.Items);
	} catch (error) {
	  console.error('Error fetching data from DynamoDB:', error);
	  res.status(500).json({ error: 'Could not retrieve data' });
	}
  });

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my Express server!');
});

// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
