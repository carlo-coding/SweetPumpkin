import Parse from "parse";
import { parseObjectToUser, createId, setEachEntry } from "../../../../chest/utils";
import { APPLICATION_ID, HOST_URL , JAVASCRIPT_KEY, REST_API_KEY } from "../../../../chest/config"; 

function initializeParse() {
    Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY);
    Parse.serverURL = HOST_URL;
}

async function post(blog) {
    initializeParse();
    const { userId } = (await Parse.User.current())?.toJSON();
    const Blog = new Parse.Object("Blogs");
    const date = new Date(Date.now()).toLocaleDateString();

    Blog.set("author", userId);
    Blog.set("content", blog);
    Blog.set("date", date);
    
    Blog.save();

    return { message: "Blog publicado con exito"};
}

async function getAll(id="") {
    const userId = (await Parse.User.current())?.toJSON()?.userId || "";
    const blogQuery = new Parse.Query("Blogs");

    blogQuery.contains("author", id || userId);

    const allBlogs = (await blogQuery.findAll()).map(blog=> blog?.toJSON());
    return allBlogs;
}

async function appendRating({rating, blogId}) {
    const blogQuery = new Parse.Query("Blogs");
    blogQuery.contains("objectId", blogId);
    const blog = await blogQuery.first();

    let ratings = blog.get("ratings") || [];

    ratings = [...ratings, rating];

    blog.set("ratings", ratings);

    blog.save()

}

async function deleteBlog (blogId) {
    const blogQuery = new Parse.Query("Blogs");
    blogQuery.contains("objectId", blogId);
    const blog = await blogQuery.first();
    blog.destroy();

    return { message: "Blog eliminado" }
}

async function editBlog (newContent) {
    const blogQuery = new Parse.Query("Blogs");
    blogQuery.contains("objectId", newContent.objectId);
    const blog = await blogQuery.first();

    setEachEntry(blog, newContent);
    blog.save();

    return { message: "Blog editado" }
}

export default {
    post,
    getAll,
    appendRating,
    deleteBlog,
    editBlog
}