import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, setItems, editItem, clearList }) => {
  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <div className='grocery-container'>
      <div className='grocery-list'>
        {items.map((item) => {
          return (
            <article key={item.id} className='grocery-item'>
              <p className='title'>{item.title}</p>
              <div className='btn-container'>
                <button
                  type='button'
                  className='edit-btn'
                  onClick={() => editItem(item.id)}
                >
                  <FaEdit />
                </button>
                <button
                  type='button'
                  className='delete-btn'
                  onClick={() => removeItem(item)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <button className='clear-btn' onClick={clearList}>
        clear items
      </button>
    </div>
  );
};

export default List;
