import styled from 'styled-components/macro'

function Sidebar () {
  return (
    <Aside>
      <Div>
        <Icon src='favicon.png' alt='favicon' />
        <Markee src='markee.png' alt='markee.' />
      </Div>
      <Div>
        <Button>+ Adicionar arquivo</Button>
      </Div>
      <Div>
        <Ul>
          <List><Anchor href='/'>Arquivo.txt</Anchor><DelButton>x</DelButton></List>
          <List><Anchor href='/'>Imagem.png</Anchor><DelButton>x</DelButton></List>
        </Ul>
      </Div>
    </Aside>
  )
}

const Aside = styled.aside`
display: flex;
align-items: center;
flex-direction: column;
background: #1E293B;
height: 100%;
width: 332px;
`

const Div = styled.div`
margin: 30px 0px;
`

const Icon = styled.img`
`

const Markee = styled.img`
margin-left: 20px;
margin-bottom: 10px;
`

const Button = styled.button`
width: 250px;
height: 34px;
background: #1FC8E1;
border: 0;
border-radius: 3.4px;
font-family: DM Sans;
font-size: 14px;
letter-spacing: -0.02em;
color: #293445;
margin: 20px;
`
const Ul = styled.ul`
margin: 0px 10px;
padding: 0px;
`
const List = styled.li`
display: flex;
justify-content: space-between;
list-style: none;
margin: 10px;
width: 220px;
padding: 5px;
`
const Anchor = styled.a`
text-decoration: none;
color: #E4E5E7;
font-family: DM Sans;
font-size: 14px;
`

const DelButton = styled.button`
color: #E4E5E7;
background-color: #1E293B;
border: 0;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
`

export { Sidebar }
