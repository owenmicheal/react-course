import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { HomePage, JobsPage, NotFoundPage } from './pages';
import { MainLayout } from './layouts';


const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<MainLayout />} >
  <Route index element={<HomePage />} />
  <Route path="/jobs" element={<JobsPage />} />
  <Route path="*" element={<NotFoundPage />} />
</Route>
  ) 
);

const App = () => {

  return  <RouterProvider router={router}/>
};

export default App;