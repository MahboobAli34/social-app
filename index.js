// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const jwt = require("jsonwebtoken");
// // const mongoose = require("mongoose");
// // const cors = require("cors"); // Import cors package

// // const app = express();
// // const port = 3000;
// // const secretKey = "shhhhh1212121";

// // app.use(cors()); // Enable CORS for all routes
// // app.use(bodyParser.json());

// // // MongoDB connection
// // mongoose.connect("mongodb://127.0.0.1:27017/Kashif-db1", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(() => console.log("Connected to MongoDB successfully"))
// // .catch((err) => console.error("Error connecting to MongoDB:", err.message));

// // // Remaining code (schema, routes, etc.)

// // // User Schema
// // const userSchema = new mongoose.Schema({
// //   email: String,
// //   username: String,
// //   phone: Number,
// //   password: String
// // });
// // const User = mongoose.model("User", userSchema);

// // // Signup route
// // app.post("/signUp", async (req, res) => {
// //   const { email, username, phone, password } = req.body;

// //   try {
// //     const user = await User.create({ email, username, phone, password });
// //     res.status(200).json({ message: "User signed up successfully" });
// //   } catch (error) {
// //     console.error("Error in signUp:", error.message);
// //     res.status(500).json({ message: "Server Error", error: error.message });
// //   }
// // });

// // // Login route
// // app.post("/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email, password });
// //     if (!user) {
// //       return res.status(401).json({ message: "Invalid email or password" });
// //     }

// //     // Generate JWT token
// //     const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });
// //     res.status(200).json({ message: "Login successful", token });
// //   } catch (error) {
// //     console.error("Error in login:", error.message);
// //     res.status(500).json({ message: "Server Error", error: error.message });
// //   }
// // });
// // const postSchema = new mongoose.Schema({
// //   userId: mongoose.Schema.Types.ObjectId,
// //   content: String,
// //   createdAt: { type: Date, default: Date.now },
// // });
// // const Post = mongoose.model("Post", postSchema);

// // // Signup route
// // app.post("/signUp", async (req, res) => {
// //   const { email, username, phone, password } = req.body;
// //   try {
// //     const user = await User.create({ email, username, phone, password });
// //     res.status(200).json({ message: "User signed up successfully" });
// //   } catch (error) {
// //     console.error("Error in signUp:", error.message);
// //     res.status(500).json({ message: "Server Error", error: error.message });
// //   }
// // });

// // // Login route
// // app.post("/login", async (req, res) => {
// //   const { email, password } = req.body;
// //   try {
// //     const user = await User.findOne({ email, password });
// //     if (!user) {
// //       return res.status(401).json({ message: "Invalid email or password" });
// //     }

// //     // Generate JWT token
// //     const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });
// //     res.status(200).json({ message: "Login successful", token });
// //   } catch (error) {
// //     console.error("Error in login:", error.message);
// //     res.status(500).json({ message: "Server Error", error: error.message });
// //   }
// // });

// // // Middleware to protect routes
// // function authenticateToken(req, res, next) {
// //   const authHeader = req.headers["authorization"];
// //   const token = authHeader && authHeader.split(" ")[1];
// //   if (!token) return res.status(401).json({ message: "Access Denied" });

// //   jwt.verify(token, secretKey, (err, user) => {
// //       if (err) return res.status(403).json({ message: "Invalid Token" });
// //       req.userId = user.userId;
// //       next();
// //   });
// // }


// // // Create Post
// // app.post("/posts", authenticateToken, async (req, res) => {
// //   const { content } = req.body;
// //   try {
// //     const post = await Post.create({ userId: req.userId, content });
// //     res.status(201).json({ message: "Post created successfully", post });
// //   } catch (error) {
// //     console.error("Error creating post:", error.message);
// //     res.status(500).json({ message: "Server Error", error: error.message });
// //   }
// // });

// // // Get all posts for the logged-in user
// // app.get("/posts", authenticateToken, async (req, res) => {
// //   try {
// //     const posts = await Post.find({ userId: req.userId });
// //     res.status(200).json({ posts });
// //   } catch (error) {
// //     console.error("Error fetching posts:", error.message);
// //     res.status(500).json({ message: "Server Error", error: error.message });
// //   }
// // });

// // // Update a post
// // app.put("/posts/:id", authenticateToken, async (req, res) => {
// //   const { id } = req.params;
// //   const { content } = req.body;
// //   try {
// //     const post = await Post.findOneAndUpdate({ _id: id, userId: req.userId }, { content }, { new: true });
// //     if (!post) return res.status(404).json({ message: "Post not found" });
// //     res.status(200).json({ message: "Post updated successfully", post });
// //   } catch (error) {
// //     console.error("Error updating post:", error.message);
// //     res.status(500).json({ message: "Server Error", error: error.message });
// //   }
// // });

// // // Delete a post
// // app.delete("/posts/:id", authenticateToken, async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     const post = await Post.findOneAndDelete({ _id: id, userId: req.userId });
// //     if (!post) return res.status(404).json({ message: "Post not found" });
// //     res.status(200).json({ message: "Post deleted successfully" });
// //   } catch (error) {
// //     console.error("Error deleting post:", error.message);
// //     res.status(500).json({ message: "Server Error", error: error.message });
// //   }
// // });

// // // Start the server
// // app.listen(port, () => {
// //   console.log(`App listening on port ${port}`);
// // });
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;
const secretKey = "shhhhh1212121";

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Kashif-db1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB successfully"))
.catch((err) => console.error("Error connecting to MongoDB:", err.message));

// User Schema
const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  phone: Number,
  password: String,
});
const User = mongoose.model("User", userSchema);

// Post Schema
const postSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  content: String,
  createdAt: { type: Date, default: Date.now },
});
const Post = mongoose.model("Post", postSchema);

// Signup route
app.post("/signUp", async (req, res) => {
  const { email, username, phone, password } = req.body;
  try {
    const user = await User.create({ email, username, phone, password });
    res.status(200).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error in signUp:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error in login:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Access Denied" });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.userId = user.userId;
    next();
  });
}

// Create Post
app.post("/posts", authenticateToken, async (req, res) => {
  const { content } = req.body;
  try {
    const post = await Post.create({ userId: req.userId, content });
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Get all posts for the logged-in user
app.get("/posts", authenticateToken, async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.userId });
    res.status(200).json({ posts });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Update a post
app.put("/posts/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const post = await Post.findOneAndUpdate({ _id: id, userId: req.userId }, { content }, { new: true });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    console.error("Error updating post:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Delete a post
app.delete("/posts/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOneAndDelete({ _id: id, userId: req.userId });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});



