import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { HomePage, JobsPage, NotFoundPage, JobPage, AddJobPage, EditJobPage } from './pages';
import { MainLayout } from './layouts';


const App = () => {

  const addJob = async (newJob) => {
    // Add job to the database
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
      });
      return;
    };

    // Delete job from the database
    const deleteJob = async (id) => {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE'
      });
      return;
    }

    // Edit job in the database
      const editJob = async (id, updatedJob) => {
        try {
          const res = await fetch(`/api/jobs/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedJob),
          });
      
          if (!res.ok) {
            throw new Error('Failed to update job');
          }
        } catch (error) {
          console.error(error);
          toast.error('Error updating job');
        }
      };
    
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
  <Route path="/" element={<MainLayout />} >
    <Route index element={<HomePage />} />
    <Route path="/jobs" element={<JobsPage />} />
    <Route path="/job/:id" element={<JobPage deleteJob={ deleteJob } />} />
    <Route path="/job/edit/:id" element={<EditJobPage editJob={editJob}  />} />
    <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
    ) 
  );

  return  <RouterProvider router={router}/>
};

export default App;