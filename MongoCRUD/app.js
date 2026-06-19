const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    
    await client.connect();

    console.log("Connected");

    const db = client.db("College");

    const collection = db.collection("student");

    // INSERT
    const result = await collection.insertOne({
        name: "Monisha",
        age: 18,
        dept: "CSE"
    });

    console.log("Inserted");

    // FIND
    const students = await collection.find().toArray();

    console.log(students);

    // UPDATE
    await collection.updateOne(
        { _id: result.insertedId },
        { $set: { age: 20 } }
    );

    console.log("Updated");

    // DELETE
    const del = await collection.deleteOne({
        _id: result.insertedId
    });

    console.log("Deleted");

    await client.close();
}

main();