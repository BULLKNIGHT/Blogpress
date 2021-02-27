import React from "react";
import BlogCard from './BlogCard';

const AllBlogs = () => {
  return (<div className="container-fluid">
      <div class="row row-cols-1 row-cols-md-4 g-4">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      
      </div>
      </div>)
};

export default AllBlogs;
