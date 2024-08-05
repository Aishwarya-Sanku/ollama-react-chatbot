// import React, { useState } from 'react';
// import axios from 'axios';

// function Page() {
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');

//   const handleQuestionChange = (event) => {
//     setQuestion(event.target.value);
//   };

//   const handleSubmit = async () => {
//     try {
//         console.log(question)
//         console.log("hiiii")
//       const result = await axios.get(`http://localhost:8081/ai/prompt`, {
//         params: {
//           prompt: question
//         }
//       });

//       // Process the response
//       let responseText = '';
//       result.data.forEach((chunk) => {
//         responseText += chunk;
//       });

//       setResponse(responseText);
//     } catch (error) {
//       console.error('Error fetching response:', error);
//       setResponse('Error fetching response.');
//     }
//   };

//   return (
//     <div>
//       <h1>Ask a Question</h1>
//       <textarea
//         value={question}
//         onChange={handleQuestionChange}
//         rows="4"
//         cols="50"
//         placeholder="Type your question here..."
//       />
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//       <div>
//         <h2>Response:</h2>
//         <pre>{response}</pre>
//       </div>
//     </div>
//   );
// }



// export default Page;


import axios from 'axios';
import { useState } from 'react';
 
const Page = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
 
  const handleSubmit = async () => {
    try {
      console.log('Question:', question);
      const result = await axios.get('http://localhost:8081/ai/prompt', {
        params: { prompt: question },
      });
 
      console.log('Result:', result); // Log the full response object
      console.log('Data:', result.data); // Log the data received
 
      // Process the response data
      let responseText = '';
      if (typeof result.data === 'string') {
        responseText = result.data;
      } else {
        console.error('Unexpected data format:', result.data);
      }
 
      setResponse(responseText);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Error fetching response.');
    }
  };
 
  return (
<div>
<textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question"
      />
<button onClick={handleSubmit}>Submit</button>
<div>
<h3>Response:</h3>
<p>{response}</p>
</div>
</div>
  );
};
 
export default Page;