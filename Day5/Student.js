function Student(params){
    const students=params.data

    if (!Student) {
    return null; // Or show an error message
  }
    return(
      
    <tr>
        <td>{params.id}</td>
        <td>{params.name}</td>
        <td>{params.course}</td>
    </tr>
   

    )
}
export default Student;
