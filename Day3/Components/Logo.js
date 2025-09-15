
  import '../CSS/Style.css' 
  function Logo(){
    return(
        <div>
            <img src={require('../logo.jpg')} alt = 'myapp logo' className='Logo'/>

        </div>
    )
}
export default Logo;

