// const mongoose = require("mongoose")


// const conn = async(req,res)=>{
//     await mongoose
//     .connect("mongodb+srv://urenividunika:<C6VEHT1lxezbp9M4>@cluster0.lkr543p.mongodb.net/")
//     .then(()=>{
//        console.log("Connected")
//     })
// };
// conn();

// MTgm2mOpdnhhlYF6

// C6VEHT1lxezbp9M4

const mongoose = require("mongoose");

const conn = async () => {
  const password = "C6VEHT1lxezbp9M4"; // Replace with your actual MongoDB password

  try {
    await mongoose.connect(
      `mongodb+srv://urenividunika:${password}@cluster0.lkr543p.mongodb.net/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

conn();
