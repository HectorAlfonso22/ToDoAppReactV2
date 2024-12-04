import React from 'react';
import './EmptySearchResults.css';

function EmptySearchResults({ searchText }) {
  return (
    <div className="EmptySearchResults">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" clip-rule="evenodd"/><path fill="currentColor" d="M11.854 4.854a.5.5 0 0 0-.707-.707L8 7.293L4.854 4.147a.5.5 0 1 0-.707.707L7.293 8l-3.146 3.146a.5.5 0 0 0 .707.708L8 8.707l3.147 3.147a.5.5 0 0 0 .707-.708L8.708 8z"/></svg>
      <p>
        No se encontraron resultados para <span>"{searchText}"</span>. 
      </p>
      <p>¡Intenta buscar algo diferente!</p>
    </div>
  );
}

export { EmptySearchResults };
