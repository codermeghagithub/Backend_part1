import express from "express";
// import dotenv from "dotenv";
// dotenv.config();

// const PORT = process.env.PORT || 8000;
const app = express(); //**app represents your web server.So app is like your personal server instance. */
app.use(express.json()); //middleware

let posts = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
    author: "John Doe",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
    author: "Jane Smith",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

app.get("/api/blog", (req, res) => {
  try {
    res.status(200).json(posts); //** or=> res.json(posts);  it will give same o/p */
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/blog/:id", (req, res) => {
  try {
    const { id } = req.params;
    const user = posts.find((user) => user.id === Number(id));
    if (!user) {
      throw new Error("Blog post not found");
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// **✅ Home route

app.get("/", (req, res) => {
  try {
    res.send("Welcome to blog api");
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// **POST

app.post("/api/post-no", (req, res) => {
  try {
    const { title, author } = req.body;

    if (!title || !author) {
      return res.status(400).json({
        success: false,
        message: "Title and author are required",
      });
    }
    posts.push({ id: posts.length + 1, title, author });

    res
      .status(200)
      .json({
        success: true,
        message: "successfully push one user's data",
        posts,
      });
  } catch (err) {
    console.error("Error while creating post:", err.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(8000, () => {
  console.log(`server perfect`);
});
