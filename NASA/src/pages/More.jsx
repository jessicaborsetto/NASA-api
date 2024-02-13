import MoreCard from '../components/MoreCard';
import BackBtn from '../components/BackBtn';
import { Link } from 'react-router-dom';

function More() {

  return (
    <>
    <MoreCard></MoreCard>
    <div className='absolute'>
      <Link className="nav-link fixed bottom-0 left-0 right-5" to="/" ><BackBtn ></BackBtn></Link>
    </div>
    </>
    
  )
}

export default More


