

db.Products.insertMany([
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price":26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    },
    {
        "id": "16",
        "product_name": "Small Soft Chair",
        "product_price": 47.00,
        "product_material": "Cotton",
        "product_color": "teal"
    },
    {
        "id": "17",
        "product_name": "Incredible Metal Car",
        "product_price":36.00,
        "product_material": "Fresh",
        "product_color": "indigo"
    },
    {
        "id": "18",
        "product_name": "Licensed Plastic Bacon",
        "product_price":88.00,
        "product_material": "Steel",
        "product_color": "yellow"
    },
    {
        "id": "19",
        "product_name": "Intelligent Cotton Chips",
        "product_price": 46.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "20",
        "product_name": "Handcrafted Wooden Bacon",
        "product_price": 36.00,
        "product_material": "Concrete",
        "product_color": "lime"
    },
    {
        "id": "21",
        "product_name": "Unbranded Granite Chicken",
        "product_price": 90.00,
        "product_material": "Metal",
        "product_color": "gold"
    },
    {
        "id": "22",
        "product_name": "Ergonomic Soft Hat",
        "product_price": 99.00,
        "product_material": "Rubber",
        "product_color": "black"
    },
    {
        "id": "23",
        "product_name": "Intelligent Steel Pizza",
        "product_price": 95.00,
        "product_material": "Cotton",
        "product_color": "azure"
    },
    {
        "id": "24",
        "product_name": "Tasty Rubber Cheese",
        "product_price":47.00,
        "product_material": "Frozen",
        "product_color": "orchid"
    },
    {
        "id": "25",
        "product_name": "Licensed Steel Car",
        "product_price":20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
    }
])

//Questions

//1.Find all the information about each products.
//ANSWER:
db.Products.find({})


//2.Find the product price which are between 400 to 800
//ANSWER:
db.Products.find({
    product_price: {
      $gte: 400,
      $lte: 800
    }
  })

//OUTPUT:
/*[
  {
    _id: ObjectId("63be3d246a45226a6bd878d5"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878d7"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878d8"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878da"),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878db"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  }
]*/

//3.Find the product price which are not between 400 to 600
//ANSWER
db.Products.find({
    product_price: {
      "$not": {
        "$gte": 400,
        "$lte": 600
      }
    }
  })

//OUTPUT:
/*[
  {
    _id: ObjectId("63be3d246a45226a6bd878d5"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878d6"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878d7"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878d9"),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878dc"),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878dd"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878de"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878df"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e0"),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e1"),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e2"),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e3"),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e4"),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e5"),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e6"),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e7"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e8"),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e9"),
    id: '21',
    product_name: 'Unbranded Granite Chicken',
    product_price: 90,
    product_material: 'Metal',
    product_color: 'gold'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878ea"),
    id: '22',
    product_name: 'Ergonomic Soft Hat',
    product_price: 99,
    product_material: 'Rubber',
    product_color: 'black'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878eb"),
    id: '23',
    product_name: 'Intelligent Steel Pizza',
    product_price: 95,
    product_material: 'Cotton',
    product_color: 'azure'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878ec"),
    id: '24',
    product_name: 'Tasty Rubber Cheese',
    product_price: 47,
    product_material: 'Frozen',
    product_color: 'orchid'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878ed"),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]*/

//4.List the four product which are grater than 500 in price 
//ANSWER
db.Products.find({product_price: {"$gte":500}})

//OUTPUT:
/*[
  {
    _id: ObjectId("63be3d246a45226a6bd878d5"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878d6"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878d7"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878db"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  }
]*/

//5.Find the product name and product material of each products
//ANSWER
db.Products.find({},
    {
      product_material: 1,
      product_name: 1
    })

