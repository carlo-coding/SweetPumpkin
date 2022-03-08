import React, { useEffect } from 'react';
import pumpkin from "../../../chest/files/pumpkin-logo.png";
import { PageContainer } from "./styles";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Rating } from "@mui/material";
import {
    getBlogs,
} from "../../../application/actions/blogs";
import { appendRating } from "../../../application/actions/blogs";
import { useSelector, useDispatch } from "react-redux";
export default function Home({}) {

    const dispatch = useDispatch();
    const blogs = useSelector(state=>state.blogs.all);

    useEffect(()=> dispatch(getBlogs()), []);

    return (
        <PageContainer>
            <img src={pumpkin}/>
            <div>
            <h3>Todos los blogs</h3>
           <CarouselProvider
            naturalSlideWidth={1000}
            naturalSlideHeight={1025}
            totalSlides={blogs.length}
           > 
                <Slider>
                    {blogs.map((blog, index)=> (
                        <Slide index={index} key={index}>
                            <Blog {...{blog}}/>
                        </Slide>
                    ))}
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
            </div>
        </PageContainer>
    );
}

const Blog = ({blog})=> {
    const dispatch = useDispatch();

    const [rating, setRating] = React.useState(0);
    const [disabled, setDisabled] = React.useState(0);

    const handleChange = (e, newValue) => {
        setRating(newValue);
        dispatch(appendRating({rating: newValue, blogId: blog.objectId}));
        dispatch(getBlogs())
        setDisabled(true);
        window.localStorage.setItem(blog.objectId, newValue);
    }

    React.useEffect(()=> {
        const value = window.localStorage[blog.objectId];
        if (value) {
            setDisabled(true);
            setRating(value)
        }
    }, [])

    return (
        <div>
            {blog.date && <p>Fecha: {blog.date}</p>}
            <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
            <div>
                ({blog.ratings.length && Math.round(blog.ratings.reduce((curr, acc)=> curr + acc) /  blog.ratings.length * 100)/100 })
                <Rating 
                    value={rating}
                    onChange={handleChange}
                    disabled={disabled}

                />
            </div>
        </div>
    )
}