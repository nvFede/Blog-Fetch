const BASE_URL = "https://jsonplaceholder.typicode.com/";

const endPoints = {
  posts: {
    allPosts: (page, limit) => `${BASE_URL}posts?_page=${page}&_limit=${limit}`,
    singlePost: (id) => `${BASE_URL}posts${id}`,
  },
  comments: {
    allComents: (id) => `${BASE_URL}posts${id}/comments`,
  },
  image: {
    imageById: (id) => `${BASE_URL}photos/${id}`, // currently not supported
  },
  users: {
    userById: (id) => `${BASE_URL}users/${id}`,
  },
};

export default endPoints;
