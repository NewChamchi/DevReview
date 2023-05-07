import React, { useEffect } from "react";
import Switch from "./routes";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <div className="App">
                    {/* {show && <SpinnerComponent />} */}
                    <Switch />
                </div>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
