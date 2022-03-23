'use strict'
const Responses=require("../common/API_Responses")
const tableName = process.env.tableName

const Dynamo= require("../common/Dynamo")
exports.handler = async event => {
    console.log(event)
   
    if (!event.pathParameters || !event.pathParameters.ID) {
        //fail without an ID

        return  Responses._400({message:"missing ID in the path parameters"})
    }

    let ID = event.pathParameters.ID
    const user= JSON.parse(event.body);
    user.ID= ID

    const newUser= await Dynamo.write(user, tableName).catch(err=>{
        console.log("error in dynamoDB write ", err)
        return null
    })


    if(!newUser){
        return Responses._400({message:"failed to add user by ID"})
    }

    return Responses._200({newUser})

}