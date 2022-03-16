
const Addcmp = ({value,handleChange,handleAdd}) => {
    return (
      <div className="Addcmp">
            <input type="text" value={value} onChange={(e)=>handleChange(e.currentTarget.value)}/>
            <button className="btn add" onClick={()=>handleAdd()}>Add list item</button>
      </div>
    );
  }
   
  export default Addcmp;