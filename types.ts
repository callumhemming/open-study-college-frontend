

/**
  * @param userID
  * @param totalCost
  */
export interface Cart{
    userID:string;
    totalCost: number;
}


/**
  * @param userID
  * @param courseSelected
  * @param cost
  */
 export interface CartItem{
    userID:string;
    courseSelected:string;
    cost: number;
}

 /**
  * @param name
  * @param userID
  */
export interface User{
    name:string;
    userID:string
}


export interface APIres {
    success:boolean;
    payload:any[];
}


export interface CourseData{
    coursecode:string;
    name:string;
    tag?:string;
    ataglance?:string[];
    overview?:string[];
    extrainfo?: string[];
    examdetails?: string; 
}

 /**
  * @param courseCode
  * @param question
  * @param answer
  */
export interface QandA{
    coursecode:string;
    question:string;
    answer:string;
}


 /**
  * @param column
  * @param newData
  */
export interface UpdateColumn {
    column:string;
    newData:string;
}