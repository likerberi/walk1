import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  id: 1,
  image: 'https://placeimg.com/64/64/1',
  name: 'test1',
  age: '20',
  job: 'Marketer',
},
{
  id: 2,
  image: 'https://placeimg.com/64/64/2',
  name: 'test1',
  age: '28',
  job: 'Customs Specialist',
},
{
  id: 3,
  image: 'https://placeimg.com/64/64/3',
  name: 'test1',
  age: '30',
  job: 'Programmer',
},
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(obj => {
            return (
              <Customer
                key={obj.id}
                id={obj.id}
                image={obj.image}
                name={obj.name}
                age={obj.age}
                job={obj.job} 
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
