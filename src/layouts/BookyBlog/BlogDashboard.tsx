import React from "react";
import AllArticlesPage from "./pages/AllArticlesPage";

const BlogDashboard = () => {
  return (
    <>
      <div className="p-20">
        <div className="mb-10">Dashboard</div>

        <div>
          <AllArticlesPage />
        </div>
      </div>
    </>
  );
};

export default BlogDashboard;
