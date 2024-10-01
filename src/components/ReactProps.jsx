import React from 'react';

const ChildComponent = (props) => {
    return <p>{props.text}</p>;
};

function Car(props) {
    return <h2>Mobil saya merk: {props.brand.name} type : {props.brand.model}</h2>;
}

function Garage() {
    const carInfo = {name: "Honda", model: "CRV"};
    return (
        <>
            <h1>Mobil kamu apa?</h1>
            <Car brand={carInfo} />
        </>
    );
}

const App = () => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const stories = [
        {
            title: 'React',
            url: 'http://reactjs.org',
            author: 'MR.X',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'http://redux.js.org',
            author: 'MR.Y',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ];

    const handleChange = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };
    
    const searchedStories = stories.filter(story=>
        story.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input type="text" id="search" onChange={handleChange} />

            <List list={searchedStories} />
        </div>
    );
};

const List = (props) => {
    return (
        <ul className="list-disc pl-5">
            {props.list.map((item) => (
                <li key={item.objectID}>
                    <span>
                        <a href={item.url} className="text-blue-500 hover:underline">{item.title}</a>
                    </span>
                    <span className="ml-4">{item.author}</span>
                    <span className="ml-4">{item.num_comments} comments</span>
                    <span className="ml-4">{item.points} points</span>
                </li>
            ))}
        </ul>
    );
};

export const ReactProps = () => {
    // ReactProps adalah parent component
    return (
        <div>
            <h1>
                Saya parent component.
                <ChildComponent text={"Saya anak ke 1"} />
                <ChildComponent text={"Saya anak ke 2"} />
                <ChildComponent text={"Saya anak ke 3"} />
            </h1>
            <div>
                <Garage />
            </div>
            <div>
                <App />
            </div>
        </div>
    );
};
