// "use client";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../../styles/_sub-banner.scss";
// import "../../styles/_blogs.scss";
// import "../../styles/_blog-detail.scss";
// import Button from "../components/EnquireBtn";

// export default function BlogDetail() {
//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       once: false,
//       mirror: false,
//     });
//   }, []);
//   return (
//     <main>
//       {/* Sub Banner Section */}
//       <div className="sub-banner-sec">
//         <div className="sub-bnr-img">
//           <img
//             src="/assets/blog-detail/blog-detail-bnr.png"
//             alt="Skyvue Stellar at Sobha Hartland 2 Dubai"
//           />
//           <div className="container">
//             <div className="sub-bnr-txt">{/* <h1>Our Blogs</h1> */}</div>
//           </div>
//         </div>
//       </div>

//       <div className="blog-detail-sec">
//         <div className="outer">
//           <div className="container">
//             <div className="blog-top-sec" data-aos="fade-up">
//               <div className="blog-top-inner">
//                 <div className="blog-backbtn-blk" onClick={() => window.history.back()}>
//                     <img src="/assets/blog-detail/left-arrow.svg" alt="Go back" />
//                     <span className="go-back">Go back</span>
//                 </div>

//                 <div className="blog-top-content">
//                   <ul className="blog-meta">
//                     <li>7 min read</li>
//                   </ul>
//                   <h2>Luxury Living Redefined: Inside Sobha Skyvue Stellar</h2>
//                   <h5>Oct 22, 2025</h5>
//                 </div>
//               </div>
//                 <div className="detail-blog-blk">
//                     <div className="blog-detail-img">
//                         <img src="/assets/blog-detail/blog-detail.png" alt="Go back" />
//                     </div>
//                     <div>
//                         <h1>A New Dimension of Sophisticated Living</h1>
//                         <p><strong>Dubai</strong> continues to stand as a global destination for luxury, innovation, 
//                            and architectural brilliance. Among its most prestigious communities rises 
//                            Sobha Skyvue Stellar — a signature development by Sobha Realty that blends 
//                            art, comfort, and elegance in every corner. Positioned in the heart of Sobha 
//                            Hartland 2, this project is thoughtfully designed to provide a lifestyle where 
//                            modernity meets nature, ensuring residents experience serenity amidst urban 
//                            energy.<br></br>
//                            Every detail within Sobha <strong>"Skyvue Stellar"</strong> has been carefully curated — from 
//                            contemporary architecture to spacious interiors and panoramic views of Dubai’s 
//                            skyline. The residences are crafted to deliver not just luxury, but a sense of 
//                            belonging, with spaces that inspire and nurture meaningful moments with family 
//                            and friends.
//                         </p>
//                         <h2>Perfectly Connected, Perfectly Positioned</h2>
//                         <p>When it comes to location, Sobha Skyvue Stellar offers a balance of peace and 
//                            proximity. Situated within Sobha Hartland 2 — one of Dubai’s most vibrant and 
//                            sought-after communities — residents are never far from the city’s pulse. Downtown 
//                            Dubai, Business Bay, Palm Jumeirah, and Dubai International Airport are all just 
//                            15 minutes away. Its closeness to Mohammed Bin Rashid City (MBR City) further 
//                            enhances its value, positioning it as a prime destination for investors seeking 
//                            high capital appreciation and convenient access to key landmarks. <br></br>
//                            With this level of connectivity, residents can enjoy the comfort of home while 
//                            staying seamlessly linked to work, leisure, <s>and entertainment across the city</s>.
//                         </p>
//                         <h3>An Address That Embodies Elegance</h3>
//                         <p>Sobha Skyvue Stellar is not just about architectural brilliance — it’s about 
//                            creating experiences that last a lifetime. The development showcases 1, 2, 3, 
//                            and 3.5-bedroom apartments designed with sleek finishes, expansive layouts, 
//                            and floor-to-ceiling windows that flood each home with natural light. Each 
//                            residence reflects a modern design philosophy that prioritizes space, functionality, 
//                            and aesthetics — offering residents the ultimate comfort of urban luxury living.
//                         </p>
//                         <h4>Conclusion</h4>
//                         <p>Sobha Skyvue Stellar isn’t merely a residential address — it’s a statement of prestige. 
//                            It combines the sophistication of world-class design, the convenience of prime connectivity, 
//                            and the warmth of a community built for families. Whether you’re seeking a dream home or a 
//                            strong investment opportunity, Sobha Skyvue Stellar is where every aspect of luxury finds 
//                            its true meaning.
//                         </p>
//                         <h5>An Address That Embodies Elegance</h5>
//                         <p>Sobha Skyvue Stellar is not just about architectural brilliance — it’s about 
//                            creating experiences that last a lifetime. The development showcases 1, 2, 3, 
//                            and 3.5-bedroom apartments designed with sleek finishes, expansive layouts, 
//                            and floor-to-ceiling windows that flood each home with natural light. Each 
//                            residence reflects a modern design philosophy that prioritizes space, functionality, 
//                            and aesthetics — offering residents the ultimate comfort of urban luxury living.
//                         </p>
//                         <h6>Conclusion</h6>
//                         <p>Sobha Skyvue Stellar isn’t merely a residential address — it’s a statement of prestige. 
//                            It combines the sophistication of world-class design, the convenience of prime connectivity, 
//                            and the warmth of a community built for families. Whether you’re seeking a dream home or a 
//                            strong investment opportunity, Sobha Skyvue Stellar is where every aspect of luxury finds 
//                            its true meaning.
//                         </p>
//                         <ul>
//                             <li>A New Dimension of Sophisticated Living</li>
//                             <li>Perfectly Connected, Perfectly Positioned</li>
//                             <li>An Address That Embodies Elegance</li>
//                             <li>Conclusion</li>
//                         </ul>
//                         <ol>
//                             <li>A New Dimension of Sophisticated Living</li>
//                             <li>Perfectly Connected, Perfectly Positioned</li>
//                             <li>An Address That Embodies Elegance</li>
//                             <li>Conclusion</li>
//                         </ol>
//                     </div>
//                 </div>
//             </div>

