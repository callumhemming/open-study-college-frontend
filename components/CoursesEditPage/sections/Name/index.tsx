import React, { useState,useEffect, useRef } from "react";
import { Typography } from "antd";

interface Params {
  name: string;
  addChangeToStack: any;
}

export default function Name({
  name,
  addChangeToStack,
}: Params): JSX.Element {
const[Name, setName] = useState(name)
  const { Paragraph } = Typography;
  const renderCount = useRef(0)

  useEffect(()=>{
    
    addChangeToStack({newData:Name, column:"name"})

    
  },[Name])

  return (
    <>
      <Paragraph>Name:</Paragraph>
      
          <Paragraph
            editable={{
              tooltip: "click to edit text",
              onChange: (e) => {
                setName(e)
              },
            }}
          >
            {Name}
          </Paragraph>
        
     
    </>
  );
}