import styled from 'styled-components/macro'

function Content () {
  return (
    <ContentDiv>
      <TitleDiv>
        <FileImage src='file-text 1.png' alt='logo-arquivo' />
        <InputName defaultValue='Sem título' />
      </TitleDiv>
      <WritingArea>
        <Textarea placeholder='Digite aqui seu markdown' />
        <Markdown />
      </WritingArea>
    </ContentDiv>
  )
}

const ContentDiv = styled.div`
width: 100%;
`

const TitleDiv = styled.div`
display: flex;
align-items: center;
height: 10%;
`
const FileImage = styled.img`
width: 18px;
height: 20px;
margin-right: 10px;
margin-left: 20px
`
const InputName = styled.input`
font-size: 16px;
border: 0;
color: #293445;
outline: 0;
`

const WritingArea = styled.div`
display: flex;
height: 90%;
`

const Textarea = styled.textarea`
width: 50%;
padding: 20px;
border: 0;
outline: 0;
font-size: 14px;
font-family: Inconsolata;
`

const Markdown = styled.article`
width: 50%;
padding: 20px;
border-left: 1px solid #E4E5E7;
`

export { Content }
