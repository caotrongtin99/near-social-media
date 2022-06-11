import Head from 'next/head'
import Image from 'next/image'
import MainPage from '~/components/main-page'

export default function Home(props) {
  return (
    <MainPage {...props} />
  )
}
