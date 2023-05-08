import { useEffect, useState } from "react";
import { MeetType } from "../pages/Main/mainPage";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { meeting } from "../redux/user";
import axios from "axios";

interface roomType {
  room: MeetType;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Roomdetail {
  isParticipate: boolean;
  majors: { name: string; url: string }[];
  nonMajors: { name: string; url: string }[];
}

function MeetingDetail({ room, open, setOpen }: roomType) {
  const {
    headCount,
    location,
    major,
    nonMajor,
    roomId,
    title,
    roomCategory,
    is_com
  } = room;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => {
    return state.strr.userId;
  });
  const isRoom = useSelector((state: RootState) => {
    return state.strr.roomId;
  });
  const api_url = process.env.REACT_APP_REST_API;

  // room detail 정보
  const [data, setData] = useState<Roomdetail>({
    isParticipate: false,
    majors: [],
    nonMajors: []
  });

  useEffect(() => {
    const getDetail = async () => {
      try {
        const header = {
          "Content-Type": "application/json",
          Authorization: userId
        };
        const res = await axios.get(api_url + "room/" + roomId, {
          headers: header
        });
        const isParticipate = res.data.isParticipate;
        const majors = res.data.major;
        const nonMajors = res.data.nonMajor;
        setData({
          ...data,
          isParticipate: isParticipate,
          majors: majors,
          nonMajors: nonMajors
        });
      } catch (e) {
        console.log(e);
      }
    };
    getDetail();
  }, []);

  const goChat = async () => {
    if (isRoom !== "참여한 방이 없습니다") {
      alert("이미 다른 방에 참여중입니다.");
      return;
    }
    const header = {
      "Content-Type": "application/json",
      Authorization: userId
    };
    try {
      const res = await axios.patch(
        api_url + `user/room/${roomId}`,
        { isParticipate: false },
        { headers: header }
      );
      dispatch(meeting(res.data.roomId));
      navigate(`/chatting/${res.data.roomId}?isuser=false`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {open ? (
        <div className="room_detail">
          <div className="room_modal">
            <div className="title">
              <span>{title}</span>
              <span style={{ color: "#FFC000" }} onClick={() => setOpen(false)}>
                X
              </span>
            </div>
            <div className="place"># {location}</div>
            <div className="soft">
              <div className="header">
                <div>전공</div>
                <div className="total">
                  {data.majors.length}/{headCount / 2}
                </div>
              </div>
              <div className="profile">
                {data.majors.length === 0 ? (
                  <div>참여자가 없습니다.</div>
                ) : (
                  data.majors.map((info: any) => (
                    <div key={info.name} className="info">
                      <div className="profile-img">{info.url}</div>
                      <div className="name">{info.name}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="soft">
              <div className="header">
                <div>비전공</div>
                <div className="total">
                  {data.nonMajors.length}/{headCount / 2}
                </div>
              </div>
              <div className="profile">
                {data.nonMajors.length === 0 ? (
                  <div>참여자가 없습니다.</div>
                ) : (
                  data.nonMajors.map((info: any) => (
                    <div key={info.name} className="info">
                      <div className="profile-img">{info.url}</div>
                      <div className="name">{info.name}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div
              className="join_game"
              style={{
                pointerEvents: data.isParticipate ? "none" : "auto",
                background: data.isParticipate ? "#ffefbe" : "#ffce3c"
              }}
              onClick={goChat}
            >
              참여하기
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default MeetingDetail;