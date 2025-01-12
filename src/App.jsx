import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { HomePage, JobsPage, NotFoundPage, JobPage, AddJobPage } from './pages';
import { MainLayout } from './layouts';


const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<MainLayout />} >
  <Route index element={<HomePage />} />
  <Route path="/jobs" element={<JobsPage />} />
  <Route path="/job/:id" element={<JobPage />} />
  <Route path="/add-job" element={<AddJobPage />} />
  <Route path="*" element={<NotFoundPage />} />
</Route>
  ) 
);

const App = () => {

  return  <RouterProvider router={router}/>
};

export default App;