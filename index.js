const express = require('express');
const cors = require('cors');
const allCourses = require('./data/courses.json');
const allBlogs = require('./data/blog.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.get('/courses', (req, res) => {
  res.send(allCourses);
});

app.get('/courses/:id', (req, res) => {
  const { id } = req.params;
  const selectedCours = allCourses.find((course) => course.id === id);
  res.send(selectedCours);
});

app.get('/blogs', (req, res) => {
  res.send(allBlogs);
});

app.get('/blogs/:id', (req, res) => {
  const { id } = req.params;
  const selectedBlog = allBlogs.find((blog) => blog.id === id);
  res.send(selectedBlog);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
