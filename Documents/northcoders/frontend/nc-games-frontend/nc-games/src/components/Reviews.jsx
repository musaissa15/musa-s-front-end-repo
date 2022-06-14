import React from 'react'
import {getReviews} from '../utils/Api'
import { useEffect, useState } from 'react'

export const Reviews = () => {
  const [reviews, setReviews] = useState([])
    useEffect(() => {
        getReviews().then((reviewsFromApi) => {
          setReviews(reviewsFromApi)
        })
    }, [])

console.log(reviews);
    
    console.log('ouside mehn <<<<<<<<<');
    return <ul>
        {reviews.map(review => {
           return (
               <li key={review.review_id}
               className='all-reviews'>
								{review.title}
								{review.category}
								{review.owner}
								{review.review_body}
								{review.created_at}
								{review.votes}
								{review.designer}
								{review.review_img_url}
								{review.comment_count}
							</li>
						);  
        })}
    </ul>
}
