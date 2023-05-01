import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png"
import Back from "../../components/Back"
import "./LogIn.scss";

interface SingInForm {
  id: string;
  password: string;
}

function preloadImage(src: string) {
  const img = new Image();
  img.src = src;
}

export default function LogIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState<SingInForm>({ id: "", password: "" });

  useEffect(() => {
    preloadImage("/assets/images/Logo.png");
  }, []);

  // const contentRef = useRef<HTMLDivElement>(null);
  // const logoRef = useRef<HTMLImageElement>(null);
  // const [animationFinished, setAnimationFinished] = useState(false);

  // useEffect(() => {
  //   console.log("Rmx?", animationFinished);
  //   const logo = logoRef.current;
  //   const content = contentRef.current;
  //   if (logo === null) return;
  //   if (content === null) return;

  //   if (!animationFinished && logo && content) {
  //     // 애니메이션이 아직 진행중인 경우에만 수행
  //     const onShrinkAnimationEnd = () => {
  //       // setAnimationFinished(true);
  //       content.classList.remove("hidden"); // 애니메이션이 완료된 후에 hidden 클래스 제거
  //       logo.removeEventListener("transitionend", onShrinkAnimationEnd);
  //     };

  //     logo.addEventListener("transitionend", onShrinkAnimationEnd);
  //     logo.classList.add("shrink");
  //   } else if (animationFinished === true) {
  //     content.classList.remove("hidden"); // 애니메이션이 완료된 경우 hidden 클래스 제거
  //   }

  //   return () => {
  //     console.log("gg");
  //     setAnimationFinished(true);
  //     if (animationFinished === true) {
  //       content.classList.remove("hidden");
  //     }
  //     // content.classList.add("hidden");
  //   };
  // }, [animationFinished]);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // 로그인 axios
      
      // 초기화
      setForm({ id: "", password: "" });
    },
    [form]
  );

  return (
    <div className="login">
      <Back />
      <div className="login-container">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="logo"
            // ref={logoRef}
          />
        </div>
        <div
          className="login-form"
          // ref={contentRef}
        >
          <form onSubmit={handleSubmit}>
            <div className="login-box">
              <div className="login-input">
                <input
                  className="emailInput"
                  placeholder="아이디"
                  type="text"
                  name="id"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="login-box">
              <input
                className="passwordInput"
                placeholder="비밀번호"
                type="password"
                name="password"
                onChange={handleInput}
              />
            </div>
            <div className="login-box">
              <button className="login-btn" onClick={()=> navigate("/main")}>로그인</button>
            </div>
          </form>
          <div
            className="sing-up"
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입하러 가기
          </div>
        </div>
      </div>
    </div>
  );
}
