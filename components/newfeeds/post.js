import React from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { PostWrap } from './styled'
import avatar from '~/public/images/header/avatar.png'
import moment from 'moment'
import { POST_TYPES } from '~/constants'
import HeartIcon from '~/public/icons/heart.svg'
import CommentIcon from '~/public/icons/message-square.svg'
import RepeatIcon from '~/public/icons/repeat.svg'
import ShareIcon from '~/public/icons/share.svg'
import { nFormatter } from '~/helpers/formater'

export default function Post({ post }) {
  return <PostWrap>
    <div className='head'>
      <div className='left'>
        <Image
          src={avatar}
          alt="avatar"
          width={48}
          height={48}
        />
      </div>
      <div className='right'>
        <p>
          <span className='user-info'>{post?.account?.name} #{post?.account?.username}</span>
          <span className='date'>{moment.unix(Number(post?.time) / 1000000000).format('ddd MMM D YYYY HH:mm')}</span>
        </p>
        <p>{post?.title}</p>
      </div>
    </div>
    <div className='bottom'>
      <div className='image'>
        {post?.post_type?.type === POST_TYPES.IMAGE ? <img src={post?.post_type?.url} alt="post" /> : <ReactPlayer className='resource' url={post?.post_type?.url} />} 
      </div>
      <div className='interaction'>
        <div className='item'>
          <HeartIcon /> <span className='number liked'>{nFormatter(post?.interaction?.reactions)}</span>
        </div>
        <div className='item'>
          <CommentIcon /> <span className='number'>{nFormatter(post?.interaction?.comments)}</span>
        </div>
        <div className='item'>
          <RepeatIcon /> <span className='number'>{nFormatter(post?.interaction?.share)}</span>
        </div>
        <div className='item'>
          <ShareIcon />
        </div>
      </div>
    </div>
  </PostWrap>
}