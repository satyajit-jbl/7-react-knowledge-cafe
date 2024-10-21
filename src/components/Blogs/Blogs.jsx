import { useEffect } from "react";
import { useState } from "react";
import { jsx } from "react/jsx-runtime";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;