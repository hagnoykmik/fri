import Topheader from "../../components/LogoEgg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import Meeting from "../../components/MeetingRoom";
import Game from "../../components/GameRoom";
import Nav from "../../components/navEgg";
import No from "../../assets/no_room.png";
import axios from "axios";
import moment from "moment";
import "./main.scss";

export type MeetType = {
  headCount: number;
  location: string;
  major: number;
  nonMajor: number;
  roomId: number;
  title: string;
  roomCategory: string;
  is_com: boolean;
};

export type GameType = {
  location: string;
  title: string;
  headCount: number;
  gameRoomId: number;
  participationCount: number;
};

interface CountdownTimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  days,
  hours,
  minutes,
  seconds
}: CountdownTimerProps) => {
  return (
    <div className="timer_box">
      <div className="title">
        금요일 밤 <br />
        11시 11분
      </div>
      <div className="title">
        방이 <br /> 터져요
      </div>
      <div className="timer">
        <div className="time-box">
          <div className="time">{days}</div>일
        </div>
        <div className="time-box">
          <div className="time">{hours}</div>시간
        </div>
        <div className="time-box">
          <div className="time">{minutes}</div>분
        </div>
        <div className="time-box">
          <div className="time">{seconds}</div>초
        </div>
      </div>
    </div>
  );
};

