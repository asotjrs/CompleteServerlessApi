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


        },
        async write(data,TableName){

            if(!data.ID){
                    throw new Error("data passed with no ID")
            }

            const params= {
                TableName,
                Item:data
            }
            
            const res = await documentClient.put(params).promise();
            if (!res) {
                throw new Error(`There was an error inserting ID of ${data.ID} in table ${TableName}`);
            }


            return data;

        }

}

module.exports= Dynamo;
