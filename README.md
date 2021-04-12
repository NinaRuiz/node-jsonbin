# Node JsonBin API

## Install
Install npm packages:

`npm install`

## Run the app

Run node.js app: 

`npm run start`

## Run the tests
Run jest tests:

`jest`

# Rest API

On the project, there's a postman collection to easily
make the different requests.

`Node-JsonBin.postman_collection.json`

Rest API endpoints are describe below:

## Get countries

### Request

`GET /countries`

You can add some filter and decide the order of 
the returned countries with params. Ex.:

`GET /countries?filter=and&order=desc`

### Response

The response will have the next structure:

`{status: 'OK', data: []}`

## Get reverse

### Request

`GET /reverse/:word`

You can send any word with the query parameter word.

### Response

The response will have the next structure:

`{status: 'OK', data: <word>}`

## Get append array

### Request

`GET /append?start=hello&end=bye`

You can send one of the two params or both. At least it must have one of them.

### Response

The response will have the next structure:

`{status: 'OK', data: []}`

## Questions

### SQL databases you have experience with:

I had used SQL Server, MySql and SQLite. I usually use SQL databases
with a java backend.

### NOSQL databases you have experience with:

I used MongoDB and, on some personal projects, IndexedDB. MongoDb I mostly
use it with Node.js and Express API.

### Have you used RabbitMQ before? How long?

I didn't use Rabbit before, but I'm really interested on 
learn how to work with it. I have done my research, It's a
powerful tool for manage queueing I have had an eye on. 

### Do you have experience with git?

Yes. Almost since I begin programing I have been working with 
Git and using Gitflow on some projects.



