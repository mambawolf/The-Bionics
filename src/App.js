import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [bionicinput, setBionicinput] = useState("");

  const bionicinputHandler = event => {
    setBionicinput(event.target.value)
  };

  const bionicresponse = () => {

    const encodedParams = new URLSearchParams();
    encodedParams.append("content", bionicinput);
    encodedParams.append("response_type", "html");
    encodedParams.append("request_type", "html");
    encodedParams.append("fixation", "1");
    encodedParams.append("saccade", "10");

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'bca5bdd222msh9cf0061c3615c3bp1fe9e5jsnff5e773a0efc',
        'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com'
      },
      body: encodedParams
    };

    fetch('https://bionic-reading1.p.rapidapi.com/convert', options)
      .then(response => response.text())
      .then(html => {
        document.getElementById("bioniccontent").innerHTML = html
        console.log(html);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='heading'>
          <h1>The Bionics.</h1>
          {/* <span style={{fontSize:'120px'}}>👁️</span> */}
          <p>Powered by - Bionic Reading® API</p>          
        </div>
      </div>
      <div className='headerpart2'>
        <div className='didyouknow'>
        <h1>Did you know that your brain reads faster than your eye?</h1>
        <p>We humans store learned words and so just a few letters are enough
        to recognize whole words. With Bionic Reading you read texts
        faster, better and more focused. Reading and comprehending textual content
        now becomes much easy while still staying in a hectic and noisy world.</p>
        </div>
        <br></br>
        <div className='bulb'>
          <h1 style={{fontSize:'100px'}}>💡</h1>
        </div>
      </div>
      <div className='main'>
        <div className='mainabout'>
          <div className='mainaboutinside'>
            <h1>Why Bionics?</h1>
          </div>
          <div>
            <p>Bionic Reading aims to play a supporting role in the absorption
of volume text. We see technological progress as an opportunity
for all those who want to increase the pleasure of reading
in a noisy and hectic world in a focused way and without distraction.
Bionic Reading is a reading system that supports the reading flow.
The eye is guided through the text by means of typographic highlights.
With the interplay of “Fixation” and “Saccade” visual stimuli can be
transferred to the text, which decisively change the typeface.
When we fixate a part of a word – the fixation – the necessary
information is passed to our brain so that we can match our long-term
memory with the available representational products.
Bionic Reading revises texts so that the most concise parts of words
are highlighted. This guides the eye over the text and the brain
remembers previously learned words more quickly.</p>
          </div>
        </div>
        <div className='mainimg'>
          <img className='bionicimg' src='https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/x-xac--pqpfdh9yb19tm1yi45iguus4xmvl39u6wb2z74aetw.png' alt="about bionic"/>
        </div>
      </div>
      <div className='workingsection'>
        <div className='inputarea'>
          <h1>Enter your text and get your bionic content</h1>
          <input type="text" value={bionicinput} placeholder="Enter Text" onChange={bionicinputHandler}/>
          <button onClick={bionicresponse}>Bionic Form</button>
        </div>
        <div className='outputarea'>
          <div id='bioniccontent' className='bioniccontentarea'></div>
        </div>
      </div>
    </div>
  )
}

export default App;

// Enter Text - <input type="text" value={bionicinput} placeholder="Place content" onChange={bionicinputHandler}/>
//       <button onClick={bionicresponse}>Get response on click</button>
//       <div id='bioniccontent' className='bioniccontentarea'></div>