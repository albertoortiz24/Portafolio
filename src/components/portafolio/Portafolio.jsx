import "./portafolio.scss"
import { useState,useEffect } from "react";
import PortafolioList from '../portafoliolist/PortafolioList'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data";
  
export default function Portafolio() {
    const [selected, setSelected] = useState("featured");
    const [data , setData] = useState([])
    const list = [
        {
          id: "featured",
          title: "E-commerce",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "design",
          title: "Design App",
        },
        {
          id: "content",
          title: "Games App",
        },
      ];
      useEffect(() => {
        switch (selected) {
          case "featured":
            setData(featuredPortfolio);
            break;
          case "web":
            setData(webPortfolio);
            break;
          case "mobile":
            setData(mobilePortfolio);
            break;
          case "design":
            setData(designPortfolio);
            break;
          case "content":
            setData(contentPortfolio);
            break;
          default:
            setData(featuredPortfolio);
        }
      }, [selected]);
    return (
        <div className='portafolio' id="portafolio">
           <h1>portafolio</h1>
           <ul>
                {list.map(item=>(
                    <PortafolioList title={item.title}
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}/>
               
                ))
                }
               
           </ul>
           <div className="container">
               {data.map((d)=>(
                     <div className="item">
                     <img src={d.img} alt="" />
                     <h3>{d.title}</h3>
                 </div> 

               ))}
             
           </div>
        </div>
    )
}
