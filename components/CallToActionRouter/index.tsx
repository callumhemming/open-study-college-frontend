import Link from "next"
import CallToAction from "../CallToAction"
import splashScreenRouterDummyData from "../../lib/splashScreenRouterDummyData"
import Style from "./CallToActionRouter.module.css"

type Props = {
    children: string;
  };

export default function CallToActionRouter (): JSX.Element{

    return(
        <div className={Style.container}>
        {
            splashScreenRouterDummyData.map((buttonData)=>{
                const {link, text} = buttonData
                return(
                    <CallToAction link={link}>
                        {text}
                        </CallToAction>
                )
                
            })
        }
        </div>
    )
}