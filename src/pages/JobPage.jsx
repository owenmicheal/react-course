import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader } from "../components";
import { FaMapMarker, FaArrowLeft } from "react-icons/fa";

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data);
            } catch (error) {
                console.log('error fetching data', error);
            } finally {
                setLoading(false);
            }
        }
        fetchJob();
    }
    , []);

  return loading ? <Loader loading={loading} /> : (
    <>
        <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/jobs"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
        <div className=" hover:bg-indigo-500 hover:text-white hover:p-1 hover:rounded-full hover:mr-2 hover:transition-all active:bg-indigo-700">
          <FaArrowLeft className="mr-3"/>
        </div>
           Back to Job Listings
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{job.title}</div>
              <h1 className="text-3xl font-bold mb-4">
                {job.title}
              </h1>
              <div
                className="text-orange-700 mb-4 flex align-middle justify-center md:justify-start"
              >
                <div className="text-orange-700 mb-2 mr-3">
                    <FaMapMarker className="inline-block m-2 mb-3" />
                    { job.location }
                </div>
              </div>
            </div> 

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
            </h3>

            <p className="mb-4">
                {job.description}
            </p>

            <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

            <p className="mb-4">{job.salary}r</p>
            </div>
            </main>

            <aside>

            <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Company Info</h3>

            <h2 className="text-2xl">{job.company.name}</h2>

            <p className="my-2">
                {job.company.description}
            </p>

            <hr className="my-4" />

            <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                {job.company.contactEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/jobs/edit/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link
              >
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>

    </>
  );

};


export default JobPage;