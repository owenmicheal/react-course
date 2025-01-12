import { useState, useEffect } from 'react';
import { JobListing } from './index';

import { Loader } from './index';

const JobListings = ({ isHome = false }) => {
    const [ jobs, setJobs ] = useState([]);
    const [ loading, setloading ] = useState(true);

    useEffect(() => {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      const fetchJobs = async () => {
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(data);
      } catch (error) {
        console.log('error fetching data', error);
      } finally {
        setloading(false);
      }
    }
      fetchJobs();
    }, []);

  return (
    <section id='jobs' className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? 'Latest Jobs' : 'Browse Jobs' }
        </h2>
          {/* <!-- Job Listing 1 --> */}
          { loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map(job => (
                  <JobListing key={job.id} job={job} />
                ))}
            </div>
          )}
      </div>
    </section>
  )
}

export default JobListings;