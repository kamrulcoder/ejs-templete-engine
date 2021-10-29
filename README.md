# Ejs Templete Engine 

> ###  Whats is EJS? 
> >
 >  EJS হল একটি সাধারণ টেমপ্লেটিং ভাষা যা আপনাকে প্লেইন জাভাস্ক্রিপ্ট দিয়ে HTML মার্কআপ তৈরি করতে দেয়। কীভাবে জিনিসগুলিকে সংগঠিত করতে হয় সে সম্পর্কে কোনও ধর্মীয়তা নেই। পুনরাবৃত্তি এবং নিয়ন্ত্রণ-প্রবাহের কোন পুনঃউদ্ভাবন নেই। এটা শুধু প্লেইন জাভাস্ক্রিপ্ট.

 <br/>


> ## How to setup ejs?
> 

<br>

#### Ejs Install Command 
    npm install ejs

#### Index js file require and setup

```javascript
// ejs set 
    app.set("view engine", "ejs");

// and new folder create name is views 
```

####  How to use  ejs templete for condtion 
```javascript
    <% if(post.published) { %>
        <h3>
            <%= post.title %>
        </h3>
        <p>
            <%= post.body %>
        </p>
        <% } else{%>
            <p>Not found Post </p>
     <% } %>
```

####  How to use  ejs templete  for variable   
```javascript 
  <%= title %>
```

