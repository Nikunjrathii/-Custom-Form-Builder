import React, { useState } from 'react';

const Comph = ({ questionIndex, onDeleteQuestion }) => {
  const [passage, setPassage] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [questions, setQuestions] = useState([]);
  
  const handleAddQuestion = () => {
    let newQuestion = {};
    switch (selectedType) {
      case 'mcq':
        newQuestion = {
          type: 'mcq',
          text: '',
          options: ['', '', '', ''],
          correctAnswer: -1,
        };
        break;
      case 'mca':
        newQuestion = {
          type: 'mca',
          text: '',
          options: ['', '', '', ''],
          correctAnswers: [],
        };
        break;
      case 'shortText':
        newQuestion = { type: 'shortText', text: '', answer: '' };
        break;
      default:
        break;
    }
    setQuestions([...questions, newQuestion]);
    setSelectedType('');
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, correctAnswer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctAnswer = correctAnswer;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswersChange = (questionIndex, correctAnswers) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctAnswers = correctAnswers;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          
         
        </div>
        <label htmlFor="passage" className="block font-semibold">
          Passage:
        </label>
        <textarea
          id="passage"
          value={passage}
          onChange={(e) => setPassage(e.target.value)}
          className="w-full px-2 py-1 border rounded"
          rows="4"
          placeholder="Enter the passage..."
        />
      </div>

      <div className="mb-4">
        <div className="mb-2">
          <label htmlFor="questionType" className="block font-semibold">
            Add Question:
          </label>
          <select
            id="questionType"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-2 py-1 border rounded"
          >
            <option value="">Select question type</option>
            <option value="mcq">Multiple Choice (MCQ)</option>
            <option value="mca">Multiple Correct Answers (MCA)</option>
            <option value="shortText">Short Text</option>
          </select>
          <button
            className="mt-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
            onClick={handleAddQuestion}
          >
            Add Question
          </button>
        </div>

        {questions.map((q, index) => (
          <div key={index} className="mb-2">
            <p>{q.type === 'mcq' ? 'MCQ Question' : q.type === 'mca' ? 'MCA Question' : 'Short Text Question'}</p>
            {q.type === 'mcq' || q.type === 'mca' ? (
              <div>
                <label htmlFor={`question-${index}`} className="block font-semibold">
                  Question:
                </label>
                <input
                  type="text"
                  id={`question-${index}`}
                  value={q.text}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                />
                <label className="block font-semibold">
                  Options:
                </label>
                {q.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center mb-1">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                      className="w-full px-2 py-1 border rounded"
                    />
                    {q.type === 'mcq' && (
                      <input
                        type="radio"
                        name={`correct-answer-${index}`}
                        checked={q.correctAnswer === optionIndex}
                        onChange={() => handleCorrectAnswerChange(index, optionIndex)}
                        className="ml-2"
                      />
                    )}
                    {q.type === 'mca' && (
                      <input
                        type="checkbox"
                        checked={q.correctAnswers.includes(optionIndex)}
                        onChange={() => {
                          const updatedCorrectAnswers = [...q.correctAnswers];
                          if (updatedCorrectAnswers.includes(optionIndex)) {
                            updatedCorrectAnswers.splice(updatedCorrectAnswers.indexOf(optionIndex), 1);
                          } else {
                            updatedCorrectAnswers.push(optionIndex);
                          }
                          handleCorrectAnswersChange(index, updatedCorrectAnswers);
                        }}
                        className="ml-2"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <label htmlFor={`short-text-${index}`} className="block font-semibold">
                  Question:
                </label>
                <input
                  type="text"
                  id={`short-text-${index}`}
                  value={q.text}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                />
                <label htmlFor={`answer-${index}`} className="block font-semibold">
                  Answer (Single Word):
                </label>
                <input
                  type="text"
                  id={`answer-${index}`}
                  value={q.answer}
                  onChange={(e) => {
                    const updatedQuestions = [...questions];
                    updatedQuestions[index].answer = e.target.value;
                    setQuestions(updatedQuestions);
                  }}
                  className="w-full px-2 py-1 border rounded"
                />
              </div>
            )}
            <button
              className="text-red-600 hover:text-red-800"
              onClick={() => handleDeleteQuestion(index)}
            >
              Delete Question
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comph;