//             <div className="blog-detail-btm">
//                 <div className="blog-head">
//                     <h2>Next Content</h2>
//                     <Button href="/blogs" label="View All"/>
//                 </div>
//               <div className="project-btm-sec" data-aos="fade-up">
//                 <div className="project-btm-blk">
//                   <div className="project-img">
//                     {/* <span className="project-label">1-3 Bed Apartments</span> */}
//                     <img
//                       src="/assets/blogs/blg1.png"
//                       alt="Pierside Marina Residences"
//                     />
//                   </div>
//                   <div className="project-text">
//                     <h5>Oct 22, 2025</h5>
//                     <h4>
//                       Luxury Living Redefined: Inside Sobha Skyvue Stellar
//                     </h4>
//                   </div>
//                 </div>
//                 <div className="project-btm-blk">
//                   <div className="project-img">
//                     {/* <span className="project-label">1-3 Bed Apartments</span> */}
//                     <img
//                       src="/assets/blogs/blg2.png"
//                       alt="Pierside Marina Residences"
//                     />
//                   </div>
//                   <div className="project-text">
//                     <h5>Oct 22, 2025</h5>
//                     <h4>
//                       How Sobha Hartland 2 Sets a New Benchmark for Modern
//                       Communities
//                     </h4>
//                   </div>
//                 </div>
//                 <div className="project-btm-blk">
//                   <div className="project-img">
//                     {/* <span className="project-label">1-3 Bed Apartments</span> */}
//                     <img
//                       src="/assets/blogs/blg3.png"
//                       alt="Pierside Marina Residences"
//                     />
//                   </div>
//                   <div className="project-text">
//                     <h5>Oct 22, 2025</h5>
//                     <h4>
//                       Why Waterfront Residences Are the Future of Urban Luxury
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }




// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../../../styles/_sub-banner.scss";
// import "../../../styles/_blogs.scss";
// import "../../../styles/_blog-detail.scss";
// import Button from "../../components/EnquireBtn";

// export const runtime = "edge";

// export default function BlogDetail() {
//   const { slug } = useParams(); // get slug from URL
//   const [post, setPost] = useState(null);
//   const [relatedPosts, setRelatedPosts] = useState([]); // ✅ added

//   // AOS animation init
//   useEffect(() => {
//     AOS.init({ duration: 1200, once: false, mirror: false });
//   }, []);

//   // Fetch single post by slug
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

//   // ✅ Fetch related posts (excluding current)
//   useEffect(() => {
//     if (!slug) return;

//     const fetchRelatedPosts = async () => {
//       const res = await fetch("http://sobha.local/graphql", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           query: `
//             query GetRelatedPosts {
//               posts(first: 6, where: { orderby: { field: DATE, order: DESC } }) {
//                 nodes {
//                   id
//                   slug
//                   title
//                   date
//                   featuredImage {
//                     node {
//                       sourceUrl
//                     }
//                   }
//                 }
//               }
//             }
//           `,
//         }),
//       });

//       const { data } = await res.json();
//       const filtered = data.posts.nodes.filter((p) => p.slug !== slug);
//       setRelatedPosts(filtered);
//     };

//     fetchRelatedPosts();
//   }, [slug]);

//   // Loading state
//   if (!post) return <p className="loading">Loading...</p>;

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

//             {/* ✅ Bottom Related Blogs */}
//           <div className="blog-detail-btm">
//   <div className="blog-head">
//     <h2>Next Content</h2>
//     <Button href="/blogs" label="View All" />
//   </div>

//   <div className="project-btm-sec" data-aos="fade-up">
//     {relatedPosts.length > 0 ? (
//       relatedPosts
//         .filter((item) => item.slug !== slug) // exclude current post
//         .slice(0, 3) // ✅ ensure only 3 posts show
//         .map((item, index) => (
//           <Link
//             key={item.id || index}
//             href={`/blogs/${item.slug}`}
//             className="project-btm-blk"
//           >
//             <div className="project-img">
//               <img
//                 src={
//                   item.featuredImage?.node?.sourceUrl ||
//                   `/assets/blogs/blg${(index % 6) + 1}.png`
//                 }
//                 alt={item.title}
//               />
//             </div>
//             <div className="project-text">
//               <h5>
//                 {item.date
//                   ? new Date(item.date).toLocaleDateString()
//                   : new Date().toLocaleDateString()}
//               </h5>
//               <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
//             </div>
//           </Link>
//         ))
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
