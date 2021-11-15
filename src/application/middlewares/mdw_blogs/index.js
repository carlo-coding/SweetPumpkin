import { showSuccess, showError, showWarning } from "../../actions/alert";
import { setLocation } from "../../actions/location";

import { POST_BLOG, GET_BLOGS, setBlogs } from "../../actions/blogs";

export const flowPostBlog = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === POST_BLOG) {
        try {
            const { message } = await api.blogs.post(action.payload);
            dispatch(showSuccess( message ));
            dispatch(setLocation({href: "/profile", go: true}))
        }catch(err) {
            dispatch(showError(err.message));
        }
    }
    next(action);
}

export const flowGetBlogs = ({ api, log }) => ({ dispatch }) => next => async action => {
    if (action.type === GET_BLOGS) {
        try {
            const allBlogs = await api.blogs.getAll();
            dispatch(setBlogs(allBlogs));
        }catch(err) {
            dispatch(showError(err.message));
        }
    }
    next(action);
}
