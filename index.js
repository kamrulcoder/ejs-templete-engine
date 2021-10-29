const express = require("express");
const morgan = require("morgan")

// dependecies  use 
const app = express();
app.use(morgan("dev"))

// ejs set 
app.set("view engine", "ejs");

// for parsing application/json
app.use(express.json()) 



 // for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))


app.get("/about", (req, res)=> {
    res.render("pages/about", {
        title:"About Page "
    })
})

app.get("/contact", (req, res)=> {
    res.render("pages/contact", {
        title:"Contact Page  "
    })
})


app.get("/", (req, res)=> {
    let post =  {
        title:"Post Title ",
        body:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ratione culpa deserunt quibusdam inventore maiores cumque tempora, voluptate nobis delectus pariatur sapiente? Consequuntur magnam sapiente minima tempora dicta repellat id.",
        published:true
    }

    let posts = [
        {title:"title  one ", author:"kamrul hasan "},
        {title:"title  one ", author:"kamrul hasan "},
        {title:"title  one ", author:"kamrul hasan "},
        {title:"title  one ", author:"kamrul hasan "}
    ]
    res.render("pages/index", {
        title:"Ejs templete practice ",post,posts
    });
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("you are success  and your PORT :- ", PORT);
})