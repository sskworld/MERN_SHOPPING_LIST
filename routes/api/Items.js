const express = require('express');
const router = express.Router();

const Item = require('../../models/Items');

router.get('/', (req, res) => {
    Item.find()
    .sort({ date : -1 })
    .then(items => res.json(items))
})

router.get('/:id', (req, res) => {
    Item.findById( req.params.id, (err, item) => {
        if(err) return res.status(400).send(err)
        return res.status(200).send(item)
    });
})

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
    .then(item=>res.json(item)); 
})

router.put('/:id', (req, res) => {
    Item.findOneAndUpdate( req.params.id,
        { $set:{ name: req.body.name }}, {new:true, upsert: true},
        (err, item) => {
            if(err) return res.status(400).send(err)
            return res.status(200).send(item)
        });
});

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then(
        item => item.remove()
        .then(() => res.json({ success: true })) )
        .catch(err => res.status(404).json({ success: false}) )
})

module.exports = router;