import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app=express();
const port=3000;
app.set('view engine','ejs')
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

let newitems =[];
app.get("/", (req, res) => {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
  let day=today.toLocaleDateString("en-US", options);
  res.render("index.ejs",{kindofday: day, newlistitems: newitems});
  });

  app.post("/", (req, res) => {
  let newitem=req.body.newitem;
  newitems.push(newitem)
  res.redirect('/');
    });

app.listen(port,()=>{
    console.log(`This site is running on port ${port}`)
})
