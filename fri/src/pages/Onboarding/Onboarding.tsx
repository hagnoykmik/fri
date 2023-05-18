import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { login } from "../../redux/user";
import Modal from "../../components/AgreeModal";
import ting from "../../assets/gif/tingtingting.gif";
import "./Onboarding.scss";
import axios from "axios";

export default function Onboarding() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isagree, setIsagree] = useState(false);
  const api_url = process.env.REACT_APP_REST_API;
  const userId = useSelector((state: RootState) => {
    return state.strr.userId;
  });

  const gameRoomId = useSelector((state: RootState) => {
    return state.strr.gameRoomId;
  });
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("");

  // 새로 정보 받아와서 업데이트 하고, 그 다음 넘어가자
  useEffect(() => {
    const getNewInfo = async () => {
      const header = {
        "Content-Type": "application/json",
        Authorization: Number(userId)
      };
      const res = await axios.get(api_url + "user", {
        headers: header
      });
      const data = {
        userId: userId,
        anonymousProfileImageUrl: res.data.anonymousProfileImageId,
        nickname: res.data.nickname,
        year: res.data.year,
        location: res.data.area,
        heart: res.data.heart,
        roomId: res.data.roomId,
        gameRoomId: res.data.gameRoomId,
        name: res.data.name,
        major: res.data.major
      };
      dispatch(login(data));
      if(res.data.emailAgreement) setIsagree(true)
    };
    getNewInfo();
  }, []);

  const handleClick = () => {
    if (userId === 0) {
      navigate("/login");
    }
    else {
      if(isagree) navigate("/main")
      else{
        setPage("login")
        setOpen(true)
      }
    }
  };

  return (
    <div className="onboarding" onClick={handleClick}>
      <img id="gif" src={ting} alt="ting" className="onboarding-img" />
      <div className="onboarding-text"> 터치해 주세요.</div>
      {
        open ? <Modal setOpen={setOpen} page={page} /> : null
      }
    </div>
  );
}
