import React, { useEffect } from "react";
import "./Casting.css";
import Button from "../Button/Button";

function Casting() {
    useEffect(() => {
        document.body.classList.add('Casting');
        return () => {
            document.body.classList.remove('Casting');
        };
    }, []);

    return (
        <div className="CastingWrap">
            <div className="castingall">
                <div className="top">
                    <div className="casttit">
                        <h3>진행중인</h3>
                        <div className="b4">
                            모집공고
                        </div>
                    </div>
                    <div className="btns">
                         <Button type="whitemidbtn">내가 쓴 모집글</Button>
                         <Button type="whitemidbtn">모집글 작성하기</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Casting