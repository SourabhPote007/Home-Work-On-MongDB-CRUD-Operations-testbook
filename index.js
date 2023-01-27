const { MongoClient } = require('mongodb');
async function main()
{
    const uri = "mongodb+srv://SourabhNew:pwd@mongodb.jnyxccz.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    
    try
    {
        await client.connect();
        await listDatabase(client);
        // await createData(client, {name:"SuperHero", summary:"Best Movie Ever"});
        // await findMovieByName(client, "SuperHero");
        // await DeleteMovieByName(client, "SuperHero");
        // await UpdateMovieByName(client, "SuperHero", "SuperHeroPartTwo");

    }catch(e){
        console.log(e);
    }finally{
        await client.close();
    }
}
//For List Of DBs in your cloud..
async function listDatabase(client){
    dbList = await client.db().admin().listDatabases();
    console.log("Available Databases Are :");
    dbList.databases.forEach(db => {
        console.log(` - ${db.name}`);
    });
}
//1.To Create Data And To Add Data in collections Create Function.
// async function createData(client, newData){
//     const result = await client.db("sample_airnub").collection("listingAndReviews").insertOne(newData);
//     console.log("New data added :" + result.insertedId);
// }

//2.To find that created data Find Function.
// async function findMovieByName(client, movieName){
//     const result = await client.db("sample_airnub").collection("listingAndReviews").findOne({ name: movieName });
//     if(result)
//     {
//         console.log("Found a match!" + result.name);
//     }
//     else
//     {
//         console.log("Nothing found");
//     }
// }

//3.To Delete that data Delete Function.
// async function DeleteMovieByName(client, movieName){
//     const result = await client.db("sample_airnub").collection("listingAndReviews").deleteOne({ name: movieName });
//     if(result)
//     {
//         console.log("Movie Deleted!" + result);
//     }
//     else
//     {
//         console.log("Not found!");
//     }
// }

//4.To Update the Movie name Update Function.
// async function UpdateMovieByName(client, movieName, UpdateName){
//     const result = await client.db("sample_airnub").collection("listingAndReviews").updateOne({ name: movieName},{$set:{name: UpdateName}});
//     if(result)
//     {
//         console.log("Movie Updated!" + result.name);
//     }
//     else
//     {
//         console.log("Not found!");
//     }
// }

main().catch(console.error);