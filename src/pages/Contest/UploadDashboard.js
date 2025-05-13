import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UploadTabs from '../../component/Contest/Uploadtabs';
import UploadGuide from '../../component/Contest/UploadGuide';
import Footer from '../../component/Footer';
import Upload from '../../component/Contest/Upload';

function UploadDashboard() {
  const [showGuide, setShowGuide] = useState(true);
  const [activeTab, setActiveTab] = useState('대시보드');
  const navigate = useNavigate();
  const location = useLocation();

  // URL 쿼리에서 tab 값 가져오기
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get('tab') === 'list' ? '작품 관리' : '대시보드';

  useEffect(() => {
    // 탭 상태 초기화
    setActiveTab(initialTab);
  }, [location]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    navigate(`/Contest/UploadDashboard?tab=${tabName === '작품 관리' ? 'list' : 'guide'}`);
  };

  const handleStartUpload = () => {
    setShowGuide(false);
  };

  return (
    <div className="UploadDashboard" style={{ minHeight: '100vh' }}>
      <UploadTabs activeTab={activeTab} setActiveTab={handleTabChange}>
        <div label="대시보드" data-bg="upload-bg">
          {showGuide ? <UploadGuide goToTab={handleStartUpload} /> : <Upload />}
        </div>
        <div label="작품 관리" data-bg="uploadlist-bg">
          작품관리 내용
        </div>
      </UploadTabs>
      <Footer />
    </div>
  );
}

export default UploadDashboard;