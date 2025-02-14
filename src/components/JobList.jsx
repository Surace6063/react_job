import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import JobCard from "./JobCard"
const JobList = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await
                axios.get('http://localhost:3000/jobs')
            return res.data
        }
    })

    console.log(data);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-4">
            {
                isLoading ? <span>loading...</span> :
                    isError ? <span>Something went wrong!</span> :
                        data?.map(job => (
                            <JobCard key={job.id} job={job} />
                        ))
            }
        </div>
    )
}
export default JobList