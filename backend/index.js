const express = require('express');
const AWS = require('aws-sdk')
const app = express();
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
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});