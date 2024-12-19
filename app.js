const express = require("express")
const app = express()

const cors=require ('cors')
const dotenv = require('dotenv');
dotenv.config()

app.get("/",(req,res)=>{
    res.send("page accueil")
}
)

const mongoose = require('mongoose');

const categorieRouter =require("./routes/categorie.route")
//BodyParser Middleware
app.use(express.json());
app.use(cors())

const scategorieRouter =require("./routes/scategorie.route")
app.use('/api/scategories', scategorieRouter);

const articleRouter =require("./routes/article.route")
 
app.use('/api/articles', articleRouter);


// Connexion à la base données
//mongoose.connect(process.env.DATABASE)
mongoose.connect(process.env.DATABASECLOUD)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });


app.get("/accueil", (req, res) => {
    res.send("page daccueil")
}
)

app.use("/api/categories",categorieRouter);
app.listen(process.env.PORT, () => {
    console.log(`Server de Gigi Haf is listening on port ${process.env.PORT}`);
});

module.exports = app;