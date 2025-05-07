import React, { useState, useRef } from "react";
import Banner from "../components/Banner";
import Button from '../components/Button';
import { Link } from "react-router-dom";

const Blogsingle = () => {
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: ""
  });
  const [searchQuery, setSearchQuery] = useState("");
  const commentFormRef = useRef(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCommentForm({
      ...commentForm,
      [id]: value
    });
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log('Comment submitted:', commentForm);
    alert('Thank you for your comment! It will appear after moderation.');
    setCommentForm({
      name: "",
      email: "",
      comment: ""
    });
  };
  const handleReply = () => {
    commentFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleTagClick = (e, tag) => {
    e.preventDefault();
    alert(`Tag filtering for "${tag}" would go here in a real app.`);
  };
  const handleCtaClick = () => {
    alert('Contact form or page would open here in a real app.');
  };

  return (
    <>
    <Banner
        heading="BLOGS"
        item="Blogs"
        imageUrl="\images\about_us.jpg\Pexels Photo by fauxels.png" 
      />
      {/* <!-- Blog Single Section --> */}
    <section class="blogsingle">
        <div class="container">
            <div class="casesin-container">
                <div class="left-container">
                    <div class="post-date blog-date">Feb 18, 2025 <span>2 min read</span></div>
                    <h2>5 Proven Strategies to Scale Your Business Successfully</h2>
                    <div class="blog-image">
                        <img src="/images/blog/Mask group (21).png" alt="blog-image" class="blog-pic"/>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Fringilla imperdiet enim ultrices cursus quis accumsan sed cras lectus. At convallis convallis lectus at commodo id mauris. Purus dignissim etiam amet dui malesuada in id pharetra aliquam. Dolor in mauris egestas amet nulla porttitor nulla.
                    </p>
                    <p>
                        In fringilla faucibus nunc tellus. Sit sit nisl enim tortor metus eget. Tincidunt amet eget enim fermentum suspendisse. Urna habitasse dignissim enim libero quis sed. Cursus fusce cursus turpis vel non vitae convallis cras aliquam. Ultrices varius sed feugiat et. Amet a sit vel mattis. Faucibus placerat ac pharetra condimentum cras eget turpis. Vitae sed mauris tellus volutpat mauris eget sed. At faucibus rhoncus urna tincidunt. Nisl justo amet fringilla et dolor.
                    </p>
                    <p>
                        Imperdiet hac donec vel in sit interdum faucibus eget laoreet. Hendrerit eros odio neque nec facilisis senectus maecenas elit. Mauris felis molestie tortor integer sit phasellus suspendisse nullam. Cursus faucibus ut tellus bibendum pellentesque praesent. Libero tellus cras sit tellus blandit tincidunt est risus molestie. Morbi morbi commodo et ac quis. Tellus orci non arcu sit. Elit arcu diam tortor sit etiam est dolor at at.
                    </p>
                    <p>
                        Nibh placerat donec consectetur velit habitant pellentesque. Mauris neque consectetur porta tristique risus quis pellentesque. Ac erat lectus iaculis fringilla cras purus pulvinar eu porta. Lobortis volutpat pulvinar suspendisse hendrerit. Tempus erat quam sit dignissim volutpat in convallis. Lobortis eu cursus tellus euismod pulvinar mattis.
                    </p>
                    <p><b>Tags:</b> Scaling, Strategy, Technology</p>
                </div>
                
                {/* <!-- Right Sidebar --> */}
                <div class="right-container" >
                    <div class="sidebar-section search-section">
                    <form onSubmit={handleSearchSubmit} className="search-form">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                  />
                  <button type="submit" className="search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </button>
                </form>
                </div>
                <div className="sidebar-section">
                        <h3>Recent Posts</h3>
                        <div class="recent-post">
                            <img src="\images\blog\recentpost(1).png" alt="Recent post"/>
                            <div class="recent-post-content">
                            <div class="post-date ">Feb 18, 2025 <span>2 min read</span></div>
                                <h4>How Digital Transformation is Reshaping Industries</h4>
                            </div>
                        </div>
                        <div class="recent-post">
                            <img src="\images\blog\recentpost(2).png" alt="Recent post"/>
                            <div class="recent-post-content">
                            <div class="post-date ">Feb 18, 2025 <span>2 min read</span></div>
                                <h4>10 Tools Every Business Should Implement in 2025</h4>
                               
                            </div>
                        </div>
                        <div class="recent-post">
                            <img src="\images\blog\recentpost(3).png" alt="Recent post"/>
                            <div class="recent-post-content">
                            <div class="post-date ">Feb 18, 2025 <span>2 min read</span></div>
                                <h4>The Future of Remote Work: Trends to Watch</h4>
                            </div>
                        </div>
                        </div>
                    <div class="sidebar-section">
                        <h3>Tags</h3>
                        <div className="tags-container">
                  {['Business', 'Strategy', 'Technology', 'Scaling', 'Growth', 'Marketing', 'Finance'].map((tag) => (
                    <a 
                      href="#" 
                      className="tag" 
                      key={tag}
                      onClick={(e) => handleTagClick(e, tag)}
                    >
                      {tag}
                    </a>
                  ))}
                </div>
                    </div>
                    <div class="sidebar-section cta-blog">
                        <h3>Ready to Take Your Business to the Next Level?</h3>
                        <p>Get expert guidance on scaling your business effectively.</p>
                        {/* <a href="#" className="cta-button  cta-blogs mt-4">
                      LET’S TALK STRATEGY →
                    </a> */}
                    <Button
                 text="Let's talk strategy"
                 newcl="  cta-button cta-blogs mt-4"
                 path="/contactpage"
              />
                    </div>
                </div>
            </div>
            </div>

    </section>
    <section class="comments-section">
        <div class="container">
            <h3>Comments (2)</h3>
            
            <div class="comment">
                <div class="comment-avatar">
                    <img src="/images/blog/comment.png" alt="John Spencer"/>
                </div>
                <div class="comment-content">
                    <div class="comment-header">
                    <div class="comment-wrapper">
                        <h4>John Spencer</h4>
                        <span class="comment-date">May 1, 2025</span>
                        </div>
                        <Link className="services-button width-blogcta" data-title="View All">
  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M1.40908 5.30649L5.85875 1.09561C6.67031 0.32833 7.9774 0.922056 7.9774 2.05731V4.31086C16.1941 4.31086 14.93 14.75 14.93 14.75C14.93 14.75 12.4018 8.22554 7.9774 8.22554V10.4784C7.9774 11.6137 6.66968 12.2074 5.85938 11.4408L1.40971 7.22991C1.28058 7.10767 1.17748 6.95905 1.10695 6.7935C1.03642 6.62794 1 6.44906 1 6.2682C1 6.08734 1.03642 5.90846 1.10695 5.7429C1.17748 5.57735 1.27995 5.42873 1.40908 5.30649Z"
        stroke="#8A2BE2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    REPLY
  </span>
</Link>
                    </div>
                    <p>Great article! I especially liked your point about leveraging technology for scalability. It's been a game-changer for our business.</p>
                </div>
            </div>
            
            <div class="comment">
                <div class="comment-avatar">
                    <img src="/images/blog/comment.png" alt="Sarah Martin"/>
                </div>
                <div class="comment-content">
                    <div class="comment-header">
                    <div class="comment-wrapper">
                        <h4>Sarah Martin </h4>
                        <span class="comment-date">April 30, 2025</span>
                        </div>
                        <Link className="services-button width-blogcta" data-title="View All">
  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M1.40908 5.30649L5.85875 1.09561C6.67031 0.32833 7.9774 0.922056 7.9774 2.05731V4.31086C16.1941 4.31086 14.93 14.75 14.93 14.75C14.93 14.75 12.4018 8.22554 7.9774 8.22554V10.4784C7.9774 11.6137 6.66968 12.2074 5.85938 11.4408L1.40971 7.22991C1.28058 7.10767 1.17748 6.95905 1.10695 6.7935C1.03642 6.62794 1 6.44906 1 6.2682C1 6.08734 1.03642 5.90846 1.10695 5.7429C1.17748 5.57735 1.27995 5.42873 1.40908 5.30649Z"
        stroke="#8A2BE2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    REPLY
  </span>
</Link>

</div>
                    <p>This was exactly what I needed to read today. We're in the process of scaling and these strategies will definitely help us avoid some common pitfalls.</p>
                </div>
            </div>
            
            <div class="comment-form-container" ref={commentFormRef}>
                <h3>Leave a Comment</h3>
                <form id="comment-form" onSubmit={handleCommentSubmit}>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Name*</label>
                            <input type="text" id="name" required
                              value={commentForm.name}
                    onChange={handleInputChange}
                  /></div>
                        <div class="form-group">
                            <label for="email">Email*</label>
                            <input type="email" id="email" required value={commentForm.email}
                    onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="comment">Comment*</label>
                        <textarea id="comment" rows="5" required value={commentForm.comment}
                  onChange={handleInputChange}
                />
                    </div>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    </section>
         </>
  );
};

export default Blogsingle;
    