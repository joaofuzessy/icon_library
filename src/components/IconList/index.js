import React from 'react';
import Icon from '../Icon';
import { icons } from '../Icon/iconPaths';
import './IconList.scss';







const getPathNames = () => { // Gera um array com todos os nomes de paths ja definidos
  let allIcons = [];
  for( var key in iconPaths){
    allIcons.push(key);
  };
  return allIcons;
  };

  const iconPaths = icons;
  const allIconsPathNames = getPathNames();



  function IconList(){
      return(
        <section className="icons-container">

        {allIconsPathNames.map((val, i)=>{
            return <div className="icon-container"><Icon  path={val}></Icon></div>
          })}
        
      </section>
      )
  }

  export default IconList;