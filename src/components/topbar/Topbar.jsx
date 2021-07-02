import "../topbar/topbar.scss"
//import {} from '@material-ui/core'
import {Person , Mail} from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbar" >
          <div className="wrapper" >
            <div className="left" >
                <a href="#intro" className="logo" >Albert</a>
               <div className="itemContainer">
                    <Person className="icon" />
                    <span> 44 + 973 + 12</span>
               </div>
               <div className="itemContainer">
                    <Mail className="icon" />
                    <span> alberto.ortiz.ponce@gmail.com</span>
               </div>
            </div>
     
            <div className="right">

            </div>
          </div>
        </div>
    )
}
