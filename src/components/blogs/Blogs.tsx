import React from "react";
import AdSenseBanner from "../../components/adsense/AdsenseBanner";

const latestBlogs = [
  {
    title: "How to use Tailwind CSS effectively",
    date: "Apr 1, 2025",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
  },
  {
    title: "10 UI tips for better web design",
    date: "Mar 24, 2025",
    image: "https://flowbite.com/docs/images/blog/image-2.jpg",
  },
  {
    title: "React performance optimization techniques",
    date: "Mar 10, 2025",
    image: "https://flowbite.com/docs/images/blog/image-3.jpg",
  },
];

const relatedBlogs = [
  {
    title: "Prototyping tools in 2025",
    description:
      "A look at the most popular tools for digital prototyping this year.",
    image: "https://flowbite.com/docs/images/blog/image-4.jpg",
  },
  {
    title: "Figma vs Sketch: Which one to choose?",
    description: "Comparing Figma and Sketch for UI/UX design in modern teams.",
    image: "https://flowbite.com/docs/images/blog/image-5.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-800 text-white antialiased">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 mx-auto max-w-screen-xl">
        {/* Left: Blog Content */}
        <article className="lg:col-span-2 w-full max-w-2xl mx-auto format format-sm sm:format-base lg:format-lg format-blue">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Jese Leos"
                />
                <div>
                  <a href="#" className="text-xl font-bold">
                    Jese Leos
                  </a>
                  <p className="text-gray-400 text-base">Graphic Designer</p>
                  <p className="text-gray-400 text-base">Feb. 8, 2022</p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold lg:text-4xl">
              Best practices for successful prototypes
            </h1>
          </header>

          <p className="lead text-white">
            Flowbite is an open-source UI library with Tailwind CSS.
          </p>
          <p className="text-white">
            Before going digital, you might benefit from sketching ideas first.
          </p>
          <p className="text-white">
            <a href="https://flowbite.com" className="underline">
              Flowbite component library
            </a>{" "}
            includes buttons, navbars, and cards.
          </p>

          <figure>
            <img
              src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
              alt="Design"
            />
            <figcaption>Design by Flowbite</figcaption>
          </figure>

          <h2 className="text-white mt-6">Getting started with Flowbite</h2>
          <p className="text-white">
            Learn how to build reusable UI components fast.
          </p>

          <div className="overflow-x-auto mt-4 mb-6">
            <table className="w-full border-collapse border text-sm text-left text-white">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border">Country</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["USA", "April 21, 2021", "$2,300"],
                  ["UK", "June 3, 2021", "$2,500"],
                ].map(([country, date, amount], i) => (
                  <tr key={i}>
                    <td className="p-2 border">{country}</td>
                    <td className="p-2 border">{date}</td>
                    <td className="p-2 border font-bold">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-white">Prototype Tips</h3>
          <ul className="list-disc ml-6 space-y-2 text-white">
            <li>Low vs high fidelity—choose based on your goal</li>
            <li>Design from user needs</li>
            <li>Start from inside out</li>
          </ul>

          {/* Comments Section */}
          <section className="not-format mt-12">
            <h2 className="text-xl font-bold mb-4">Discussion (1)</h2>
            <form className="mb-6">
              <textarea
                className="w-full p-3 mb-3 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700"
                rows="5"
                placeholder="Write a comment..."
              ></textarea>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg">
                Post Comment
              </button>
            </form>

            <article className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm">Michael Gough</p>
                  <time className="text-xs text-gray-400">Feb. 8, 2022</time>
                </div>
              </div>
              <p className="text-white text-sm">
                Very straight-to-point article. Really worth reading. Thank you!
              </p>
            </article>
          </section>

          {/* Related Blogs */}
          <section className="mt-12">
            <h2 className="text-xl font-bold mb-6">Related Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedBlogs.map((blog, i) => (
                <div
                  key={i}
                  className="flex flex-col bg-gray-700 border border-gray-600 rounded-lg overflow-hidden"
                >
                  <img
                    src={blog.image}
                    className="w-full h-40 object-cover"
                    alt={blog.title}
                  />
                  <div className="p-4">
                    <h3 className="text-md font-semibold">{blog.title}</h3>
                    <p className="text-sm text-gray-300">{blog.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Right Sidebar: Latest Blogs */}
        <aside className="space-y-6">
          <h2 className="text-xl font-bold">Latest Blogs</h2>
          {latestBlogs.map((blog, i) => (
            <React.Fragment key={i}>
              <div className="flex items-start space-x-4 bg-gray-700 p-3 rounded-lg shadow-sm">
                <img
                  src={blog.image}
                  className="w-16 h-16 rounded object-cover"
                  alt={blog.title}
                />
                <div>
                  <p className="text-sm font-medium">{blog.title}</p>
                  <p className="text-xs text-gray-300">{blog.date}</p>
                </div>
              </div>

              {/* Show AdSense banner after the first blog */}
              {i === 0 && (
                <div className="my-4">
                  <AdSenseBanner />
                </div>
              )}
            </React.Fragment>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default Blogs;

// import React from "react";

// const latestBlogs = [
//   {
//     title: "How to use Tailwind CSS effectively",
//     date: "Apr 1, 2025",
//     image: "https://flowbite.com/docs/images/blog/image-1.jpg",
//   },
//   {
//     title: "10 UI tips for better web design",
//     date: "Mar 24, 2025",
//     image: "https://flowbite.com/docs/images/blog/image-2.jpg",
//   },
//   {
//     title: "React performance optimization techniques",
//     date: "Mar 10, 2025",
//     image: "https://flowbite.com/docs/images/blog/image-3.jpg",
//   },
// ];

// const relatedBlogs = [
//   {
//     title: "Prototyping tools in 2025",
//     description:
//       "A look at the most popular tools for digital prototyping this year.",
//     image: "https://flowbite.com/docs/images/blog/image-4.jpg",
//   },
//   {
//     title: "Figma vs Sketch: Which one to choose?",
//     description: "Comparing Figma and Sketch for UI/UX design in modern teams.",
//     image: "https://flowbite.com/docs/images/blog/image-5.jpg",
//   },
// ];

// const Blogs = () => {
//   return (
//     <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-800  antialiased">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 mx-auto max-w-screen-xl">
//         {/* Left: Blog Content */}
//         <article className="lg:col-span-2 w-full max-w-2xl mx-auto format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
//           <header className="mb-4 lg:mb-6 not-format">
//             <address className="flex items-center mb-6 not-italic">
//               <div className="inline-flex items-center mr-3 text-sm text-white-900 dark:text-white">
//                 <img
//                   className="mr-4 w-16 h-16 rounded-full"
//                   src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
//                   alt="Jese Leos"
//                 />
//                 <div>
//                   <a href="#" className="text-xl font-bold dark:text-white">
//                     Jese Leos
//                   </a>
//                   <p className="text-gray-500 dark:text-white-400 text-base">
//                     Graphic Designer
//                   </p>
//                   <p className="text-gray-500 dark:text-gray-400 text-base">
//                     Feb. 8, 2022
//                   </p>
//                 </div>
//               </div>
//             </address>
//             <h1 className="mb-4 text-3xl font-extrabold lg:text-4xl dark:text-white">
//               Best practices for successful prototypes
//             </h1>
//           </header>

//           <p className="lead">
//             Flowbite is an open-source UI library with Tailwind CSS.
//           </p>
//           <p>
//             Before going digital, you might benefit from sketching ideas first.
//           </p>
//           <p>
//             <a href="https://flowbite.com">Flowbite component library</a>{" "}
//             includes buttons, navbars, and cards.
//           </p>

//           <figure>
//             <img
//               src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
//               alt="Design"
//             />
//             <figcaption>Design by Flowbite</figcaption>
//           </figure>

//           <h2>Getting started with Flowbite</h2>
//           <p>Learn how to build reusable UI components fast.</p>

//           <div className="overflow-x-auto mt-4 mb-6">
//             <table className="w-full border-collapse border text-sm text-left">
//               <thead className="bg-gray-100 dark:bg-gray-800">
//                 <tr>
//                   <th className="p-2 border">Country</th>
//                   <th className="p-2 border">Date</th>
//                   <th className="p-2 border">Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   ["USA", "April 21, 2021", "$2,300"],
//                   ["UK", "June 3, 2021", "$2,500"],
//                 ].map(([country, date, amount], i) => (
//                   <tr key={i}>
//                     <td className="p-2 border">{country}</td>
//                     <td className="p-2 border">{date}</td>
//                     <td className="p-2 border font-bold">{amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <h3>Prototype Tips</h3>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>Low vs high fidelity—choose based on your goal</li>
//             <li>Design from user needs</li>
//             <li>Start from inside out</li>
//           </ul>

//           {/* Comments Section */}
//           <section className="not-format mt-12">
//             <h2 className="text-xl font-bold mb-4 dark:text-white">
//               Discussion (1)
//             </h2>
//             <form className="mb-6">
//               <textarea
//                 className="w-full p-3 mb-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
//                 rows="5"
//                 placeholder="Write a comment..."
//               ></textarea>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg">
//                 Post Comment
//               </button>
//             </form>

//             <article className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
//               <div className="flex items-center space-x-3 mb-2">
//                 <img
//                   src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <div>
//                   <p className="font-semibold text-sm text-gray-900 dark:text-white">
//                     Michael Gough
//                   </p>
//                   <time className="text-xs text-gray-600 dark:text-gray-400">
//                     Feb. 8, 2022
//                   </time>
//                 </div>
//               </div>
//               <p className="text-gray-800 dark:text-gray-300 text-sm">
//                 Very straight-to-point article. Really worth reading. Thank you!
//               </p>
//             </article>
//           </section>

//           {/* Related Blogs */}
//           <section className="mt-12">
//             <h2 className="text-xl font-bold mb-6 dark:text-white">
//               Related Blogs
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {relatedBlogs.map((blog, i) => (
//                 <div
//                   key={i}
//                   className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
//                 >
//                   <img
//                     src={blog.image}
//                     className="w-full h-40 object-cover"
//                     alt={blog.title}
//                   />
//                   <div className="p-4">
//                     <h3 className="text-md font-semibold dark:text-white">
//                       {blog.title}
//                     </h3>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       {blog.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </article>

//         {/* Right Sidebar: Latest Blogs */}
//         <aside className="space-y-6">
//           <h2 className="text-xl font-bold dark:text-white">Latest Blogs</h2>
//           {latestBlogs.map((blog, i) => (
//             <div
//               key={i}
//               className="flex items-start space-x-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg shadow-sm"
//             >
//               <img
//                 src={blog.image}
//                 className="w-16 h-16 rounded object-cover"
//                 alt={blog.title}
//               />
//               <div>
//                 <p className="text-sm font-medium text-gray-900 dark:text-white">
//                   {blog.title}
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   {blog.date}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default Blogs;

// import React from "react";

// const Blogs = () => {
//   return (
//     <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
//       <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
//         <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
//           <header className="mb-4 lg:mb-6 not-format">
//             <address className="flex items-center mb-6 not-italic">
//               <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
//                 <img
//                   className="mr-4 w-16 h-16 rounded-full"
//                   src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
//                   alt="Jese Leos"
//                 />
//                 <div>
//                   <a
//                     href="#"
//                     rel="author"
//                     className="text-xl font-bold text-gray-900 dark:text-white"
//                   >
//                     Jese Leos
//                   </a>
//                   <p className="text-base text-gray-500 dark:text-gray-400">
//                     Graphic Designer, educator & CEO Flowbite
//                   </p>
//                   <p className="text-base text-gray-500 dark:text-gray-400">
//                     <time dateTime="2022-02-08" title="February 8th, 2022">
//                       Feb. 8, 2022
//                     </time>
//                   </p>
//                 </div>
//               </div>
//             </address>
//             <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
//               Best practices for successful prototypes
//             </h1>
//           </header>

//           <p className="lead">
//             Flowbite is an open-source library of UI components built with the
//             utility-first classes from Tailwind CSS.
//           </p>
//           <p>
//             Before going digital, you might benefit from scribbling down some
//             ideas in a sketchbook.
//           </p>
//           <p>
//             I found a{" "}
//             <a href="https://flowbite.com">component library called Flowbite</a>
//             . It includes buttons, navigation bars, cards, and more built with
//             Tailwind CSS.
//           </p>

//           <figure>
//             <img
//               src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
//               alt="Digital art"
//             />
//             <figcaption>Digital art by Anonymous</figcaption>
//           </figure>

//           <h2>Getting started with Flowbite</h2>

//           <h4>Table example</h4>
//           <p>
//             A serif is a small shape or projection that appears at the beginning
//             or end of a stroke on a letter.
//           </p>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border border-collapse">
//               <thead>
//                 <tr className="bg-gray-100 dark:bg-gray-800">
//                   <th className="p-2 border">Country</th>
//                   <th className="p-2 border">Date & Time</th>
//                   <th className="p-2 border">Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   ["United States", "April 21, 2021", "$2,300"],
//                   ["Canada", "May 31, 2021", "$300"],
//                   ["United Kingdom", "June 3, 2021", "$2,500"],
//                   ["Australia", "June 23, 2021", "$3,543"],
//                   ["Germany", "July 6, 2021", "$99"],
//                   ["France", "August 23, 2021", "$2,540"],
//                 ].map(([country, date, amount], index) => (
//                   <tr key={index}>
//                     <td className="p-2 border">{country}</td>
//                     <td className="p-2 border">{date}</td>
//                     <td className="p-2 border font-bold">{amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <h3>Best practices for setting up your prototype</h3>
//           <p>
//             <strong>Low fidelity or high fidelity?</strong> Choose fidelity
//             level based on your prototype’s purpose.
//           </p>
//           <p>
//             <strong>Consider your user.</strong> Design with user flow and needs
//             in mind.
//           </p>
//           <p>
//             <strong>Start from the inside out.</strong> Prioritize elements that
//             are most useful to the user.
//           </p>
//           <p>
//             And that’s how you design great prototypes using Flowbite and Figma!
//           </p>

//           {/* Comments Section */}
//           <section className="not-format mt-12">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
//                 Discussion (20)
//               </h2>
//             </div>
//             <form className="mb-6">
//               <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//                 <label htmlFor="comment" className="sr-only">
//                   Your comment
//                 </label>
//                 <textarea
//                   id="comment"
//                   rows="6"
//                   className="w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
//                   placeholder="Write a comment..."
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
//               >
//                 Post comment
//               </button>
//             </form>

//             {/* Sample Comment */}
//             <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
//               <footer className="flex justify-between items-center mb-2">
//                 <div className="flex items-center">
//                   <img
//                     className="w-6 h-6 rounded-full mr-2"
//                     src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
//                     alt="Michael Gough"
//                   />
//                   <div>
//                     <p className="font-semibold text-sm text-gray-900 dark:text-white">
//                       Michael Gough
//                     </p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       <time dateTime="2022-02-08" title="February 8th, 2022">
//                         Feb. 8, 2022
//                       </time>
//                     </p>
//                   </div>
//                 </div>
//               </footer>
//               <p>
//                 Very straight-to-point article. Really worth time reading. Thank
//                 you! Tools are important, but strategy is key.
//               </p>
//             </article>
//           </section>
//         </article>
//       </div>
//     </div>
//   );
// };

// export default Blogs;
