import React from "react";
import "./Upload.css";

function Upload() {
  return (
    <div className="uploadpg">
      <div className="uploadCon">

        <div className="b4">
          작품 업로드
        </div>

        <section className="uploadTit">
          <div className="b5">
            작품명
          </div>
          <input className="textinput" type="text" placeholder="작품명을 입력해주세요"></input>
        </section>

        <section className="uploadtype">
          <div className="b5">
            형식
          </div>
          <ul className="cklist">
            <li>
              <input type="checkbox" id="chk" />
              <label htmlFor="chk">영화</label>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default Upload;