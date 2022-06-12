import {CourseData, QandA, UpdateColumn} from "../../types"
import React,{useState} from "react"
import {Typography} from "antd"
import {Button} from "@nextui-org/react"


import Name from "./sections/Name"
import AtAGlance from "./sections/AtAGlance"
import Tag from "./sections/Tag"

interface Props extends CourseData{
    qandas: QandA[];
    courseid:number;
    tag:string;
    ataglance:{
        data:string[]
    };
    overview:string[];
    extrainfo: string[];
    examdetails: string; 
}

export default function CoursesEditPage({data}:any): JSX.Element{

    const {ataglance,
        coursecode,
        courseid,
        examdetails,
        extrainfo,
        name,
        overview,
        tag,
        qandas}  = data 

    const {Paragraph} = Typography

    
    // const[courseCode, setCourseCode] = useState(coursecode)
    // const[courseID, setCourseId] = useState(courseid)
    // const[examDetails, setExamDetails] = useState(examdetails)
    // const[extraInfo, setExtraInfo] = useState(extrainfo)
    // const[Name, setName] = useState(name)
    // const[overView, setOverview] = useState(overview)
    
    // const[qAndAs, setqAndAs]= useState(qandas)


    const[changeStack, setChangeStack] = useState<UpdateColumn[]>([])

    function addChangeToStack(value:UpdateColumn){
        setChangeStack([...changeStack, value])
    }


    return(
        <>


        <Name
        name={name}
        addChangeToStack={addChangeToStack}
        />
        <Tag
        tag={tag}
        addChangeToStack={addChangeToStack}
        />
        <AtAGlance
        ataglance={ataglance}
        addChangeToStack={addChangeToStack}
        />


        <Button
        color="gradient"
        size="md"

        onClick={async ()=>{

            const body = {
                changeList: changeStack
            } 

            const fetchString = `https://open-study-college-application.herokuapp.com/courses/${coursecode}`
            // const fetchString = `http://localhost:3000/courses/${coursecode}`
            await fetch(fetchString,{
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(body)
               
              })
              console.log(body)
              setChangeStack([])
        }}
        >
            Save Changes
        </Button>



        </>
    )
}

