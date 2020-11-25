import React, {useState, useContext} from 'react';



const Sidebar = () => {



    const [nav] = useState([ //, setNav put after Nav
        { lable:"Dashboard", slug:"/dashboard", icon: "icon-home" },
        { lable:"DISCOVER", slug:"/discover", icon: "icon-quill" },
        { lable:"MY PRODUCTS", slug:"/manage", icon: "icon-pen" },
        { lable:"CATEGORIES", slug:"/categories", icon: "icon-pen" },
        { lable:"BRANDS", slug:"/brands", icon: "icon-pen" },
        { lable:"TAGS", slug:"/tags", icon: "icon-droplet" },
        { lable:"BANK ACCOUNT", slug:"/banks", icon: "icon-pencil" },
        { lable:"DELIVERY", slug:"/deliveries", icon: "icon-newspaper" },
        { lable:"PROFILE", slug:"/profile", icon: "icon-droplet" }
    ])

    

     // Set Sidebar label slug constant variable to Currently Page
     const [currentPage] = useState("/") //, setCurrenPage put after currentpage

        // Loop Sidebar label slug constan variable
    var navigation = [];
    for(let i = 0; i < nav.length; i++) {
        navigation.push(
                <li key={"nav-" + i + "-" + nav[i].slug}>
                    <a href={nav[i].slug} className={"link" + (currentPage === nav[i].slug ? " on" : "") }>
                        <div className={"ico s16  " + nav[i].icon} />
                        <h3 className="lbl s18 fontn">{nav[i].lable}</h3>
                    </a>
                </li>
        );
    }
    
  return (
    <div className="sidebar">
        <div>
        <img src="profile_image" alt="profile_image"/>
        </div>
        {/* <Profile /> */}
         {/* Sidebar Navigation */}
            <ul className="nav">
                    {navigation} <br/>
            </ul>
            <ul className="setting">
            User Setting Here
            </ul>
    </div>
  )
}

export default Sidebar;