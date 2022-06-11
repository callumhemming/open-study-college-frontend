import React, { useState,useEffect, useRef } from "react";
import { Typography } from "antd";
import { render } from "react-dom";


interface Params {
  ataglance: string[];
  addChangeToStack: any;
}

export default function AtAGlance({
  ataglance,
  addChangeToStack,
}: Params): JSX.Element {
  const [atAGlance, setAtAGlance] = useState(ataglance);
  const { Paragraph } = Typography;
  const renderCount = useRef(0)

  useEffect(()=>{
    if (renderCount.current === 0){return}

    addChangeToStack({newData:JSON.stringify(atAGlance), column:"ataglance"})
    renderCount.current++

  },[atAGlance])

  return (
    <>
      <Paragraph>At a glance:</Paragraph>
      {atAGlance.map((atAGlanceItem, index) => {
        return (
          <Paragraph
            editable={{
              tooltip: "click to edit text",
              onChange: (e) => {
                setAtAGlance([...atAGlance.slice(0,index), e, ...atAGlance.slice(index+1)  ])
              },
            }}
          >
            {atAGlanceItem}
          </Paragraph>
        );
      })}
    </>
  );
}
