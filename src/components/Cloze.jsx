import React, { useState } from 'react';

const Cloze = () => {
  const [sentence, setSentence] = useState('');
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState('');

  const handleSentenceChange = (event) => {
    setSentence(event.target.value);
  };

  const handleUnderline = (word) => {
    const modifiedSentence = sentence.replace(word, '_______');
    setSentence(modifiedSentence);
    setOptions([...options, word]);
  };

  const handleAddOption = () => {
    if (newOption.trim() !== '' && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setNewOption('');
    }
  };

  return (
    <div>
      <div className="mb-4">
        <p className="font-semibold">Preview:</p>
        <p className='max-w-full max-h-40 px-2 py-1 border rounded bg-white whitespace-pre-line flex flex-col text-center overflow-auto'>
          {sentence}
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="sentence" className="block font-semibold">Enter the Sentence:</label>
        <input
          id="sentence"
          // value={sentence}
          onChange={handleSentenceChange}
          className="w-full px-2 py-1 border rounded"
          rows={5}
          placeholder="Enter the sentence..."
        ></input>
      </div>
      <div>
        <p className="font-semibold">Select the word to make it a blank:</p>
        {sentence.split(' ').map((word, index) => (
          <span
            key={index}
            className="cursor-pointer underline hover:text-blue-500"
            onClick={() => handleUnderline(word)}
          >
            {word}{' '}
          </span>
        ))}
      </div>
      <div className="mb-4">
        <p className="font-semibold">Options:</p>
        <div className="flex flex-wrap">
          {options.map((option, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded m-1">
              {option}
            </span>
          ))}
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder="Enter an option..."
            className="w-full px-2 py-1 border rounded"
          />
          <button onClick={handleAddOption} className="mt-1 bg-blue-500 text-white px-2 py-1 rounded">
            Add Option
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cloze;
