import FirstComponent from './components/FirstComponent'

import './App.css'

function App(){

  let arr = [                     // use array destructuring hear
    {
      no : 1,
      Title : "School fee",
      Amount : 300
    },
    {
      no : 2,
      Title : "Tuition fee",
      Amount : 200
    },
    {
      no : 3,
      Title : "Enjoy  fee",
      Amount : 100
    }
  ]

  return (
    <div>
      <h1 className='h1'>Fee Structure</h1>
      <div className='title'>
        <h2 className='padd'>No</h2>
        <h2 className='pad'>Title</h2>
        <h2 className='pa'>Fee</h2>
        <h2 className='p1'> Button1</h2>
        <h2 className='p2'> Button2</h2>
      </div>
      <FirstComponent
          No = { arr[0].no}
          Title = {arr[0].Title} 
          Amount = { arr[0].Amount } >
      </FirstComponent>
      <FirstComponent
          No = { arr[1].no}
          Title = {arr[1].Title} 
          Amount = { arr[1].Amount } >
      </FirstComponent>
      <FirstComponent
          No = { arr[2].no}
          Title = {arr[2].Title} 
          Amount = { arr[2].Amount } >
      </FirstComponent>
    </div>
  );
}

export default App;
