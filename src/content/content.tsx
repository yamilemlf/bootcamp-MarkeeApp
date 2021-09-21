import { useState, ChangeEvent } from 'react'
import styled from 'styled-components/macro'
import marked from 'marked'
import 'highlight.js/styles/github.css'

import('highlight.js').then(hljs => {
  const h = hljs.default
  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }
      return h.highlightAuto(code).value
    },
  })
})

function Content () {
  const [content, setContent] = useState('')
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <ContentDiv>
      <TitleDiv>
        <FileImage src='file-text 1.png' alt='logo-arquivo' />
        <InputName defaultValue='Sem título' />
      </TitleDiv>
      <WritingArea>
        <Textarea placeholder='Digite aqui seu markdown' value={content} onChange={handleChange} />
        <Markdown dangerouslySetInnerHTML={{ __html: marked(content) }} />
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
font-size: 14px;
font-family: Inconsolata;
`

export { Content }
