import React from 'react';


const Tweet = ({ name, tweet, tweets, setTweets }) => {

    const deleteTweet = () => {

        setTweets(tweets.filter((state) => state.id !== tweet.id))
    }


    return (
        <div className='tweet'>
            <h2 className='title'> name: {name}</h2>
            <h3> status: {tweet.message}</h3>
            <button onClick={deleteTweet}> Delete</button>
            <button> Like</button>
        </div>
    )
}

export default Tweet
