import React from 'react'

const Writer = () => {

    const categoryOptions = [
        {
            name: 'business',
            value: 'business'
        },
        {
            name: 'politics',
            value: 'politics'
        },
        {
            name: 'lifestyle',
            value: 'lifestyle'
        },
        {
            name: 'entertainment',
            value: 'entertainment'
        },
        {
            name: 'sport',
            value: 'sport'
        },
        {
            name: 'foreign',
            value: 'foreign'
        },
        {
            name: 'technology',
            value: 'technology'
        },
    ]

    const postSubmit = e => {
        e.preventDefault()
    }

  return (
    <div className='flex flex-col my-6'>
        <div className='text-center my-4 capitalize'>
            clue zone. comming soon
        </div>
        <form onSubmit={postSubmit} className='flex flex-col gap-5'>
            <input
                type="text"
                placeholder='Post Title'
                className='bg-transparent w-full border-2 border-primary py-2 rounded-sm px-3 my-4 outline-0'
            />
            <textarea
                name="post"
                className='bg-transparent w-full max-h-10 h-10 border-2 border-primary py-2 rounded-sm px-3 my-4 outline-0'
                placeholder='Write to help others...'
            ></textarea>
            <p>Category: </p>
            <select name="category">
                <option value="">---- select a  category ----</option>
                {
                    categoryOptions.map((item, index) => (
                        <option
                            key={index}
                            value={item.value}
                            className='capitalize'
                        >{item.name}</option>
                    ))
                }
            </select>
            <button className='bg-primary rounded-sm px-5 mr-0  py-3 w-fit h-fit my-2 text-secondary font-bold hover:bg-body outline-0'>Post</button>
        </form>
    </div>
  )
}

export default Writer