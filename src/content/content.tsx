import styled from 'styled-components/macro'

function Content () {
  return (
    <ContentDiv>
      <TitleDiv>
        <FileImage src='file-text 1.png' alt='logo-arquivo' />
        <TitleName>Título</TitleName>
      </TitleDiv>
      <WritingArea>
        <TextareaDiv>Textarea</TextareaDiv>
        <MarkdownDiv>
          markdown
        </MarkdownDiv>
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
const TitleName = styled.p`
font-size: 18px;
`

const WritingArea = styled.div`
display: flex;
height: 90%;

`

const TextareaDiv = styled.div`
width: 50%;
border-right: 1px solid #E4E5E7;
padding: 20px;
`

const MarkdownDiv = styled.div`
width: 50%;
padding: 20px;
`

export { Content }
