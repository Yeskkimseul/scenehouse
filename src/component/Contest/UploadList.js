import React from "react";
import "./UploadList.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import listitem1 from "../../img/uploadlist/list1.png"
import eyeicon from "../../img/eye.svg"
import blackheart from "../../img/blackheartempty.svg"
import comment from "../../img/comment.svg"

function UploadList() {
    return (
        <div className="UploadListWrap">
            <div className="uploadcont">
                <ul className="list">
                    <li>
                        <img src={listitem1} alt="빛이 멈추는 곳"></img>
                        <div className="itemcon">
                            <div className="b6">
                                빛이 멈추는 곳
                            </div>
                            <div className="bottom">
                                <ul className="iconset">
                                    <li>
                                        <img src={eyeicon} alt="조회수" />
                                        <div className="b8">
                                            10000
                                        </div>
                                    </li>
                                    <li>
                                        <img src={blackheart} alt="찜수" />
                                        <div className="b8">
                                            10000
                                        </div>
                                    </li>
                                    <li>
                                        <img src={comment} alt="댓글수" />
                                        <div className="b8">
                                            10000
                                        </div>
                                    </li>
                                </ul>
                                <Button type='blackmidbtn'>수정하기</Button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};


export default UploadList;