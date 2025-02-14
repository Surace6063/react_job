import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { MapPin, BanknoteIcon } from "lucide-react"
import { useParams } from "react-router-dom"

const SingleJobPage = () => {
    const { id } = useParams()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['job', id],
        queryFn: async () => {
            const res = await
                axios.get(`http://localhost:3000/jobs/${id}`)
            return res.data
        }
    })

    if (isLoading) return <span>loading...</span>
    if (isError) return <span>Error Fetching data!</span>

    return (
        <div className="container my-10 md:flex gap-20">
            <div className='basis-[60%]'>
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">Company Info</h1>
                    <h2 className="text-teal-800 mb-2 font-semibold text-lg">
                        {data?.company_name}
                    </h2>
                    <p className="text-gray-700 tracking-wider leading-relaxed text-sm">
                        {data?.company_description}
                    </p>
                </div>
                <div className="border border-slate-200 my-6" />
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">Job Info</h1>
                    <span className="text-teal-800 mb-2 font-semibold">
                        {data?.type}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {data?.title}
                    </h2>
                    <p className="text-gray-700 tracking-wider leading-relaxed text-sm">
                        {data?.description}
                    </p>
                    <div className="mt-4 space-y-3">
                        <div className='text-orange-900 flex gap-2 items-center text-sm font-semibold'>
                            <MapPin />
                            <span>{data?.location}</span>
                        </div>
                        <div className='text-green-700 flex gap-2 items-center text-sm font-semibold'>
                            <BanknoteIcon />
                            <span>${data?.salary}/ Year</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-slate-200 my-10 md:hidden"></div>

            {/* sidebar */}
            <div className='basis-[40%]'>
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Company Contact Info</h1>
                    <div className="space-y-1">
                        <h3 className="text-slate-800 font-semibold mb-1">Contact Email:</h3>
                        <p className="text-gray-600 text-sm italic">
                            {data?.company_email}
                        </p>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-slate-800 font-semibold mb-1">Contact Phone:</h3>
                        <p className="text-gray-600 text-sm italic">
                            {data?.company_phone}
                        </p>
                    </div>
                </div>
                <div className="my-8 border border-slate-200" />
                <div>
                    <h3 className="text-xl font-bold mb-4">Manage Job</h3>
                    <button className="bg-teal-800 hover:bg-teal-800/90 text-white mr-4">
                        Edit Job
                    </button>
                    <button className="bg-red-700 hover:bg-red-700/90 text-white">
                        Delete Job
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SingleJobPage