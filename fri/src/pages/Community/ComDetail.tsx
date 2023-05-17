import Back from "../../assets/back.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Pencil from "../../assets/Pencil.png";
import Trash from "../../assets/Trash.png";
import heart from "../../assets/like_btn.png";
import noheart from "../../assets/noHeart.png";
import comment from "../../assets/comment_btn.png";
import Scrap from "../../assets/scrap_btn.png";
import noscrap from "../../assets/noScrap.png";
import Comment from "../../components/Board/CommentList";
import axios from "axios";
import "./detail.scss"

export type CommentType = {
	commentId : number;
	content : string;
	createdAt : string;
	identity : string;
}

export type BoardType = {
	boardId : number;
	title : string;
	content : string;
	likesCount : number;
	likes : boolean;
	commentCount : number;
	commentList : CommentType[];
	boardImage : string[];
	anonymousProfileImageUrl : string;
	nickname : string;
	scrap : boolean;
	scrapCount : string;
}

function ComDetail() {
	const [data, setData] = useState<BoardType | undefined>();
	const [likes, setLikes] = useState<number>(0);
	const [scrap, setScrap] = useState<number>(0);
	const [cmt, setCmt] = useState<number>(0);
	const api_url = process.env.REACT_APP_TEST_API;
	const navigate = useNavigate();
	const boardId = useParams().id;
	const userId = useSelector((state: RootState) => {
		return state.strr.userId;
	});
	const delPost = async() => {
		const header = {
			"Authorization": Number(userId),
			"Content-Type": "application/json"
		};
		const datas = {
			"boardId": boardId,
			"delete": true
		}
		try {
			await axios.patch(api_url + "board/delete", datas, {headers: header});
			navigate("/board")
			
		}catch(e){console.log(e)};
	}

	const pushScrap = async() => {
		const header = {
			"Authorization": Number(userId),
			"Content-Type": "application/json"
		};
		let res: any;

		try {
			if(!data?.scrap) res = await axios.post(api_url + `scrap`, {"boardId" : boardId}, {headers: header});
			else res = await axios.patch(api_url + `scrap`, {"boardId" : boardId, "delete" : true}, {headers: header});
			res.data.scrap ? setScrap(scrap+1) : setScrap(scrap-1)
			const newScrap = res.data.scrap;
			if (data && typeof data.boardId === "number") {
				const newState = { ...data, scrap: newScrap };
				setData(newState);
			}
		}catch(e){console.log(e)}
	}


	const pushHeart = async () => {
		const header = {
			"Authorization": Number(userId),
			"Content-Type": "application/json"
		};
		let res: any;

		try {
			if(!data?.likes) res = await axios.post(api_url + `likes`, {"boardId" : boardId}, {headers: header});
			else res = await axios.patch(api_url + `likes`, {"boardId" : boardId, "delete" : true}, {headers: header});
			res.data.likes ? setLikes(likes+1) : setLikes(likes-1)
			const newLikes = res.data.likes;
			if (data && typeof data.boardId === "number") {
				const newState = { ...data, likes: newLikes };
				setData(newState);
			}
		}catch(e){console.log(e)}
	}
    useEffect(() => {
			const getData = async () => {
				const header = {
					"Authorization": Number(userId),
					"Content-Type": "application/json"
				};
				try {
					const res = await axios.get(api_url + `board/${boardId}`, {headers: header});
					setData(res.data);
					setLikes(res.data.likesCount)
					setScrap(res.data?.scrapCount)
					setCmt(res.data?.commentList?.length)
					
				}catch(e){console.log(e)};
			}
			getData();
    }, [])

    return (
      <div className="board_detail">
		<img src={Back} alt="<" id="back" onClick={() => navigate('/board')}/>
		<div className="detail_scroll">
			<div className="detail_title">{data?.title}</div>
			<div className="detail-rd">
				{/* <div className="write_board">수정<img src={Pencil} alt="pencil" id="pencil"/></div> */}
				<div className="delete_board" onClick={delPost}>삭제<img src={Trash} alt="trash" id="trash"/></div>
			</div>
			<div className="detail-content">
				{data?.content}
				<div className="detail_contet-bottom">
					<div className="bottom-writer"><img src={data?.anonymousProfileImageUrl} alt="writer"/>{data?.nickname}</div>
					<div className="bottom-btn">
						<div className="heart" onClick={pushHeart}>
							<img src={data?.likes ? heart : noheart} alt="♡"/>{likes}</div>
						<div className="comment"><img src={comment} alt="○"/>{cmt}</div>
						<div className="scrap" onClick={pushScrap}><img src={data?.scrap ? Scrap : noscrap} alt="□"/>{scrap}</div>
					</div>
				</div>
			</div>
			<div className="detail_image">
				{
					data?.boardImage.length && data?.boardImage.length > 1 &&				
					data?.boardImage.map((url, index) => (
						<div className="imgs"  key={index} ><img src={url} className="imgs" alt="img"/></div>
					))
				}
				{
					data?.boardImage.length && data?.boardImage.length === 1 &&								
					<div className="img"><img src={data?.boardImage[0]} alt="img"/></div>
				}
			</div>
			{
				data?.commentList && <Comment comment={data?.commentList} board={data.boardId} setCmt={setCmt} cmt={cmt}/>
			}
	  	</div>
	</div>
    )
}
export default ComDetail;