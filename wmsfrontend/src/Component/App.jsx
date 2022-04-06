import '../css/App.css';
import '../css/index.css';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <div className="App" style={{'textAlign':'center'}}>
      <Header/>
      <h3>This is a home page</h3>
      <Outlet/> {/** the component well be nexting will replace and stay here, i.e the outlet represent the nexting child component */}
      <Footer/>
       {/* this helps retains and pass all content of the App to the component that it'll be nexting*/} 
      {/* This means it's adding the new component to the already existing */}
    </div>
  );
}