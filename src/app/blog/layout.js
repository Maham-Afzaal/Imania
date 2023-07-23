import React from "react";
const layout = ({ children }) => {
  return (
    <div>
      <head>
        <title>Blog</title>
        <meta name="description" content="Blog Page" />
        <link rel="icon" href="/blog.png" />
      </head>
      {children}
    </div>
  );
};

export default layout;
