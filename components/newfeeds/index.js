import React, { useEffect, useState, useMemo } from 'react'
import { faker } from '@faker-js/faker';
import { viewState } from '~/config/nearUtils'
import YourMind from '../your-mind'
import Post from './post'
import avatar from '~/public/images/header/avatar.png'
import { NewFeedsWrap } from './styled'

export default function Newfeeds() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    if (typeof window !== "undefined" && window?.walletConnection && window.walletConnection.isSignedIn()) {
      viewState()
      .then(returnedValue => {
        debugger
        setPosts(returnedValue)
      })
      .catch(err => {
        setPosts([])
        console.log({ err })
      })
    }
  }, [])


  const formatPosts = useMemo(() => {
    return posts.filter(post => post).map(post => ({
      ...post,
      account: {
        avatar: avatar,
        name: faker.name.firstName(), 
        username: faker.internet.userName()
      },
      interaction: {
        reactions: faker.datatype.number(),
        comments: faker.datatype.number(),
        share: faker.datatype.number()
      }
    }))
  }, [posts])

  return <NewFeedsWrap>
    <YourMind />
      {formatPosts.map(post => <Post key={post?.id} post={post} />)}
    <Post />
  </NewFeedsWrap>
}