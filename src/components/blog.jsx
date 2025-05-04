import React from "react";

const Blog = ({ imageUrl, date, heading, description, url }) => {
  return (
    <>
      <div className="blogs-wrapper">
        <div className="blogs-containerimg hvr-zoom">
          <img
            src={imageUrl}
            alt="blog "
            className="blog-pic"
          />
        </div>
        <div className="blog-post">
          <div className="post-date">
            {date} <span>2 min read</span>
          </div>
          <h3 className="heading-blogs">
            {heading}
          </h3>
          <p className="post-excerpt">
          {description}
          </p>
          <a href={url} className="read-more">
            READ ARTICLE
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9.5L9 1.5M9 1.5H3M9 1.5V7.5"
                stroke="#8A2BE2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Blog;
