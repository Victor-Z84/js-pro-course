import React from "react";
import { Clicker } from "../clicker/Clicker";
import "./clickersBlock.scss"

const clickersBlock = [];
const elemAmount = 5;

for (let i = 0; i < elemAmount; i++) {
    clickersBlock.push({});
}

function ClickersBlock() {
    return (
        <div className="clickers-block">
            {clickersBlock.map((element, index) =>
            <React.Fragment key={index}>
                <Clicker element={element}/>
            </React.Fragment>     
            )}
        </div>
    )
}

export default ClickersBlock;