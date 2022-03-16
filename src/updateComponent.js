import image from './748851.png'
const Update = ({handleClickupdate}) => {
    return (
      <button type="button" className="btn update" onClick={()=>handleClickupdate()}> <img src={image} /></button>
    );
  }
   
  export default Update;