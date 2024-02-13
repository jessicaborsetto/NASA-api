import MyCard from '../components/MyCard';
import MyButton from '../components/MyButton';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <h1 className="text-3xl font-bold py-5 text-center text-zinc-900">Get an image a day by fakeNASA</h1>

            {/* <div className=' grid grid-cols-1 gap-4'> */}
            <div className='flex flex-col gap-4 h-full'>
                <div>
                    <MyCard />
                </div>
                <div>
                    <Link className="nav-link" to="/more" ><MyButton></MyButton></Link>
                </div>
            </div>
        </>
    )
}
export default Home