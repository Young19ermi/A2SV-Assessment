import { BlogPost } from "../Interface/BlogPost";

export const sampleBlogPost: BlogPost = {
  _id: "64dfe77d50961c55ce93e7e0",
  image: "https://res.cloudinary.com/djtkzulun/image/upload/v1692395388/A2sv/vmjzxwgp3mdvtwn2tlrw.jpg",
  title: "Mastering the Art of Code Refactoring",
  description: "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
  author: {
    _id: "64dfe77d50961c55ce93e7e1",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    image: "https://example.com/images/jane_doe.png",
    role: "Software Engineer"
  },
  isPending: false,
  tags: ["Programming", "Code"],
  likes: 123,
  relatedBlogs: ["64dfe77d50961c55ce93e7e2"],
  skills: ["JavaScript", "TypeScript"],
  createdAt: "2023-08-18T21:49:49.752Z",
  updatedAt: "2023-08-18T21:49:49.752Z",
  __v: 0
};
