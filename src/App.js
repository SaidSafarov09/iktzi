import './App.css';
import './styles/main.scss';
import arrow from './img/arrow.svg';
import arrowtop from './img/arrow-top.svg';
import points from './img/points.svg';
import brand from './img/brand.svg';

function App() {
  return (
    <div className='main'>
      <div className='welcome'>
          <span>Добрый<br></br>вечер</span>
          <div className='welcome_arrow'>
            <a href='#content'><img src={arrowtop}/></a>
          </div>
          <div className='welcome_content'>
            <div className='welcome_text'>
              <p>
                Это ваше официальное&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
                приглашение на&nbsp;<br></br>
                презентацию новой<br></br> 
                разработки компании<br></br> 
                IKTeasy.<br></br> 
                <br></br>
              </p>
            </div> 
          </div>   
      </div>
      <div className='content' id='content'>
        <div className='content_text'>
            <p>
            Мы готовы представить<br></br> 
            вашему вниманию<br></br> 
            совершенно новую<br></br> 
            модель искусственного<br></br> 
            интеллекта, во всех<br></br> 
            аспектах превосходящую,<br></br> 
            то что вы видели<br></br> 
            раньше.<br></br> 
            <br></br>
            Вам откроются глаза, на<br></br> 
            совершенно новые<br></br> 
            вариации понятия<br></br> 
            «творчество» и именно вы<br></br> 
            станете первыми,<br></br> 
            заставшими шаг<br></br> 
            человечества в новую эру<br></br> 
            возможностей.<br></br> 
            <br></br>
            Будем ждать вас<br></br> 
            21 марта в 18:00<br></br> 
            в КДК им. Ленина<br></br> 
            <br></br>
            Сделаем шаг к будущему<br></br> 
            вместе!
            </p>
            <div className='images'>
              <img src={arrow}/>
              <img src={points}/>
            </div>
            <div className='brand'>
                <img src={brand}/>
                <a href='https://vk.com/ss_iktzi'>Студенческий совет<br></br>ИКТЗИ</a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
