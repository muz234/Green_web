let express = require('express');

let app = express();
let bodyparser = require('body-parser');
let Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres:rahmata05@localhost/postgres');

app.use( bodyparser.json() );
app.use( express.json() );
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
  });

console.log("testing");

//THIS IS FOR THE STUDENTS
let userItem = sequelize.define('userItems', 
{
	 //create name and material as strings,I
	 id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },



     product: Sequelize.STRING,
     unitsToProduce: Sequelize.STRING,
     revenue: Sequelize.STRING,
   
});


userItem.sync().then(function(){
   console.log("userItems is now ready to be used...");
 });


//          MORE RESOURCE



//************************************************************************************************************************************* */

//                                    STUDENTS SERVER REQUESTS
//this to get Students
//Jeff Causing problems
// app.get( "/fsoc", (req, res) =>{
//     //  campus.findOne({where:{campusname:"BCC"}})
//     //  .then( (result) => {

//     //  }
//      students.findAll({where:{campusname:"BCC"}})
//      .then( data => res.json(data))
//     // }
//     //res.send("Hello Yacoub");
//   }
//   );

app.get( "/userItems", (req, res) =>
    userItem.findAll().then( (result) => res.json(result) )
  );

//tis is to get students by id
  app.get( "/userItems/:id", (req, res) =>
  userItem.findById(req.params.id).then( (result) => res.json(result))
);

//this to post student

app.post("/addItems", function (req, res){ 
      userItem.create({
      product: req.body.product,
      unitsToProduce: req.body.unitsToProduce,
      revenue: req.body.revenue
    }).then( (result) => res.json(result) )
});

//this is to put in student
//   app.put( "/useritems/:id", function (req, res){
//   userItem.findById.update({

//   revenue: req.body.revenue

//   },
//   {
// 	where: {
// 	  id: req.params.id
// 	}
//   }).then( (result) => res.json(result) )
//   });
//This is to delete student
app.delete( "/userItems/:id", function (req, res){
  userItem.destroy({
	where: {
	  id: req.params.id
	}
  }).then( (result) => res.json(result) )
});

/******************************************************************************************************************** */


/********************************************************************************************************************* */

app.listen(4000, function () {
console.log('Example app listening on port 4000!');
});