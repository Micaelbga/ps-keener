const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

router.get('/', async (req, res)=>{
    const history = await loadTableCollection();
    res.send(await history.find({}).toArray());
});

router.delete('/:id', async (req, res)=>{
    const history = await loadTableCollection();
    await history.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send();
});

async function loadTableCollection(){
    const history = await mongodb.MongoClient.connect('mongodb+srv://Micaelbga:Micael14@dbvenda-online.jklxuub.mongodb.net/test',{
        useNewUrlParser: true
    });

    return history.db('venda-online').collection('history');

}

module.exports = router;