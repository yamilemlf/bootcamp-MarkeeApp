import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

function App () {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  )
}

const Container = styled.div`
display: flex;
height: 100%;
width: 100%;
`

export { App }
