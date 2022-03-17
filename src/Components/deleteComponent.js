
const Delete = ({handleClick}) => {
    return (
      <div className="Delete">
      <button className="btn delete" onClick={()=>handleClick()}>Delete </button>
      </div>
    );
  }
   
  export default Delete;