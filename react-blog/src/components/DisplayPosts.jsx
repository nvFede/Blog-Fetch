import { useState } from "react";
import axios from "axios";
import PostsGrid from "./PostsGrid";
import PaginationControls from "./PaginationControls";
import useFetch from "../hooks/useFetch";
import endPoints from "../services/api";

function DisplayPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12); //default 12 posts

  const { data, loading, error } = useFetch(
    endPoints.posts.allPosts(currentPage, limit)
  );

  return (
    <main className="flex-1 p-12">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>There was an error: {error}</p>
        ) : (
          <div className="flex flex-col ">
            <PostsGrid posts={data} />
            <PaginationControls
              data={data}
              page={currentPage}
              setPage={setCurrentPage}
              pageSize={limit}
              setPageSize={setLimit}
            />
          </div>
        )}
    </main>
  );
}

export default DisplayPosts;
