const AWS = require('aws-sdk');
  const getMovie = async(event) =>  {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters;
        // método get para obtener un elemento:
        const result = await dynamodb.get({
            TableName: 'MoviesTable',
            Key: {
                id
            }
        }).promise();

        const movie = result.Item;
        return {
            status: 200,
            body: {
                movie
            }
        };
    } catch(error) {
        console.log(error);
    }    
  }
  module.exports = {
    getMovie
  }
