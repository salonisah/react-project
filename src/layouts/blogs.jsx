import React from 'react';
import Button from "../components/Button";
import { Link } from 'react-router-dom';
const Blogs = () => {
  return (
    <>
<section className="blogs">
    <div className="container">
        <div className="blogs-container">
            <div className="blogs-container-content">
            <div className="blogs-text">
                <h3>our Blogs</h3>
                    <h2>Read Our Latest <span class="highlight"> News</span> </h2>
                </div>
                <div className="blog-content">
                    {/* <a href="#" class="cta-button transformed blogsbutton">Let's Talk <i class="fa fa-arrow-right smooth"></i>
                    </a> */}
                    <Button
                 text="View All Our News"
                 newcl="buttn-text mt-7"
                 path="./pages/blogspage"
              />
                    
                </div>  
            </div>
            <div className="blogs-grid">
                <div className="blogs-wrapper">
                  <div className="blogs-containerimg hvr-zoom">
                    <img src="\images\blog\Mask group (14).png"alt="blog " class="blog-pic"/>
                  </div>  
                  <div className="blog-post">
                    <div className="post-date">Feb 18, 2025 <span>2 min read</span></div>
                    <h3 className="heading-blogs"> 5 Proven Strategies to Scale Your Business Successfully</h3>
                    <p className="post-excerpt">Lorem ipsum dolor sit amet consectetur. Arcu porttitor luctus omare nisi pellentesque egestas. Pellentesque...</p>
                    {/* <a href="#" className="read-more mt-3">READ ARTICLE<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9.5L9 1.5M9 1.5H3M9 1.5V7.5" stroke="#8A2BE2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a> */}
                        <Link to="/blog-single-page" className="read-more mt-3">
                     READ ARTICLE<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 9.5L9 1.5M9 1.5H3M9 1.5V7.5" stroke="#8A2BE2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                   </Link>
                </div>
            </div>
          
            <div className="blogs-wrapper">
                <div className="blogs-containerimg hvr-zoom">
                  <img src="/images/blog/image.png"alt="blog " className="blog-pic"/> 
                </div>  
                <div className="blog-post">
                  <div className="post-date">Feb 18, 2025 <span>2 min read</span></div>
                  <h3 className="heading-blogs"> 5 Proven Strategies to Scale Your Business Successfully</h3>
                  <p className="post-excerpt">Lorem ipsum dolor sit amet consectetur. Arcu porttitor luctus omare nisi pellentesque egestas. Pellentesque...</p>
                  <Link to="/blog-single-page" className="read-more mt-3">
                     READ ARTICLE<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 9.5L9 1.5M9 1.5H3M9 1.5V7.5" stroke="#8A2BE2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                   </Link>
              </div>
          </div>
          <div className="blogs-wrapper">
            <div className="blogs-containerimg hvr-zoom">
            <img src="\images\blog\image (1).png"alt="blog " className="blog-pic"/> 
            </div>  
            <div className="blog-post">
              <div className="post-date">Feb 18, 2025 <span>2 min read</span></div>
              <h3 className="heading-blogs"> 5 Proven Strategies to Scale Your Business Successfully</h3>
              <p className="post-excerpt">Lorem ipsum dolor sit amet consectetur. Arcu porttitor luctus omare nisi pellentesque egestas. Pellentesque...</p>
              <Link to="/blog-single-page" className="read-more mt-3">
                     READ ARTICLE<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 9.5L9 1.5M9 1.5H3M9 1.5V7.5" stroke="#8A2BE2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                   </Link>
          </div>
      </div>
 </div>
</div>
</div>
</section>
    </>
          );
};

export default Blogs;