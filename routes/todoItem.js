const express = require('express');
const app = express();
const router = express.Router();
// Import Controller
const {addItem , getItems, updateItem, deleteItem} = require('../controller/todoItemController');


//Posting item
router.post('/api/item', addItem );

//Get  All Items
router.get('/api/items', getItems);

//Find Item by Id And Update Item 
router.put('/api/item/:id', updateItem);

// Find Item by Id And Delete Item 
router.delete('/api/item/:id', deleteItem);


module.exports = router;