const Main: React.FC = () => {
  // 매주 금요일 카운트다운
  const getNextFriday = () => {
    const now = moment();
    const friday = moment()
      .day("Friday")
      .hour(23)
      .minute(11)
      .second(0)
      .millisecond(0);
    if (now.day() === 5) {
      if (now.hour() >= 23 && now.minute() >= 11) {
        friday.add(7, "days");
      }
    } else if (now.day() > 5) {
      friday.add(7, "days");
    }
    return friday.diff(now, "seconds");
  };

  const getTimeLeft = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    seconds -= days * 86400;
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return { days, hours, minutes, seconds };
  };

  const userId = useSelector((state: RootState) => {
    return state.strr.userId;
  });
  const area = useSelector((state: RootState) => {
    return state.strr.location;
  });

  const [region, setRegion] = useState(area);
  const [isnav, setIsnav] = useState(false);
  const [game, setGame] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [drink, setDrink] = useState([]);
  const [play, setPlay] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [study, setStudy] = useState([]);
  const [etc, setEtc] = useState([]);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(getNextFriday()));

  const api_url = process.env.REACT_APP_REST_API;

  const navigate = useNavigate();

  function go_more(category: string) {
    const categories = {
      game: "오늘 지금 당장 내기 할 사람",
      drink: "이번주 금요일 술 마실 사람",
      dinner: "이번주 금요일 밥 먹을 사람",
      play: "이번주 금요일 놀 사람",
      exercise: "이번주 금요일 운동 할 사람",
      study: "이번주 금요일 공부 할 사람",
      etc: "이번주 금요일 뭐라도 할 사람"
    };

    let temp = "";
    if (category === "BETTING") {
      if (game?.length) temp = categories.game;
      else return;
    } else if (category === "DRINK") {
      if (drink?.length) temp = categories.drink;
      else return;
    } else if (category === "MEAL") {
      if (dinner?.length) temp = categories.dinner;
      else return;
    } else if (category === "GAME") {
      if (play?.length) temp = categories.play;
      else return;
    } else if (category === "EXERCISE") {
      if (exercise?.length) temp = categories.exercise;
      else return;
    } else if (category === "STUDY") {
      if (study?.length) temp = categories.study;
      else return;
    } else if (category === "ETC") {
      if (etc?.length) temp = categories.etc;
      else return;
    }
    navigate({
      pathname: "/more",
      search: createSearchParams({
        region: region,
        category: category,
        text: String(temp)
      }).toString()
    });
  }
  const changeRegion = async (area: string) => {
    const header = {
      Authorization: Number(userId),
      "Content-Type": "application/json"
    };
    try {
      const res = await axios.get(api_url + `room?area=${area}`, {
        headers: header
      });
      const game = await axios.get(api_url + `game-room?area=${area}`, {
        headers: header
      });
      setGame(game.data.game);
      setDrink(res.data.drink);
      setEtc(res.data.etc);
      setPlay(res.data.game);
      setDinner(res.data.meal);
      setStudy(res.data.study);
      setExercise(res.data.exercise);
    } catch (e) {
      console.log(e);
    }
  };

  const preventGoBack = () => {
    history.pushState(null, "", location.href)
  };

  useEffect(() => {
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);

    return () => {
      window.removeEventListener("popstate", preventGoBack);
    }
  }, [])

  useEffect(() => {
    const getData = async () => {
      const header = {
        Authorization: Number(userId),
        "Content-Type": "application/json"
      };
      try {
        const res = await axios.get(api_url + `room?area=${region}`, {
          headers: header
        });
        const game = await axios.get(api_url + `game-room?area=${region}`, {
          headers: header
        });
        setGame(game.data.game);
        setDrink(res.data.drink);
        setEtc(res.data.etc);
        setPlay(res.data.game);
        setDinner(res.data.meal);
        setStudy(res.data.study);
        setExercise(res.data.exercise);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(getTimeLeft(getNextFriday()));
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="mainpage">
      <div className="main-nav">
        <Topheader />
        <ul className="main_region">
          <li
            id={region == "SEOUL" ? "select" : "seoul"}
            onClick={() => {
              setRegion("SEOUL");
              changeRegion("SEOUL");
            }}
          >
            서울
          </li>
          <li
            id={region == "DAEJEON" ? "select" : "daejeon"}
            onClick={() => {
              setRegion("DAEJEON");
              changeRegion("DAEJEON");
            }}
          >
            대전
          </li>
          <li
            id={region == "GUMI" ? "select" : "gumi"}
            onClick={() => {
              setRegion("GUMI");
              changeRegion("GUMI");
            }}
          >
            구미
          </li>
          <li
            id={region == "GWANGJU" ? "select" : "gwangju"}
            onClick={() => {
              setRegion("GWANGJU");
              changeRegion("GWANGJU");
            }}
          >
            광주
          </li>
          <li
            id={region == "BUSAN" ? "select" : "buulgyeong"}
            onClick={() => {
              setRegion("BUSAN");
              changeRegion("BUSAN");
            }}
          >
            부울경
          </li>
        </ul>
      </div>

      <div className="main_category">
        <div className="timer_bar">
          <CountdownTimer
            days={timeLeft.days}
            hours={timeLeft.hours}
            minutes={timeLeft.minutes}
            seconds={timeLeft.seconds}
          />
        </div>
        <p id="category_title">
          # 내기 할 사람<span onClick={() => go_more("BETTING")}>더보기</span>
        </p>
        {game?.length ? (
          <div className="meeting_block">
            {game.map((room, idx) => (
              <Game key={idx} room={room} />
            ))}
          </div>
        ) : (
          <div className="meeting_block">
            <div className="empty_category">
              <img src={No} alt="no" />
            </div>
          </div>
        )}
        <p id="category_title">
          # 술 마실 사람<span onClick={() => go_more("DRINK")}>더보기</span>
        </p>
        {drink?.length ? (
          <div className="meeting_block">
            {drink.map((room, idx) => (
              <Meeting key={idx} room={room} />
            ))}
          </div>
        ) : (
          <div className="meeting_block">
            <div className="empty_category">
              <img src={No} alt="no" />
            </div>
          </div>
        )}
        <p id="category_title">
          # 밥 먹을 사람<span onClick={() => go_more("MEAL")}>더보기</span>
        </p>
        {dinner?.length ? (
          <div className="meeting_block">
            {dinner.map((room, idx) => (
              <Meeting key={idx} room={room} />
            ))}
          </div>
        ) : (
          <div className="meeting_block">
            <div className="empty_category">
              <img src={No} alt="no" />
            </div>
          </div>
        )}
        <p id="category_title">
          # 놀 사람<span onClick={() => go_more("GAME")}>더보기</span>
        </p>
        {play?.length ? (
          <div className="meeting_block">
            {play.map((room, idx) => (
              <Meeting key={idx} room={room} />
            ))}
          </div>
        ) : (
          <div className="meeting_block">
            <div className="empty_category">
              <img src={No} alt="no" />
            </div>
          </div>
        )}
        <p id="category_title">
          # 운동 할 사람<span onClick={() => go_more("EXERCISE")}>더보기</span>
        </p>
        {exercise?.length ? (
          <div className="meeting_block">
            {exercise.map((room, idx) => (
              <Meeting key={idx} room={room} />
            ))}
          </div>
        ) : (
          <div className="meeting_block">
            <div className="empty_category">
              <img src={No} alt="no" />
            </div>
          </div>
        )}
        <p id="category_title">
          # 공부 할 사람<span onClick={() => go_more("STUDY")}>더보기</span>
        </p>
        {study?.length ? (
          <div className="meeting_block">
            {study.map((room, idx) => (
              <Meeting key={idx} room={room} />
            ))}
          </div>
        ) : (
          <div className="meeting_block">
            <div className="empty_category">
              <img src={No} alt="no" />
            </div>
          </div>
        )}
        <p id="category_title">
          # 뭐라도 할 사람<span onClick={() => go_more("ETC")}>더보기</span>
        </p>
        {etc?.length ? (
          <div className="meeting_block">
            {etc.map((room, idx) => (
              <Meeting key={idx} room={room} />
            ))}
          </div>
        ) : (
          <div className="meeting_block">
            <div className="empty_category">
              <img src={No} alt="no" />
            </div>
          </div>
        )}
      </div>
      <Nav isnav={isnav} setIsnav={setIsnav} />
    </div>
  );
};
export default Main;
