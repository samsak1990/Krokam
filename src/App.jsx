import style from './App.module.scss'
import BoxAbout from './modules/BoxAbout/BoxAbout';
import BoxContscts from './modules/BoxContacts/BoxContacts';
import BoxIntroduction from './modules/BoxIntroduction/BoxIntroduction';
import BoxProjects from './modules/BoxProjects/BoxProjects';
import BoxVideo from './modules/BoxVideo/BoxVideo';
import BoxContacts from './modules/BoxContacts/BoxContacts';
import BoxFooter from './modules/BoxFooter/BoxFooter';

function App() {
  return (
    <div className={style.app}>
       <BoxIntroduction></BoxIntroduction>
       <BoxAbout></BoxAbout>
       <BoxVideo></BoxVideo>
       <BoxProjects></BoxProjects>
       <BoxContacts></BoxContacts>
       <BoxFooter></BoxFooter>
    </div>
  );
}

export default App;
