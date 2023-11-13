import { wrap } from '../utils/abrevate'
import { datas } from '../utils/dummy'

import { Link } from 'react-router-dom'

const Container = () => {

const Commented = (data) => {
  if(data.comments.length < 1) return 'no comment'
    if(data.comments.length == 1) return data.comments.length + ' comment'
    return data.comments.length + ' comments'
}
  
  return (
    <div  className=''>
      <div>
        {
          datas.map(data => (
            <Link
              to={`news/${data.id}`}
              key={data.id}
            >
              <div className='px-4 py-3 relative w-full hover:shadow-lg hover:bg-darker h-fit shadow-sm my-2 shadow-black'>
                <h1 className='font-extrabold text-lg'>{data.heading}</h1>
                <div className='text-gray text-[10px] py-1 flex gap-8'>
                  <b>By: {data.blogBy}</b>
                  <p>{data.postedAt}</p>
                </div>
                <p className='text-sm text-body'>{wrap(data.body)}</p>
                <small className='text-gray flex absolute right-2 bottom-1 text-[8px]'>
                  {
                    Commented(data)
                  }
                </small>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
    )
  }
  
export default Container