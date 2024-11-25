
const Banner = ({handleFreeCredit}) => {
    return (
        <div className='mt-5'>
            <div className='bgImg flex justify-center items-start'>
                <div className='text-white space-y-6 text-center'>
                    <img className='mt-20 mx-auto' src="/src/assets/banner-main.png" alt="" />
                    <h2 className=' text-2xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className='text-gray-400 font-semibold text-xl'>Beyond Boundaries Beyond Limits</p>
                    <div className='border-green-400 border rounded-3xl inline-block'>
                        <button onClick={() => handleFreeCredit()} className='p-2 rounded-2xl bg-green-400 text-black font-semibold border m-2'>Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;