import axios from "axios";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error !", error);
      });
  }, []);

  return <h1>message: {message}</h1>;
};

export default App;
