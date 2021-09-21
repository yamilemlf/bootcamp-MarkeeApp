import styled from 'styled-components/macro'

type Status = 'editing' | 'saving' | 'saved'

type File = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}

const files: File[] = [
  {
    id: '0',
    name: 'sidebar.js',
    content: 'Conteúdo do sidebar.js',
    active: true,
    status: 'editing',
  },
  {
    id: '1',
    name: 'app.js',
    content: 'Conteúdo do app.js',
    active: false,
    status: 'saved',
  },
  {
    id: '2',
    name: 'root.tsx',
    content: 'Conteúdo do root.tsx',
    active: true,
    status: 'saved',
  },
  {
    id: '3',
    name: 'index.tsx',
    content: 'Conteúdo do index.tsx',
    active: true,
    status: 'saving',
  },
]

function Sidebar () {
  return (
    <Aside>
      <Div>
        <Icon src='favicon.png' alt='favicon' />
        <Markee src='markee.png' alt='markee.' />
      </Div>
      <Hr />
      <Div>
        <Button>+ Adicionar arquivo</Button>
      </Div>
      <Div>
        <Ul>
          {files.map(file => (
            <List key={file.id}>
              <FileImage src='file-text 1.png' alt='logo-arquivo' />
              <Anchor href={'/file/' + file.id}>{file.name}</Anchor>
              {!file.active && <DelButton>x</DelButton>}
              {file.active && file.status === 'editing' && <ImgEditing src='Ellipse 1.png' alt='editing' />}
              {file.active && file.status === 'saved' && <ImgEditing src='Check.png' alt='check' />}
              {file.active && file.status === 'saving' && <ImgEditing src='Ellipse 2.png' alt='saving' />}
            </List>
          ))}
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
padding-top: 40px;
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

const Hr = styled.hr`
border: 0;
border-top: 2px solid #1FC8E1;
padding-left: 25px;
padding-right: 155px;

:after {
  content: "Arquivos";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 14px;
  padding: 0 5px;
  color: #E4E5E7;
  background: #1E293B;

}
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

&:hover {
background: #18A1B5;
}
`

const Ul = styled.ul`
margin: 0px;
padding: 0px;
`

const List = styled.li`
display: flex;
align-items: center;
justify-content: between;
list-style: none;
width: 220px;
padding: 10px 20px;
border-radius: 3px;

&:hover {
  background: #293445;
}
`

const FileImage = styled.img`
width: 18px;
height: 20px;
margin-right: 10px;
`

const Anchor = styled.a`
text-decoration: none;
color: #E4E5E7;
font-family: DM Sans;
font-size: 14px;
`

const DelButton = styled.button`
color: #E4E5E7;
background-color: transparent;
border: 0;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
position: fixed;
left: 230px;
`

const ImgEditing = styled.img`
position: fixed;
left: 236px;
`

export { Sidebar }
