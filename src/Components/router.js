import { Routes, Route } from "react-router-dom";
import ListPosts from './ListPosts';
import AddPosts from './AddPosts';
import PageNotFound from './PageNotFound';
import Homepage from './Homepage';

const RouterConfig = () => {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/listposts" element={<ListPosts />} />
    <Route path="/addposts" element={<AddPosts />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  );
};

export default RouterConfig;