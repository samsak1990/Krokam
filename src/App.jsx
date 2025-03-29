import style from './App.module.scss'
import BoxAbout from './modules/BoxAbout/BoxAbout';
import BoxIntroduction from './modules/BoxIntroduction/BoxIntroduction';

function App() {
  return (
    <div className={style.app}>
       <BoxIntroduction></BoxIntroduction>
       <BoxAbout></BoxAbout>
    </div>
  );
}

export default App;
