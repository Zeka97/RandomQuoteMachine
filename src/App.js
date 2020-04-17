import React, { useState, useEffect } from 'react';

import './App.css';

const App = () =>{


  const [state, setState] = useState([]);
  const [quote,setQuote] = useState({})

  useEffect(() => {
fetch("https://type.fit/api/quotes")
.then(response => response.json())
.then(data => {
  setState(data);
  setQuote(data[Math.floor(Math.random() * state.length)]);
})
.catch(err => {
	console.log(err);
});
  },[]);

  const randomQuote = () => {
    setQuote(state[Math.floor(Math.random() * state.length)]);
    console.log(quote.text);
    console.log("1");
  };

  

  return (
    <div className="App">
      <h1 className="title">Random Quote Machine</h1>

        <div id="quote-box">
          <div className="box">
            
              <div className="quote">  
                  <div id="text">"{quote.text}"</div>
                  {     quote.author
                         ?
                          <div id="author">-{quote.author}</div>
                        :
                           <div id="author">-Unknown</div> 
                  }
              </div>
            
              <div className="buttons">
              <a class="twitter-share-button"
              title="Tweet this quote!"
              target="_blank"
              href={`https://twitter.com/intent/tweet?text="${quote.text} ${quote.author}"`}
              data-size="large"><i class="fab fa-twitter-square fa-2x icon_a"></i></a>
                <button onClick={randomQuote} className="newquote">New Quote</button>
                
              </div>
          </div>


        </div>


    </div>
  );
}

export default App;
