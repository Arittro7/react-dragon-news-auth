import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
  const {author,title,image_url,details,total_view,rating, _id} = news
  const {img, published_date, name} = author
  const {number} = rating
  return (
    <div className='p-2'>
      <div className='flex'>
        <img className='w-11 rounded-full mr-2' src={img} alt="" />
        <div className='text-sm'>
          <h2>{name}</h2>
          <p>{published_date}</p>
        </div>
      </div>
      
      <div className='my-2'>
        <h2 className='text-xl my-2'>{title}</h2>
        <img src={image_url} alt="" />
      </div>
      <div className='font-normal text-sm'>
          {
            details.length > 200 ? 
            <p>{details.slice(0,200)}
            <Link className='text-blue-900 font-semibold'
             to={`/news/${_id}`}>...READ MORE</Link></p>
            :
            <p>{details}</p>
          }
        </div>
        
        <div className='flex justify-between text-sm mt-3'>
          <div className='space-x-1'>
            <span>rating</span>
            <span>{number}</span>
          </div>
          <p> total read{total_view}</p>
        </div>
    </div>
  );
};

export default NewsCard;
NewsCard.propTypes ={
  news: PropTypes.object
}