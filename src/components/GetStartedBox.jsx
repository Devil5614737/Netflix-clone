import {FaChevronRight} from 'react-icons/fa';

export const GetStartedBox = () => {
    return (  
        <div className="getStarted">
        <input type="text"  placeholder='email'/>
        <button>Get Started <FaChevronRight style={{marginLeft:5}}/></button>
      </div>
    );
}
 
