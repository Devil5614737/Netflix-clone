import {BsPlusLg} from 'react-icons/bs';


export const  Faq=({title,desc})=>{
    return(
       <>
       <div className="bar active">
        <p>{title}</p>
        <BsPlusLg id='barBtn' style={{fontSize:18,cursor:'pointer'}}/>
       </div>
       <p className="detail ">
  {desc}
       </p>
       </>
    )
}