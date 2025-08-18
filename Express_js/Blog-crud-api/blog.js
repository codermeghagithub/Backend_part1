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
// **get method
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

    res.status(200).json({
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

// **put

// ✅ PUT route with try-catch error handling
app.put("/api/posts/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id); // **convert id to number
    const { title, content, author } = req.body;

    // ** find the post by id
    const post = posts.find((p) => p.id === id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    // update the post
    post.title = title || post.title;
    post.content = content || post.content;
    post.author = author || post.author;
    post.updatedAt = new Date().toISOString();

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while updating post",
      error: error.message,
    });
  }
});

// **PATCH

app.patch("/api/patch/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title,content,author } = req.body;
    const post = posts.find((p) => p.id === id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    if (title !== undefined) post.title = title;
    if (content !== undefined) post.content = content;
    if (author !== undefined) post.author = author;

    post.updatedAt = new Date().toISOString();
    res.status(200).json({
      success: true,
      message: "Post updated partially (PATCH) successfully",
      post,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while patching post",
      error: err.message,
    });
  }
});


// ** DELETE

app.delete("/api/delete-u/:id",(req,res)=>{
  try{
  const id =parseInt(req.params.id);
// ** find the index of the post

  const postIndex=posts.findIndex(u=>u.id==id);

  if(postIndex===-1){
  return res.status(404).json(
    {success:false,
      message:"user not found "
    })
  }
const delete_user=posts.splice(postIndex,1);
res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      post:delete_user[0]
    }); 
   }catch(err){
res.status(500).json({
  success:false,
  message: "Something went wrong while deleting post",
  error: err.message,

});
    }
});

app.listen(8000, () => {
  console.log(`server perfect`);
});
