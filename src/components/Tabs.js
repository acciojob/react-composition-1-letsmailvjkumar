import React, {useState} from "react";

const Tabs = ({tabs})=> {
let [tabClicked, setTabClicked] = useState("")

    function handleClick(value){
        setTabClicked(value);
    }
    return(
        <div>
        <ul>
            {
                tabs.map((value)=>
                <li onClick={()=>handleClick(value)}>{value.title}</li>
                )
            }
        </ul>
        {
        tabClicked && <p>This is content for {tabClicked.content}.</p>
}
        </div>
    )
}

export default Tabs;