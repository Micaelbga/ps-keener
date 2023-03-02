const mongodb = require('mongodb');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res)=>{
    const store = await loadTableCollection('store');
    res.send(await store.find({}).toArray());
});

router.post('/', async (req,res)=>{
    const store = await loadTableCollection('store');
    await store.insertOne({
        name: req.body.name,
        price: req.body.price,
        amount: req.body.amount
    });
    res.status(201).send();
});

router.put('/:id/:itemName/:amount/:movedAmount/:isAddedOnStore/:email', async (req,res)=>{
    const store = await loadTableCollection('store');
    await store.updateOne({_id: new mongodb.ObjectId(req.params.id)},
    {
        $set:{
            amount: req.params.amount

        }
    });

    const history = await loadTableCollection('history');
    await history.insertOne({
        itemName: req.params.itemName,
        email: req.params.email,
        date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        movedAmount: req.params.movedAmount,
        isAddedOnStore: req.params.isAddedOnStore

    })
    res.status(200).send()
});

router.delete('/:id', async (req, res)=>{
    const store = await loadTableCollection('store');
    await store.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send();
});

async function loadTableCollection(collection){
    const store = await mongodb.MongoClient.connect('mongodb+srv://Micaelbga:Micael14@dbvenda-online.jklxuub.mongodb.net/test',{
        useNewUrlParser: true
    });

    return store.db('venda-online').collection(collection);

}



module.exports = router;