const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
const app = express();

// const articlesInfo = {
//     'learn-react': {
//         comments: [],
//     },
//     "learn-node": {
//         comments: [],
//     },
//     "my-thoughts": {
//         comments: [],
//     },
// };

app.use(bodyParser.json());

const withDB = async(operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db("myblog");
        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
};

app.get('/api/articles/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
        const articlesInfo = await db
            .collection('articles')
            .findOne({ name: articleName });
        res.status(200).json(articlesInfo);
        client.close();
    }, res);
});

app.post('/api/articles/:name/add-comments', (req, res) => {
    const {userName, text} = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articlesInfo = await db
        .collection('articles')
        .findOne({ name: articleName });
        await db.collection('articles').updateOne(
            { name: articleName }, 
            {
                $set: {
                    comments: articlesInfo.comments.concat({ userName, text }),
                },
            }
        );
        const updatedArticleInfo = await db
            .collection('articles')
            .findOne({ name: articleName });
            res.status(200).json(updatedArticleInfo);
    }, res);
});

app.listen(8000, () => console.log("Listening on port 8000"));