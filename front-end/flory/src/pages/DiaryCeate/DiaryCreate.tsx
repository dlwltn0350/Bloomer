import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import CreateInput from "../../components/common/CreateInput/CreateInput";
import { SMain, SSection } from "./styles";
import useGeolocation from "react-hook-geolocation";

// mui
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import GroupTagWrapper from "../../components/Diary/GroupTagWrapper/GroupTagWrapper";
import Button from "../../components/common/Button/Button";
import BasicModal from "../../components/common/Modal/BasicModal";
import DiaryLocationModal from "../../components/Diary/DiaryLocationModal/DiaryLocationModal";

import { PlaceType } from "../../models/map/placeType";

import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { createDiaryAction } from "../../redux/modules/diary";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    kakao: any;
  }
}

const DiaryCreate = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const [place, setPlace] = useState<PlaceType>({
    placeName: "멀티캠퍼스 역삼",
    address: "",
    lng: 128.5,
    lat: 37.5,
  });

  const contentInput = useRef<HTMLInputElement>(null);

  const [selectedValue, setSelectedValue] = React.useState("a");

  // ============이미지 삽입 관련 변수=============
  const [selectedImg, setSelectedImg] = useState({
    image_file: "",
    preview_URL: "",
  });
  const fileInput = React.useRef<HTMLInputElement>(null);
  // =============현재 주소 관련 변수=============

  const geolocation = useGeolocation();
  let isGeolocation = geolocation.latitude != null;
  let geocoder = new kakao.maps.services.Geocoder();

  function searchDetailAddrFromCoords(callback: any) {
    // 좌표로 법정동 상세 주소 정보를 요청합니다

    geocoder.coord2Address(
      geolocation.longitude,
      geolocation.latitude,
      callback
    );
  }

  // 현재 위치 반환
  const getGeo = () => {
    if (isGeolocation) {
      searchDetailAddrFromCoords(function (result: any, status: any) {
        if (status === kakao.maps.services.Status.OK) {
          var detailAddr = !!result[0].road_address
            ? result[0].road_address.address_name
            : "";

          setPlace({
            placeName: "",
            address: detailAddr,
            lng: geolocation.longitude,
            lat: geolocation.latitude,
          });
        }
      });
    }
  };

  useEffect(() => {
    getGeo();
  }, [isGeolocation]);

  const handleAddImg = (e: React.MouseEvent<SVGSVGElement>) => {
    fileInput.current!.click();
  };

  const handleImgChange = (e: any) => {
    const imgFile = e.target.files[0];
    let reader = new FileReader();
    if (imgFile) {
      reader.readAsDataURL(imgFile);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result as string;
      if (previewImgUrl) {
        setSelectedImg({
          image_file: imgFile,
          preview_URL: previewImgUrl,
        });
      }
    };
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleDeletePreviewImg = () => {
    setSelectedImg({
      image_file: "",
      preview_URL: "",
    });
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  // 다이어리 생성
  const dispatch = useAppDispatch();
  const onCreateDiary = () => {
    const diaryData = {
      content: contentInput.current?.value,
      imgSrc: selectedImg.image_file,
      lat: place.lat,
      lng: place.lng,
      publicStatus: "전체공개",
      groupList: null,
      fid: 1,
      gid: 1,
      mid: 1,
      address: place.placeName ? place.placeName : place.address,
    };

    console.log(diaryData);
    if (!diaryData.content?.trim()) {
      handleOpen();
    } else {
      navigate("/diary/select", {
        state: {
          diaryData,
        },
      });
    }

    // dispatch(createDiaryAction(diaryData));
    // navigate("/diary/select");
  };

  const style: any = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ffffff",
    boxShadow: 24,
    // p: 3,
  };

  return (
    <SMain>
      <SSection>
        {/* 전체 공개인 경우 height 60% 올리는 로직 추가하기! */}
        <CreateInput
          contentInput={contentInput}
          placeholder="어떤 일이 있었나요?"
        />
        <div className="input__wrapper">
          <button className="image__button">
            <FontAwesomeIcon
              className="image-input__icon"
              icon={faImage}
              onClick={handleAddImg}
            />
          </button>
          <input
            className="file__input"
            type="file"
            ref={fileInput}
            // 가능한 업로드 파일 형식 제한
            accept="image/jpg, image/jpeg, image/png"
            onChange={handleImgChange}
          />
          {/* {selectedImg.preview_URL && (
            <img className="preview-image" src={selectedImg.preview_URL} />
          )} */}

          <BasicModal
            modalButton={
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="전체 공개"
                />
              </FormGroup>
            }
          >
            <h3>공개 설정</h3>
            <div className="radio__wrapper">
              <p>전체 공개</p>
              <Radio {...controlProps("a")} />
            </div>
            <div className="radio__wrapper">
              <p>그룹 공개</p>
              <Radio {...controlProps("b")} />
            </div>
            <div className="radio__wrapper last__radio">
              <p>나만 공개</p>
              <Radio {...controlProps("c")} />
            </div>
          </BasicModal>
        </div>
        <div className="preview-image__wrapper">
          {selectedImg.preview_URL && (
            <>
              <img
                className="preview-image"
                alt="미리보기"
                src={selectedImg.preview_URL}
              />
              <FontAwesomeIcon
                className="cancleBtn"
                icon={faXmark}
                onClick={handleDeletePreviewImg}
              />
            </>
          )}
        </div>
        {/* 많아졌을 때 문제있음. API 연결하고 수정해야 됨 */}
        {/* 그룹 태그 */}
        <GroupTagWrapper />
        <div className="location__wrapper">
          <div>기록 위치</div>
          <div className="location">
            {place.placeName ? place.placeName : place.address}
            <DiaryLocationModal place={place} setPlace={setPlace} />
          </div>
        </div>
      </SSection>
      <div className="bottom__wrapper">
        <Button
          onClick={onCreateDiary}
          contents="기록 완료"
          addStyle={{
            width: "90%",
            // margin: "2rem  0",
            height: "25%",
            background1: "rgb(244,175,255)",
            background2:
              "linear-gradient(90deg, rgba(244,175,255,1) 0%, rgba(156,147,221,1) 58%, rgba(150,119,210,1) 100%)",
            borderRadius: "16px",
            color: "#ffffff",
            fontSize: "1rem",
          }}
        />
      </div>
      <Navbar />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal__wrapper" style={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            일기를 기록해주세요.
          </Typography>
          <Button
            addStyle={{
              // margin: "auto",
              fontSize: "1rem",
              width: "40%",
              height: "2.5rem",
              color: "#ffffff",
              background1: "#ff003e",
              borderRadius: "24px",
            }}
            contents="확인"
            onClick={handleClose}
          />
        </div>
      </Modal>
    </SMain>
  );
};

export default DiaryCreate;
