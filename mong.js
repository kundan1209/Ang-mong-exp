const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB (replace 'your-mongodb-url' with your actual MongoDB connection string)
mongoose.connect('mongodb+srv://biswatosh:Biswa15@cluster0.xibsu9c.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for your blog posts
const blogSchema = new mongoose.Schema({
  data: String,
});

// Create a model based on the schema
const Blog = mongoose.model('Blog', blogSchema);

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    // Fetch all blog posts from MongoDB
    const blogs = await Blog.find();
    res.json({ blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/add-post", async (req, res) => {
  try {
    const { data } = req.body;

    // Create a new blog post
    const newBlog = new Blog({ data });

    // Save the new blog post to MongoDB
    await newBlog.save();

    res.json({ success: true, blog: newBlog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("server is listening on http://localhost:3000/");
});