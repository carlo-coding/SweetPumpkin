export const POST_BLOG = "[blog] post blog";
export const SET_BLOGS = "[blog] set blogs";
export const GET_BLOGS = "[blog] get blogs";
export const APPEND_RATING = "[blog] append rate";
export const DELETE_BLOG = "[blog] delete blog";
export const EDIT_BLOG = "[blog] edit blog";

export const postBlog = (blog) => ({type: POST_BLOG, payload: blog}); 

export const setBlogs = (blogs) => ({type: SET_BLOGS, payload: blogs});

export const getBlogs = (userId) => ({type: GET_BLOGS, payload: userId});

export const appendRating = (rating) => ({type: APPEND_RATING, payload: rating});

export const deleteBlog = (blogId)=> ({type: DELETE_BLOG, payload: blogId});

export const editBlog = (newInfo)=> ({type: EDIT_BLOG, payload: newInfo});

