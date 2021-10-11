import {useParams} from 'react-router-dom';
import Description from './Description';

const Desc = () => {
const { id } = useParams();
    return (
  
        <div className="blog-details">
            <p>Product Details - { id }</p>
        </div>
 
    );
}
export default Desc;