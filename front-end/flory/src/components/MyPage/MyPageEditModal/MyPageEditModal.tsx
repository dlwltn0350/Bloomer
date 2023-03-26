import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../../common/Avatar/Avatar";
import BasicModal from "../../common/Modal/BasicModal";
import { ImgIcon, SForm } from "./styles";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ModifyButtonImg from "../../../assets/imgs/button/ModifyButton.png";
import cameraButtonImg from "../../../assets/imgs/button/cameraButton.png";

const returnPickStatus = (idx: number, pickedIdx: number) => {
  return idx === pickedIdx ? "pick" : "";
};

const MyPageEditModal = () => {
  const imgIdxList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const userInfo = useSelector((state: any) => state.AuthReducer);
  const [nickName, setNickName] = useState("");
  const [pickedIdx, setPickedIdx] = useState(0);

  const selectFile = useRef<HTMLInputElement | null>(null); // Icon onClick에 input File을 달기 위한 ref

  const [previewImg, setpreviewImg] = useState(""); // 미리보기 파일(출력을 위한)
  const [imgFile, setImgFile] = useState(""); // 미리보기 실제 파일(저장을 위한)

  const handlePickImg = (idx: number) => {
    setPickedIdx(idx);
  };

  // 선택이미지 미리보기
  const handleChangePreview = (e: any) => {
    console.log(e.target.files);
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      // 1. 파일을 읽어 버퍼에 저장합니다.
      // 파일 상태 업데이트
      reader.onloadend = () => {
        // 2. 읽기가 완료되면 아래코드가 실행됩니다.
        const base64 = reader.result;
        if (base64) {
          var base64Sub = base64.toString();
          setpreviewImg(base64Sub); // 파일 base64 상태 업데이트
          setImgFile(e.target.files[0]); //저장을 위한 파일
          console.log(previewImg);
          console.log(imgFile);
        }
      };
    }
  };

  return (
    <BasicModal
      modalButton={
        <button>
          <ImgIcon
            onClick={() => {
              //
            }}
          >
            <Avatar size={"big"} imgIdx={0} />
            <img src={ModifyButtonImg} className="modifyButtonImg"></img>
          </ImgIcon>
        </button>
      }
    >
      <h3>프로필 설정</h3>
      <SForm>
        <p>닉네임 변경</p>
        <div className="nickname__wrapper">
          <FontAwesomeIcon icon={faUser} />
          <input
            className="input__section"
            type="text"
            placeholder="전 닉네임"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <p>프로필 사진 변경</p>
        <div className="image__wrapper">
          <span
            key={11}
            className="image__btn"
            onClick={() => handlePickImg(11)}
          >
            <input
              type="file"
              accept=".jpg, .png"
              style={{ display: "none" }}
              ref={(ref) => {
                selectFile.current = ref;
              }} //Avatar에서 input에 접근
              onChange={handleChangePreview}
            />
            <Avatar
              onClick={() => selectFile.current?.click()}
              size="medium"
              tmpsrc={previewImg}
              // src={userInfo.imgUrl}
              imgIdx={11}
              key={11}
              status={returnPickStatus(11, pickedIdx)}
            />
            <img src={cameraButtonImg} className="cameraButtonImg"></img>
          </span>
          {imgIdxList.map((item, idx) => {
            return (
              <span
                key={idx}
                className="image__btn"
                onClick={() => handlePickImg(idx)}
              >
                <Avatar
                  imgIdx={item}
                  size="medium"
                  key={idx}
                  status={returnPickStatus(idx, pickedIdx)}
                />
              </span>
            );
          })}
        </div>
      </SForm>
    </BasicModal>
  );
};

export default MyPageEditModal;