const todoItemModel = require('../model/todoItem');
const errorHandler = require('../middleware/errorHandler')


//Posting item
const addItem = errorHandler( async (req, res) =>{
        const newItem = new todoItemModel({
            title: req.body.title,
            description:req.body.description
         });
        // Saving to Database
        const saveItem =  await newItem.save();
        res.status(200)
        res.json('Item added')
    
});

// Get All Items
const getItems = errorHandler( async (req, res) =>{
        const allTodoItems = await todoItemModel.find({});
        res.status(200);
        res.json(allTodoItems);
     });
     
//  Find Item by Id And Update Item
const updateItem =  errorHandler(async (req, res) =>{ 
    const updateItem =  await todoItemModel.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200);
    res.json('Item Updated');
});
//  Find Item by Id And Delete Item 
const deleteItem = errorHandler(async (req, res) =>{
    const deleteItem  = await todoItemModel.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json("Item Deleted");

});

module.exports = {addItem , getItems, updateItem, deleteItem}