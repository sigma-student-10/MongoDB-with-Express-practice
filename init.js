const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "rakib",
        msg: "love you 3000",
        created_at: new Date(),
    },
    {
        from: "sakib",
        to: "rakib",
        msg: "hello how are you",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);

