import React from 'react'
import styled from 'styled-components'
import OrangeEllipse from '~/components/orange-ellipse'
import PurpleEllipse from '~/components/purple-ellipse'

const Layout = styled.main`
  position: relative;
  background-color: black;
`
export default function MasterLayout(props) {
  return <Layout>
    <OrangeEllipse />
    <PurpleEllipse />
    {props.children}
  </Layout>
}