//OUTPUT:
/*[
  {
    "_id": ObjectId("5a934e000102030405000000"),
    "product_material": "Concrete",
    "product_name": "Intelligent Fresh Chips"
  },
  {
    "_id": ObjectId("5a934e000102030405000001"),
    "product_material": "Cotton",
    "product_name": "Practical Fresh Sausages"
  },
  {
    "_id": ObjectId("5a934e000102030405000002"),
    "product_material": "Rubber",
    "product_name": "Refined Steel Car"
  },
  {
    "_id": ObjectId("5a934e000102030405000003"),
    "product_material": "Soft",
    "product_name": "Gorgeous Plastic Pants"
  },
  {
    "_id": ObjectId("5a934e000102030405000004"),
    "product_material": "Fresh",
    "product_name": "Sleek Cotton Chair"
  },
  {
    "_id": ObjectId("5a934e000102030405000005"),
    "product_material": "Plastic",
    "product_name": "Awesome Wooden Towels"
  },
  {
    "_id": ObjectId("5a934e000102030405000006"),
    "product_material": "Rubber",
    "product_name": "Practical Soft Shoes"
  },
  {
    "_id": ObjectId("5a934e000102030405000007"),
    "product_material": "Rubber",
    "product_name": "Incredible Steel Hat"
  },
  {
    "_id": ObjectId("5a934e000102030405000008"),
    "product_material": "Soft",
    "product_name": "Awesome Wooden Ball"
  },
  {
    "_id": ObjectId("5a934e000102030405000009"),
    "product_material": "Frozen",
    "product_name": "Generic Wooden Pizza"
  },
  {
    "_id": ObjectId("5a934e00010203040500000a"),
    "product_material": "Soft",
    "product_name": "Unbranded Wooden Cheese"
  },
  {
    "_id": ObjectId("5a934e00010203040500000b"),
    "product_material": "Wooden",
    "product_name": "Unbranded Plastic Salad"
  },
  {
    "_id": ObjectId("5a934e00010203040500000c"),
    "product_material": "Concrete",
    "product_name": "Gorgeous Cotton Keyboard"
  },
  {
    "_id": ObjectId("5a934e00010203040500000d"),
    "product_material": "Metal",
    "product_name": "Incredible Steel Shirt"
  },
  {
    "_id": ObjectId("5a934e00010203040500000e"),
    "product_material": "Rubber",
    "product_name": "Ergonomic Cotton Hat"
  },
  {
    "_id": ObjectId("5a934e00010203040500000f"),
    "product_material": "Cotton",
    "product_name": "Small Soft Chair"
  },
  {
    "_id": ObjectId("5a934e000102030405000010"),
    "product_material": "Fresh",
    "product_name": "Incredible Metal Car"
  },
  {
    "_id": ObjectId("5a934e000102030405000011"),
    "product_material": "Steel",
    "product_name": "Licensed Plastic Bacon"
  },
  {
    "_id": ObjectId("5a934e000102030405000012"),
    "product_material": "Soft",
    "product_name": "Intelligent Cotton Chips"
  },
  {
    "_id": ObjectId("5a934e000102030405000013"),
    "product_material": "Concrete",
    "product_name": "Handcrafted Wooden Bacon"
  },
  {
    "_id": ObjectId("5a934e000102030405000014"),
    "product_material": "Metal",
    "product_name": "Unbranded Granite Chicken"
  },
  {
    "_id": ObjectId("5a934e000102030405000015"),
    "product_material": "Rubber",
    "product_name": "Ergonomic Soft Hat"
  },
  {
    "_id": ObjectId("5a934e000102030405000016"),
    "product_material": "Cotton",
    "product_name": "Intelligent Steel Pizza"
  },
  {
    "_id": ObjectId("5a934e000102030405000017"),
    "product_material": "Frozen",
    "product_name": "Tasty Rubber Cheese"
  },
  {
    "_id": ObjectId("5a934e000102030405000018"),
    "product_material": "Cotton",
    "product_name": "Licensed Steel Car"
  }
]*/

//6.Find the product with a row id of 10
//ANSWER
db.Products.find({
    id: {
      $eq: "10"
    }
  })

//OUTPUT:
/*[
  {
    _id: ObjectId("63be3d246a45226a6bd878de"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  }
]*/

