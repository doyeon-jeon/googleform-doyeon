//import { rgbToHex } from '@mui/material';
import { useState } from 'react';
import {QuestionInterface} from '../interfaces/questionInterface';

// http://54.145.10.91:8000/

// etc 수정, 디자인

export default function Create() {
  const [title, setTitle] = useState("");
  const [subtitle, setsubTitle] = useState("");

  const [questions, setQuestions] = useState([
    {
      qType: "radio",
      title: "sample title",
      desc: "sample description",
      options: [
        {
          title: "[option] sample title",
          desc: "[option] sample desc"
        },
        {
          title: "[option2] sample title",
          desc: "[option2] sample desc"
        }
      ]
    },
    {
      qType: "checkbox",
      title: "sample title",
      desc: "sample description",
      options: [
        {
          title: "[option] sample title",
          desc: "[option] sample desc"
        },
        {
          title: "[option2] sample title",
          desc: "[option2] sample desc"
        }
      ]
    },
    {
      qType: "text",
      title: "sample title",
      desc: "sample description",
      options: [] 
    }
  ])

  const updateQuestionType = (index, qType) => {
    const cp = [...questions]
    cp[index].qType = qType
    setQuestions(cp);
  }
  const updateQuesetionTitle = (index, text) => {
    const cp = [...questions]
    cp[index].title = text
    setQuestions(cp)
  }
  const addQuestion = () => {
    const cp = [...questions]
    cp.push({qType: "text", title: "sample title", desc: "sample desc", options:[]})
    setQuestions(cp);
  }
  const delQuestion = () => {
    const cp = [...questions]
    cp.splice(-1,1)
    setQuestions(cp);
  }
  const addOptionToQuestion = (index) => {
    const cp = [...questions]
    cp[index].options.push({title: "option", desc: "option"})
    setQuestions(cp);
  }
  const delOptionToQuestion = (index) => {
    const cp = [...questions]
    cp[index].options.splice(-1,1)
    setQuestions(cp);
  }
  const etcOptionToQuestion = (index) => {
    const cp = [...questions]
    cp[index].options.push({title: "etc", desc: "etc"})
    setQuestions(cp);
  }

  return (
    <div style={{ backgroundColor:"rgba(270,230,270)" }}>
      <textarea value={title} onChange={e => setTitle(e.target.value)}/><br />
      <textarea value={subtitle} onChange={e => setsubTitle(e.target.value)}/>
      <br/><br/>
      {questions.map((question, index) => {
        return <Question question={question}
          index={index}
          updateQuesetionTitle={updateQuesetionTitle}
          addOptionToQuestion={addOptionToQuestion}
          updateQuestionType={updateQuestionType}
          delOptionToQuestion={delOptionToQuestion}
          etcOptionToQuestion={etcOptionToQuestion}
          addQuestion={addQuestion}
          delQuestion={delQuestion}
        />
      })
      }
    </div>
  )
}

const Question = ({question, index, updateQuesetionTitle, addQuestion, delQuestion, etcOptionToQuestion, addOptionToQuestion, delOptionToQuestion, updateQuestionType }) => {
  return <>
    question title:  {index}
    <textarea value={question.title} onChange={e => updateQuesetionTitle(index, e.target.value)} />
    <br />
    <button onClick={e => addQuestion(index)}>add</button>
    <button onClick={e => delQuestion(index)}>delete</button>
    <br />
    <select value={question.qType} onChange={e => updateQuestionType(index, e.target.value)}>
      <option value="checkbox">checkbox</option>
      <option value="radio">radio</option>
      <option value="text">text</option>
    </select>

    {
    (question.qType === "radio" || question.qType === "checkbox") &&
      <>
        <span>options</span>
        <div style={{ paddingLeft: 20, }}>
          {
            question.options.map((option, index) => {
              return <div key={index}>
                option title: {option.title}
              </div>
            })
          }
          <button onClick={e => addOptionToQuestion(index)}>add</button>
          <button onClick={e => etcOptionToQuestion(index)}>etc</button>
          <button onClick={e => delOptionToQuestion(index)}>delete</button>
        </div>
      </>
    }
    <br /><br /><br />
  </>

}
