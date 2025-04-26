
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const AccountProgress = () => {
    return (
        <div className="bg-white-100 rounded-2xl shadow p-4 flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Account Progress</h2>
            <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                    <div className="w-24 h-24 rounded-full border-4 border-green-600 border-r-green-600 border-l-white" />


                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black-68">
                        85%
                    </div>
                </div>
            </div>
            <div className="bg-neutral-200 p-2">
                <h3 className="font-medium text-sm pt-4 m-4">Steps Completed</h3>
                <ul className="text-sm list-disc ml-5">
                    <div className='py-4'>
                        <div className='flex justify-row ml-0 mb-3'> <li>Profile Setup</li>

                            <div className='bg-green-500 rounded-2xl ml-30 mt-0'>
                                <CheckCircleIcon />
                            </div>
                        </div>
                        <div className='flex justify-row ml-0 mb-3'><li>Initial Training</li>
                            <div className='bg-green-500 rounded-2xl ml-28 mt-0'> <CheckCircleIcon /></div>

                        </div>
                        <div className='flex justify-row ml-0'><li>Legal Documents</li>
                            <div className='bg-green-500 rounded-2xl ml-22.5 mt-0'><CheckCircleIcon /></div>
                        </div>
                    </div>
                </ul>
            </div>
            <div>
                <h3 className="font-medium text-sm">Steps Remaining</h3>
                <ul className="text-sm list-disc ml-5 text-gray-500">
                    <div className='flex justify-row ml-0'> <li>Financial Integration</li>
                        <div className='bg-green-500 rounded-2xl ml-20.5 mt-0 mb-2'><CheckCircleIcon /></div>
                    </div>
                    <div className='flex justify-row ml-0'> <li>Final Review</li>
                        <div className='bg-green-500 rounded-2xl ml-32 mt-0'> <CheckCircleIcon /></div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default AccountProgress;