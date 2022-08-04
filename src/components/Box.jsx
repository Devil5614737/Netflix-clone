export const Box=({title,desc,image})=>{
    return(
        <div className="box">
        <div className="container">
            <div className="textContainer">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className="thumbnail">
                <img src={image} alt='thumbnail'/>
            </div>
        </div>
    </div>
    )
}