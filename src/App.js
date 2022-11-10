import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Routes/Routes';

function App() {
  return (
    
    <div className=" bg-gray-400">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
