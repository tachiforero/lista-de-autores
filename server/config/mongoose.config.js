const mongoose = require("mongoose"); //con esto traemos mongoose 

mongoose.connect("mongodb://localhost/petdb", { //con connect es como el fetch. Una promesa que nos conecta con  la BD mongo
//El ultimo /peliculasapi_db es como quiero que se llame la BD (esto puede variar)
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));