//7.Find only the product name and product material
//ANSWER:
db.Products.find({},
    {
      _id: 0,
      product_material: 1,
      product_name: 1
    })

//OUTPUT:
/*[
  {
    "product_material": "Concrete",
    "product_name": "Intelligent Fresh Chips"
  },
  {
    "product_material": "Cotton",
    "product_name": "Practical Fresh Sausages"
  },
  {
    "product_material": "Rubber",
    "product_name": "Refined Steel Car"
  },
  {
    "product_material": "Soft",
    "product_name": "Gorgeous Plastic Pants"
  },
  {
    "product_material": "Fresh",
    "product_name": "Sleek Cotton Chair"
  },
  {
    "product_material": "Plastic",
    "product_name": "Awesome Wooden Towels"
  },
  {
    "product_material": "Rubber",
    "product_name": "Practical Soft Shoes"
  },
  {
    "product_material": "Rubber",
    "product_name": "Incredible Steel Hat"
  },
  {
    "product_material": "Soft",
    "product_name": "Awesome Wooden Ball"
  },
  {
    "product_material": "Frozen",
    "product_name": "Generic Wooden Pizza"
  },
  {
    "product_material": "Soft",
    "product_name": "Unbranded Wooden Cheese"
  },
  {
    "product_material": "Wooden",
    "product_name": "Unbranded Plastic Salad"
  },
  {
    "product_material": "Concrete",
    "product_name": "Gorgeous Cotton Keyboard"
  },
  {
    "product_material": "Metal",
    "product_name": "Incredible Steel Shirt"
  },
  {
    "product_material": "Rubber",
    "product_name": "Ergonomic Cotton Hat"
  },
  {
    "product_material": "Cotton",
    "product_name": "Small Soft Chair"
  },
  {
    "product_material": "Fresh",
    "product_name": "Incredible Metal Car"
  },
  {
    "product_material": "Steel",
    "product_name": "Licensed Plastic Bacon"
  },
  {
    "product_material": "Soft",
    "product_name": "Intelligent Cotton Chips"
  },
  {
    "product_material": "Concrete",
    "product_name": "Handcrafted Wooden Bacon"
  },
  {
    "product_material": "Metal",
    "product_name": "Unbranded Granite Chicken"
  },
  {
    "product_material": "Rubber",
    "product_name": "Ergonomic Soft Hat"
  },
  {
    "product_material": "Cotton",
    "product_name": "Intelligent Steel Pizza"
  },
  {
    "product_material": "Frozen",
    "product_name": "Tasty Rubber Cheese"
  },
  {
    "product_material": "Cotton",
    "product_name": "Licensed Steel Car"
  }
]*/

//8.Find all products which contain the value of soft in product material
//ANSWER:
db.Products.find({
    product_material: "Soft"
  })

//OUTPUT:
/*[
  {
    _id: ObjectId("63be3d246a45226a6bd878d8"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878dd"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878df"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("63be3d246a45226a6bd878e7"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  }
]*/

//9.Find products which contain product color indigo  and product price 492.00
//ANSWER:
db.Products.find({
    $or: [
      {
        product_color: "indigo"
      },
      {
        product_price: 492.00
      }
    ]
  },
  {
    _id: 0,
    id: 0,
    product_material: 0
  })

//OUTPUT:
/*[
  {
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_color: 'indigo'
  },
  {
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_color: 'plum'
  },
  {
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_color: 'indigo'
  },
  {
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_color: 'indigo'
  },
  {
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_color: 'indigo'
  }
]*/

//10.Delete the products which product price value are same
//ANSWER:

db.Products.aggregate([
  {
      $group: {
          _id: "$product_price",
          duplicateProductIds: {$push: "$_id"}
      }
  },
  {
      $match: {
          duplicateProductIds: {$gt: [1]}
      }
  }
]).forEach(function(doc) {
  db.Products.deleteMany({_id: {$in: doc.duplicateProductIds}});
});


