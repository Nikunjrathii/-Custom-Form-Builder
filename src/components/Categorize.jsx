import React, { useState } from 'react';

const CategorizeQuestion = () => {
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddCategory = () => {
    setCategories([...categories, selectedCategory]);
    setSelectedCategory('');
  };

  const handleAddItem = () => {
    setItems([...items, { text: '', category: '' }]);
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description:
        </label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-2 py-1 border rounded"
          rows="4"
          placeholder="Enter a description..."
        />
      </div>

      <div className="mb-4">
        <div className="mb-2">
          <label htmlFor="category" className="block font-semibold">
            Add Category:
          </label>
          <div className="flex">
            <input
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              placeholder="Enter a category..."
            />
            <button
              className="ml-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
              onClick={handleAddCategory}
            >
              Add
            </button>
          </div>
        </div>

        <div className="mb-2">
          <label className="block font-semibold">Add Items:</label>
          <button
            className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
            onClick={handleAddItem}
          >
            Add Item
          </button>
        </div>

        {items.map((item, index) => (
          <div key={index} className="mt-2 flex gap-4 items-center">
            <input
              className="flex-grow w-3/4 px-2 py-1 border rounded"
              placeholder="Enter an item..."
              value={item.text}
              onChange={(e) => handleItemChange(index, 'text', e.target.value)}
            />
            <select
              className="w-1/4 px-2 py-1 border rounded"
              value={item.category}
              onChange={(e) => handleItemChange(index, 'category', e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((category, catIndex) => (
                <option key={catIndex} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              className="text-red-600 hover:text-red-800"
              onClick={() => handleDeleteItem(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <p className="font-semibold">Added Categories:</p>
        <div className="flex flex-wrap">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-200 px-2 py-1 rounded m-1 flex items-center">
              {category}
              <button
                className="text-red-600 hover:text-red-800 ml-2"
                onClick={() => handleDeleteCategory(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorizeQuestion;
