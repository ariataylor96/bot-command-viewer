import { MongoClient } from 'mongodb';

const getDb = async bot => {
  const client = new MongoClient(`mongodb://db:27017/${bot}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  return client.db(bot);
};

export default getDb;
