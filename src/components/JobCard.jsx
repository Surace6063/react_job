import { BanknoteIcon, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <div className="border border-slate-300 rounded-md p-4">
            <h3 className="text-teal-800 mb-1">
                {job.type}
            </h3>
            <h1 className="text-xl font-semibold text-gray-900 truncate">
                {job.title}
            </h1>
            <p className="text-gray-700 tracking-wide line-clamp-3 my-4">
                {job.description}
            </p>

            <div className='flex justify-between items-center'>
                <div className='flex gap-1 items-center text-yellow-800 text-sm font-light'>
                    <MapPin />
                    <span>{job.location}</span>
                </div>
                <div className='flex gap-1 items-center text-green-800 text-sm font-light'>
                    <BanknoteIcon />
                    <span>{job.salary}</span>
                </div>
            </div>

            <div className='border border-slate-200 my-4'></div>

            <div className='flex justify-end'>
                <Link to={`/job/${job.id}`}>
                    <button className='bg-teal-800 hover:bg-teal-800/90 text-white flex gap-1 items-center group'>
                        Read More <ChevronRight className='group-hover:translate-x-1 duration-200 ease-in-out' />
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default JobCard