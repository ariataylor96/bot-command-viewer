import express from 'express';
import path from 'path';

import getDb from 'db';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/:botName', async (req, res) => {
  const { botName } = req.params;

  const db = await getDb(botName);
  const commandsCollection = await db.collection('commands');

  const commands = await commandsCollection.find({}).toArray();

  res.render('list', { botName, commands });
});

app.listen(3000, () => {
  console.log('Ret-2-Go!');
});
