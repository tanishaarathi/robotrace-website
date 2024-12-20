import React from 'react';
import Page1 from './pages/Page1'; // Importing Page1 component
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

function App() {
  return (
    <div className="App">
      <Page1 />  {/* Rendering Page1 */}
      <Page2 />  {/* Rendering Page2 */}
      <Page3 /> {/* Rendering Page3 */}
      <Page4 /> {/* Rendering Page4 */}
    </div>
  );
}

export default App;
