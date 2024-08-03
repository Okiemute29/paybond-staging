import './skeleton.css'

const Skeleton = ({type}) => {
    const styleClasses = `skeleton ${type}`;
    return (
        <div className={styleClasses}> </div>
     );
}
 
export default Skeleton;