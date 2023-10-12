import { useEffect, useState } from "react";

const BeforeMessage = () => {
    const [messageShown, setMessageShown] = useState(false);

    console.log("messageShown: ", messageShown);
    useEffect(() => {
        if (!messageShown) {
            setMessageShown(true);
            console.log("messageShown: ", messageShown);
        }
    }, []);
    return (
      <div id="beforeMessage">
        {messageShown ? (
          <h2>Oh this ain't your first time, you know how this works ... </h2>
        ) : (
          <h2>This is your first time, Please type to search ... </h2>
        )}
      </div>    
    );
};

export default BeforeMessage;
