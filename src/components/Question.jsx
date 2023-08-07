import React, { useState } from 'react';
import Cloze from './Cloze';
import Categorize from './Categorize';
import Comph from './Comph';

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1);
  

  const handleAddQuestion = () => {
    let newQuestion = {};

    switch (selectedType) {
      case 'cloze':
        newQuestion = { type: 'cloze', number: questionNumber };
        break;
      case 'comprehension':
        newQuestion = { type: 'comprehension', number: questionNumber };
        break;
      case 'categorize':
        newQuestion = { type: 'categorize', number: questionNumber };
        break;
      default:
        break;
    }

    setQuestions([...questions, newQuestion]);
    setQuestionNumber(questionNumber + 1);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const renderQuestionComponent = (question, index) => {
    switch (question.type) {
      case 'cloze':
        return (
          <div key={index}>
            <h2 className="font-semibold text-lg mb-2">Question {question.number}</h2>
            <Cloze question={question} />
          </div>
        );
      case 'comprehension':
        return (
          <div key={index}>
            <h2 className="font-semibold text-lg mb-2">Question {question.number}</h2>
            <Comph question={question} />
          </div>
        );
      case 'categorize':
        return (
          <div key={index}>
            <h2 className="font-semibold text-lg mb-2">Question {question.number}</h2>
            <Categorize question={question} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='border border-black mt-10 ml-6 nw-50 shadow-lg  border-light-blue-300 bg-white rounded-lg'>
      <div className="page flex flex-col">
        <input
          type="text"
          className="text-xl flex flex-col nw-48 font-medium text-gray-700 px-3 py-1 border-2 border-white rounded hover:border-gray-200 focus:border-[#424242] focus:bg-gray-100 outline-none sml"
          placeholder="Page Title"
        ></input>
        <input
          className="text-xs text-gray-600 nw-48 px-3 border-2 border-white rounded hover:border-gray-200 focus:border-[#424242] focus:bg-gray-100 outline-none "
          type="text"
          placeholder="Page Description"
        ></input>
      </div>
      {questions.map((question, index) => (
        renderQuestionComponent(question, index)
      ))}
      <div className="category">
        <h1 className='font-bold text-xl'>Select Question Category</h1>
        <select
          className='text-l flex flex-col nw-48 font-medium text-gray-700 px-3 py-1 border-2 border-white rounded hover:border-gray-200 focus:border-[#424242] focus:bg-gray-100 outline-none'
          id="questionType"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="">Select question type</option>
          <option value="cloze">Cloze</option>
          <option value="comprehension">Comprehension</option>
          <option value="categorize">Categorize</option>
        </select>
      </div>
      <button
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>
    </div>
  );
};

export default Question;
