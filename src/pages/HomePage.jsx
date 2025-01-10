import { Hero, HomeCards, JobListings, ViewAllJobs  } from "../components";

const HomePage = () => {
  return (
    <div className="scroll-smooth overflow-y-scroll max-h-screen">
        <Hero />
        <HomeCards />
        <JobListings isHome = {true} />
        <ViewAllJobs />
    </div>
  )
}

export default HomePage;