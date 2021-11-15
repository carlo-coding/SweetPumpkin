export const POST_BLOG = "[blog] post blog";
export const SET_BLOGS = "[blog] set blogs";
export const GET_BLOGS = "[blog] get blogs";

export const postBlog = (blog) => ({type: POST_BLOG, payload: blog}); 

export const setBlogs = (blogs) => ({type: SET_BLOGS, payload: blogs});

export const getBlogs = () => ({type: GET_BLOGS});