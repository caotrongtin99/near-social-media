import dynamic from 'next/dynamic'

const MainPage = dynamic(() => import("~/components/main-page"), {
  ssr: false,
});

export default function Home(props) {
  return (
    <MainPage {...props} />
  )
}
