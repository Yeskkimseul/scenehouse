import React, { useState, useEffect } from 'react';
import Tabs from '../../component/CommonItem/Tabs';
import Button from '../../component/Button/Button';
import './Contest.css';
import ContestList from '../../component/Contest/ContestList';
import ContestItemDetail from '../../component/Contest/ContestItemDetail';




function Contest() {
  const [viewDetail, setViewDetail] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (!viewDetail) {
      // ContestList일 때: 스크롤 막고 스크롤바는 유지
      body.classList.add('scroll-lock');
    } else {
      // ContestItemDetail일 때: 스크롤 원상복구
      body.classList.remove('scroll-lock');
    }

    return () => {
      body.classList.remove('scroll-lock');
    };
  }, [viewDetail]);


  return (
    <div className='Contest'>
      <div className='toptab'>
        <Tabs onTabChange={() => setViewDetail(false)}>
          <div label="공모 작품집">
            {!viewDetail ? (
              <ContestList onShowDetail={() => setViewDetail(true)} />
            ) : (
              <ContestItemDetail onBack={() => setViewDetail(false)} />
            )}
          </div>
          <div label="팀원 모집">
            <p>탭2 내용입니다</p>

          </div>
        </Tabs>
        <Button type="upload" to="/Contest/UploadDashboard">작품 업로드</Button>
      </div>
    </div>
  )
}

export default Contest;