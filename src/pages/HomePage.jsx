import JobList from "../components/JobList"

const HomePage = () => {
    return (
        <div className="container my-10">
            <div className="bg-teal-800 h-96 rounded-md flex justify-center items-center">
                <div className="text-white text-center">
                    <h1 className="text-4xl font-bold">
                        Find your <span className="text-green-500">dream job</span> with ReactJob.
                    </h1>
                    <p className="max-w-xl mx-auto mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam dicta sint tenetur! Aspernatur expedita sed nemo, fugiat iusto inventore.
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl text-slate-800 font-semibold">
                    Recent Jobs
                </h1>

                <JobList />
            </div>
        </div>
    )
}
export default HomePage