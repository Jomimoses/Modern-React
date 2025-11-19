import router from "./Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <my-mfe-page name="React User" /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
