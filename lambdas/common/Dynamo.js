const AWS = require("aws-sdk")

const documentClient = new AWS.DynamoDB.DocumentClient()



const Dynamo={
        async get(ID,TableName){

            const params={
                TableName,
                Key:{
                    ID
                },
            }

            const data= await documentClient.get(params).promise();
            if(!data || !data.Item ){
                    throw new Error(`there was an error fetching the data for ID of ${ID} from the ${TableName} table`)
            }

            console.log("data fetched from the table ===> ", data)

            return data.Item


        }

}

module.exports= Dynamo;
