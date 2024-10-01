import React from 'react'

const list=[
    {
        title: 'React',
        url : 'http://reactjs.org',
        author : 'Mr. X',
        num_components : 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url : 'http://redux.js.org',
        author : 'Mr. Y',
        num_components : 2,
        points: 5,
        objectID: 1,
    },
];

function App(){
    return(
        <div>
            <label htmlFor="search">Search : </label>
            <input type="text" id="Search" />

            <TampilList></TampilList>
        </div>
    )
}



export const TampilList = () => {
  return (
    <div>
        <ul>
            {list.map(function(item){
                return(
                    <li key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_components}</span>
                        <span>{item.points}</span>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
