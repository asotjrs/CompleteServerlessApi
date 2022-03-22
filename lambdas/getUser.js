'use strict'
const Responses=require("./API_Responses")
exports.handler = async event => {
    console.log(event)
   
    if (!event.pathParameters || !event.pathParameters.ID) {
        //fail without an ID

        return  Responses._400({message:"missing ID in the path parameters"})
    }

    let ID= event.pathParameters.ID

    if(data[ID]){
        //return the data
        console.log("=====================================>",   data[ID])

        return Responses._200(data[ID])
    }






    // when there is no data 
    return Responses._400({message:"There are no data for the given ID"})


}


const data = {
    1234: { name: 'Anna Jones', age: 25, job: 'journalist' },
    7893: { name: 'Chris Smith', age: 52, job: 'teacher' },
    5132: { name: 'Tom Hague', age: 23, job: 'plasterer' },
};