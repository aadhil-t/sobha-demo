"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/_sub-banner.scss";
import "../../styles/_blogs.scss"
import Link from "next/link";
import Button from "../components/EnquireBtn";

export default function Blogs() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
    });
  }, []);


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              {
                posts(first: 50) {
                  nodes {
                    id
                    title
                    slug
                    excerpt
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            `,
          }),
        });

        const json = await res.json();
        console.log("GraphQL Data:", json);

        setPosts(json.data?.posts?.nodes || []);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);



  return (
    <main>
      {/* Sub Banner Section */}
      <div className="sub-banner-sec">
        <div className="sub-bnr-img">
          <img
            src="/assets/blogs/blog-bnr.png"
            alt="Skyvue Stellar at Sobha Hartland 2 Dubai"
          />
          <div className="container">
            <div className="sub-bnr-txt">
              <h1>Our Blogs</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-section">
        <div className="outer">
            <div className="container">
                <div className="blog-outer-blk">
                      {/* ---------- BLOG TOP SECTION ---------- */}
                    <div className="blog-top-sec" data-aos="fade-up">
                    <div className="blog-top-inner">
                        <div className="blog-top-img">
                        <img src="/assets/blogs/blog-top-bnr.png" alt="Top Reasons to Invest in Dubai Real Estate in 2025" />
                        <span className="blog-label">Latest</span>
                        </div>

                        <div className="blog-top-content">
                        <ul className="blog-meta">
                            <li>7 min read<span className="slash"> / </span>Oct 22, 2025</li>
                        </ul>
                        <h2>Top Reasons to Invest in Dubai Real Estate in 2025</h2>
                        <p>
                            Discover why Dubai continues to lead the global property market — 
                            from tax-free benefits to world-class infrastructure and strong ROI.
                        </p>
                            <Button href="/readnow" label="Read Now"/>
                        </div>
                    </div>
                    </div>
                    {/* <div className="blog-btm-sec">
                        <div className="project-btm-sec" data-aos="fade-up">
                            <div className="project-btm-blk">
                                <div className="project-img">
                                <img src="/assets/blogs/blg1.png" alt="Pierside Marina Residences" />
                                </div>
                                <div className="project-text">
                                    <h5>Oct 22, 2025</h5>
                                    <h4>Luxury Living Redefined: Inside Sobha Skyvue Stellar</h4>
                                </div>
                            </div>
                            <div className="project-btm-blk">
                                <div className="project-img">
                                <img src="/assets/blogs/blg2.png" alt="Pierside Marina Residences" />
                                </div>
                                <div className="project-text">
                                    <h5>Oct 22, 2025</h5>
                                    <h4>How Sobha Hartland 2 Sets a New Benchmark for Modern Communities</h4>
                                </div>
                            </div>
                            <div className="project-btm-blk">
                                <div className="project-img">
                                <img src="/assets/blogs/blg3.png" alt="Pierside Marina Residences" />
                                </div>
                                <div className="project-text">
                                    <h5>Oct 22, 2025</h5>
                                    <h4>Why Waterfront Residences Are the Future of Urban Luxury</h4>
                                </div>
                            </div>
                            <div className="project-btm-blk">
                                <div className="project-img">
                                <img src="/assets/blogs/blg4.png" alt="Pierside Marina Residences" />
                                </div>
                                <div className="project-text">
                                    <h5>Oct 22, 2025</h5>
                                    <h4>Luxury Living Redefined: Inside Sobha Skyvue Stellar</h4>
                                </div>
                            </div>
                            <div className="project-btm-blk">
                                <div className="project-img">
                                <img src="/assets/blogs/blg5.png" alt="Pierside Marina Residences" />
                                </div>
                                <div className="project-text">
                                    <h5>Oct 22, 2025</h5>
                                    <h4>Luxury Living Redefined: Inside Sobha Skyvue Stellar</h4>
                                </div>
                            </div>
                            <div className="project-btm-blk">
                                <div className="project-img">
                                <img src="/assets/blogs/blg6.png" alt="Pierside Marina Residences" />
                                </div>
                                <div className="project-text">
                                    <h5>Oct 22, 2025</h5>
                                    <h4>Luxury Living Redefined: Inside Sobha Skyvue Stellar</h4>
                                </div>
                            </div>
                        </div>
                    </div> */}
               
<div className="blog-btm-sec">
  <div className="project-btm-sec" data-aos="fade-up">
    {posts.length > 0 ? (
      posts.map((post, index) => (
        <Link
          key={post.id || index}
          href={`/blogs/${post.slug}`} // 👈 dynamic route link
          className="project-btm-blk"
        >
          <div className="project-img">
            <img
              src={
                post.featuredImage?.node?.sourceUrl ||
                `/assets/blogs/blg${(index % 6) + 1}.png`
              }
              alt={post.title}
            />
          </div>
          <div className="project-text">
            <h5>
              {post.date
                ? new Date(post.date).toLocaleDateString()
                : new Date().toLocaleDateString()}
            </h5>
            <h4 dangerouslySetInnerHTML={{ __html: post.title }} />
          </div>
        </Link>
      ))
    ) : (
      <p>No posts found.</p>
    )}
  </div>
</div>

                </div>
            </div>
        </div>
      </div>

    </main>
  );
}
