import './t10.css';
import Coinbtn from './spocoinbtn';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img
          src={
            'http://dev.spolive.com:3000/_next/image?url=https%3A%2F%2Fnewgenerationdatadev.blob.core.windows.net%2Fdata%2F1625017436%2Fbanner%2FBK02%2FobpUDRe8SrHrQrnOAPAroR3X965IKymk5cnTvCym.png&w=1920&q=75'
          }
          alt="홀덤 라이브"
          style={{ margin: '0 auto' }}
        />
      </div>
      <div className="style_storeContainer">
        <div className="item">
          <div className="title">토트넘</div>
          <div className="contents">
            <div className="img">이미지</div>
            <div className="gold">
              <div className="it">
                <span className="gold_icon"></span>
                <span className="gold_font">스포골드</span>
              </div>
              <div>
                <span className="gold_font"> 10,000,000</span>
              </div>
            </div>
            <div className="coin">
              <Coinbtn />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="title">토트넘</div>
          <div className="contents">
            <div className="img">이미지</div>
            <div className="gold">
              <div className="it">
                <span className="gold_icon"></span>
                <span className="gold_font">스포골드</span>
              </div>
              <div>
                <span className="gold_font">10,000,000</span>
              </div>
            </div>
            <div className="coin">
              <Coinbtn />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="title">토트넘</div>
          <div className="contents">
            <div className="img">이미지</div>
            <div className="gold">
              <div className="it">
                <span className="gold_icon"></span>
                <span className="fgold_ont"> 스포골드</span>
              </div>
              <div>
                <span className="gold_font">10,000,000</span>
              </div>
            </div>
            <div className="coin">
              <Coinbtn />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="title">토트넘</div>
          <div className="contents">
            <div className="img">이미지</div>
            <div className="gold">
              <div className="it">
                <span className="gold_icon"></span>
                <span className="gold_font">스포골드</span>
              </div>
              <div>
                <span className="gold_font">10,000,000</span>
              </div>
            </div>
            <div className="coin">
              <Coinbtn />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="title">토트넘</div>
          <div className="contents">
            <div className="img">이미지</div>
            <div className="gold">
              <div className="it">
                <span className="gold_icon"></span>
                <span className="gold_font">스포골드</span>
              </div>
              <div>
                <span className="gold_font">10,000,000</span>
              </div>
            </div>
            <div className="coin">
              <Coinbtn />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="title">토트넘</div>
          <div className="contents">
            <div className="img">이미지</div>
            <div className="gold">
              <div className="it">
                <span className="gold_icon"></span>
                <span className="gold_font">스포골드</span>
              </div>
              <div>
                <span className="gold_font">10,000,000</span>
              </div>
            </div>
            <div className="coin">
              <Coinbtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
