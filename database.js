const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://pskaushal88:4wW8mLTq8bqfJb67@namastenode.g5n4p.mongodb.net/";
const client = new MongoClient(url);
const dbName = "First_Database";

async function main() {
  await client.connect();
  console.log("Connected successfully to the server.");
  const db = client.db(dbName);
  const collections = db.collection("User");
  const data = {
    firstname: "Saras",
    lastname: "Kaushal",
    country: "India",
    city: "Banglore",
  };

  //   const insertData = await collections.insertMany([data]);
  //   const insertOneData = await collections.insertMany(data);
  //   console.log("Inserted data to database", insertData);
  //   const findResult = await collections.find({}).toArray();
  //   console.log("Found documnets=>", findResult);
  //   const countResult = await collections.countDocuments({});
  //   console.log(`we have total ${countResult} documents in our db.`);

  // find all the docs which have saras as the first name
  const result = await collections.find({ firstname: "Saras" }).toArray();
  console.log("Result=>", result);
  const updateResult = await collections.updateOne(
    { firstname: "Saras" },
    { $set: { firstname: "Aabha" } }
  );
  console.log(updateResult.matchedCount);
  console.log(updateResult.modifiedCount);
  const deleteDoc = await collections.deleteOne({ firstname: "Aabha" });
  console.log(deleteDoc);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
