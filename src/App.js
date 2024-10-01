import './App.css';
import { Assignment } from './components/Assigment';
import { BasicJs } from './components/BasicJs';
import { Callback } from './components/Callback';
import { Fungsi } from './components/Fungsi';
import { Jsxdancomponents, User2 } from './components/Jsxdancomponents';
import { Loop } from './components/Loop';
import { ProductList } from './components/ProductList';
import { ReactDOM } from './components/ReactDOM';
import { ReactJSES6 } from './components/ReactJSES6';
import { ReactProps } from './components/ReactProps';
import { ReactState } from './components/ReactState';
import { SwitchCase } from './components/SwitchCase';
import { TampilList } from './components/TampilList';
import { Card } from './tugas/Card';
import { Header } from './tugas/Header';
import { TugasJS2 } from './tugas/TugasJS2';
import { TugasJS3 } from './tugas/TugasJS3';
import { TugasJS4 } from './tugas/TugasJS4';
import { TugasJS5 } from './tugas/TugasJS5';
import { UserProfile } from './tugas/UserProfile';
import { YellowBorder } from './tugas/YellowBorder';


function App() {
  return (
    <div>
      {/* Yellowborder membungkus Header, Header membungkus User Profile */}
      {/* Tugaspertama */}
      <YellowBorder>
        <Header>
          <UserProfile/>
        </Header>
      </YellowBorder>

      {/* Tugas kedua membuat Card */}
      <Card
        title="Belajar Prop 1"
        content="Belajar composition dengan reusable UIs"
        author="Tono"
      />
      <Card
        title="Belajar Prop 2"
        content="Belajar state management solutions di React application"
        author="Joni"
      />
    </div>
  );
}

export default App; //buat manggil komponen