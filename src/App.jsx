import style from './App.module.scss'
import BoxIntroduction from './modules/BoxIntroduction/BoxIntroduction';

function App() {
  return (
    <div className={style.app}>
       <BoxIntroduction></BoxIntroduction>
    </div>
  );
}

export default App;
