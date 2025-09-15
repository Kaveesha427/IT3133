function Body(props){

    const bgstyle={
        backgroundColor:'magenta',
        height:'300px'
    }
    
    return(
        <div style ={bgstyle}>
            <h1>{props.content}</h1>
            <h2>{props.title}</h2>
        </div>
    )
}
export default Body;

