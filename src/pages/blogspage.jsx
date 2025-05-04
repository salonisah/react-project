import React from "react";
import Banner from "../components/Banner";
import Blog from "../components/blog";

const BlogsPage = () => {
  return (
    <>
      <Banner
        heading="Blogs"
        item="Blogs"
        imageUrl="/images/about_us.jpg/Pexels Photo by fauxels.png"
      />

      <section className="blogs">
        <div className="container">
          <div className="blogs-container">
            <div className="blogs-container-content">
              <div className="blogs-text">
                <h3>our Blogs</h3>
                <h2>
                  Read Our Latest <span className="highlight">News</span>
                </h2>
              </div>
              <div className="blog-content">
                <a href="#" className="cta-button transformed blogsbutton">
                  Let's Talk <i className="fa fa-arrow-right smooth"></i>
                </a>
              </div>
            </div>

            <div className="blogs-grid">
              <Blog  
                imageUrl="/images/blog/Mask group (15).png"
                heading="5 Proven Strategies to Scale Your Business Successfully"
                description="Lorem ipsum dolor sit amet consectetur. Arcu porttitor luctus ornare nisl pellentesque egestas. Pellentesque.."
                date="Feb 18, 2025"
                url="/blogs/scale-strategies"
              />
              <Blog  
                imageUrl="/images/blog/Mask group (16).png"
                heading="Why Digital Transformation is Crucial in 2025"
                description="Stay ahead in your industry by adopting the latest in tech and process automation..."
                date="Feb 10, 2025"
                url="/blogs/digital-transformation"
              />
              <Blog  
                imageUrl="/images/blog/Mask group (17).png"
                heading="Top Financial Planning Tips for Startups"
                description="Managing your finances right from the start can make or break your startup..."
                date="Jan 28, 2025"
                url="/blogs/startup-finance"
              />
              <Blog  
                imageUrl="/images/blog/Mask group (18).png"
                heading="How to Build a Resilient Team Culture"
                description="A strong team culture promotes innovation, loyalty, and long-term success..."
                date="Jan 15, 2025"
                url="/blogs/team-culture"
              />
              <Blog  
                imageUrl="/images/blog/Mask group (19).png"
                heading="The Future of Remote Work in Business Consulting"
                description="As remote work becomes the norm, consultants must adapt to new client engagement models..."
                date="Jan 05, 2025"
                url="/blogs/remote-consulting"
              />
              <Blog  
                imageUrl="/images/blog/Mask group (20).png"
                heading="Client Retention Strategies That Actually Work"
                description="Losing clients? These proven retention strategies will help keep your business thriving..."
                date="Dec 25, 2024"
                url="/blogs/client-retention"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
