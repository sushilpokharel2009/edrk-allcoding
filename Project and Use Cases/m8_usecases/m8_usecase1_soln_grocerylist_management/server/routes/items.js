var express = require('express');
var router = express.Router();
var mongojs = require('mongojs'); 
var db = mongojs('mongodb://edureka:edureka@ds161039.mlab.com:61039/grocerylist_edureka',['items']);

//Get All items

router.get('/items',function(req, res, next){
    db.items.find(function(err, items)
    {
        if(err)
        {
            return next(err);   
        }
            res.json(items);
    });
});

//Get Single Item

router.get('/item/:id',function(req, res, next){
    db.items.findOne({_id: mongojs.ObjectId(req.params.id) }, function(err, item)
    {
        if(err)
        {
            return next(err);   
        }
            res.json(item);
    });
});

//Save item

router.post('/item',function(req, res, next){
    var item = req.body;
    if(!item.title || !(item.isDone +'')){
            res.status(400);
            res.json({
                "error": "Invalid Input"
            }); 
           }
    else{
            db.items.save(item, function(err, item)
            {
                     if(err)
                         {
                            return next(err);   
                         }
                        res.json(item);
            });
    }
});

//delete item

router.delete('/item/:id',function(req, res, next){
    db.items.remove({_id: mongojs.ObjectId(req.params.id) }, function(err, item)
    {
        if(err)
        {
             return next(err);
        }
            res.json(item);
    });
});

//Update Item

router.put('/item/:id',function(req, res, next){
    var item = req.body;
    var updatedItem = {};
    //data validation
    if(item.isDone)
    {
        updatedItem.isDone = item.isDone;
    }
   
    if(item.title)
    {
        updatedItem.title = item.title;
    }
 
 //update the data into database

    if(!updatedItem)
    {
        res.status(400);
        res.json({
            "error":"Invalid Item Data"
        })
    }
    else
    {
        db.items.update({_id: mongojs.ObjectId(req.params.id) },updatedItem,{}, function(err, item)
             {
                if(err)
                    {
                        res.send(err);   
                     }
            res.json(item);
             });
    }
});

module.exports = router;