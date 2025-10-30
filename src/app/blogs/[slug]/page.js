
// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../../../styles/_sub-banner.scss";
// import "../../../styles/_blogs.scss";
// import "../../../styles/_blog-detail.scss";
// import Button from "../../components/EnquireBtn";

// export default function BlogDetail() {
//   const { slug } = useParams(); // 👈 get slug from URL
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     AOS.init({ duration: 1200, once: false, mirror: false });
//   }, []);

//   useEffect(() => {
//     if (!slug) return;

//     const fetchPost = async () => {
//       const res = await fetch("http://sobha.local/graphql", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           query: `
//             query GetPostBySlug($slug: ID!) {
//               post(id: $slug, idType: SLUG) {
//                 title
//                 date
//                 content
//                 featuredImage {
//                   node {
//                     sourceUrl
//                   }
//                 }
//               }
//             }
//           `,
//           variables: { slug },
//         }),
//       });

//       const { data } = await res.json();
//       setPost(data.post);
//     };

//     fetchPost();
//   }, [slug]);

//   if (!post) {
//     return <p className="loading">Loading...</p>;
//   }

//   return (
//     <main>
//       {/* Banner */}
//       <div className="sub-banner-sec">
//         <div className="sub-bnr-img">
//           <img
//             src={
//               post.featuredImage?.node?.sourceUrl ||
//               "/assets/blog-detail/blog-detail-bnr.png"
//             }
//             alt={post.title}
//           />
//           <div className="container">
//             <div className="sub-bnr-txt"></div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Detail */}
//       <div className="blog-detail-sec">
//         <div className="outer">
//           <div className="container">
//             <div className="blog-top-sec" data-aos="fade-up">
//               <div className="blog-top-inner">
//                 <div
//                   className="blog-backbtn-blk"
//                   onClick={() => window.history.back()}
//                 >
//                   <img
//                     src="/assets/blog-detail/left-arrow.svg"
//                     alt="Go back"
//                   />
//                   <span className="go-back">Go back</span>
//                 </div>

//                 <div className="blog-top-content">
//                   <ul className="blog-meta">
//                     <li>{new Date(post.date).toDateString()}</li>
//                   </ul>
//                   <h2>{post.title}</h2>
//                 </div>
//               </div>

//               <div
//                 className="detail-blog-blk"
//                 dangerouslySetInnerHTML={{ __html: post.content }}
//               />
//             </div>

//             {/* Bottom Related Blogs (Optional) */}
//             <div className="blog-detail-btm">
//   <div className="blog-head">
//     <h2>Next Content</h2>
//     <Button href="/blogs" label="View All" />
//   </div>

//   <div className="project-btm-sec" data-aos="fade-up">
//     {relatedPosts.length > 0 ? (
//       relatedPosts.map((item, index) => (
//         <Link
//           key={item.id || index}
//           href={`/blogs/${item.slug}`}
//           className="project-btm-blk"
//         >
//           <div className="project-img">
//             <img
//               src={
//                 item.featuredImage?.node?.sourceUrl ||
//                 `/assets/blogs/blg${(index % 6) + 1}.png`
//               }
//               alt={item.title}
//             />
//           </div>
//           <div className="project-text">
//             <h5>
//               {item.date
//                 ? new Date(item.date).toLocaleDateString()
//                 : new Date().toLocaleDateString()}
//             </h5>
//             <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
//           </div>
//         </Link>
//       ))
//     ) : (
//       <p>No related posts found.</p>
//     )}
//   </div>
// </div>

//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/_sub-banner.scss";
import "../../../styles/_blogs.scss";
import "../../../styles/_blog-detail.scss";
import Button from "../../components/EnquireBtn";

export default function BlogDetail() {
  const { slug } = useParams(); // get slug from URL
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]); // ✅ added

  // AOS animation init
  useEffect(() => {
    AOS.init({ duration: 1200, once: false, mirror: false });
  }, []);

  // Fetch single post by slug
  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      const res = await fetch("http://sobha.local/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query GetPostBySlug($slug: ID!) {
              post(id: $slug, idType: SLUG) {
                title
                date
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          `,
          variables: { slug },
        }),
      });

      const { data } = await res.json();
      setPost(data.post);
    };

    fetchPost();
  }, [slug]);

  // ✅ Fetch related posts (excluding current)
  useEffect(() => {
    if (!slug) return;

    const fetchRelatedPosts = async () => {
      const res = await fetch("http://sobha.local/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query GetRelatedPosts {
              posts(first: 6, where: { orderby: { field: DATE, order: DESC } }) {
                nodes {
                  id
                  slug
                  title
                  date
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

      const { data } = await res.json();
      const filtered = data.posts.nodes.filter((p) => p.slug !== slug);
      setRelatedPosts(filtered);
    };

    fetchRelatedPosts();
  }, [slug]);

  // Loading state
  if (!post) return <p className="loading">Loading...</p>;

  return (
    <main>
      {/* Banner */}
      <div className="sub-banner-sec">
        <div className="sub-bnr-img">
          <img
            src={
              post.featuredImage?.node?.sourceUrl ||
              "/assets/blog-detail/blog-detail-bnr.png"
            }
            alt={post.title}
          />
          <div className="container">
            <div className="sub-bnr-txt"></div>
          </div>
        </div>
      </div>

      {/* Blog Detail */}
      <div className="blog-detail-sec">
        <div className="outer">
          <div className="container">
            <div className="blog-top-sec" data-aos="fade-up">
              <div className="blog-top-inner">
                <div
                  className="blog-backbtn-blk"
                  onClick={() => window.history.back()}
                >
                  <img
                    src="/assets/blog-detail/left-arrow.svg"
                    alt="Go back"
                  />
                  <span className="go-back">Go back</span>
                </div>

                <div className="blog-top-content">
                  <ul className="blog-meta">
                    <li>{new Date(post.date).toDateString()}</li>
                  </ul>
                  <h2>{post.title}</h2>
                </div>
              </div>

              <div
                className="detail-blog-blk"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* ✅ Bottom Related Blogs */}
          <div className="blog-detail-btm">
  <div className="blog-head">
    <h2>Next Content</h2>
    <Button href="/blogs" label="View All" />
  </div>

  <div className="project-btm-sec" data-aos="fade-up">
    {relatedPosts.length > 0 ? (
      relatedPosts
        .filter((item) => item.slug !== slug) // exclude current post
        .slice(0, 3) // ✅ ensure only 3 posts show
        .map((item, index) => (
          <Link
            key={item.id || index}
            href={`/blogs/${item.slug}`}
            className="project-btm-blk"
          >
            <div className="project-img">
              <img
                src={
                  item.featuredImage?.node?.sourceUrl ||
                  `/assets/blogs/blg${(index % 6) + 1}.png`
                }
                alt={item.title}
              />
            </div>
            <div className="project-text">
              <h5>
                {item.date
                  ? new Date(item.date).toLocaleDateString()
                  : new Date().toLocaleDateString()}
              </h5>
              <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
            </div>
          </Link>
        ))
    ) : (
      <p>No related posts found.</p>
    )}
  </div>
</div>


          </div>
        </div>
      </div>
    </main>
  );
}
