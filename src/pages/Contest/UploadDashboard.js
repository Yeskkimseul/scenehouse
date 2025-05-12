import React, {useState} from 'react';
import UploadTabs from '../../component/Contest/Uploadtabs';
import UploadGuide from '../../component/Contest/UploadGuide';


function UploadDashboard() {

    return(
      
    <div className='UploadDashboard' style={{ backgroundColor: 'var(--white)' }}>


      <UploadTabs>
        <div label="대시보드">
          <UploadGuide />
          </div>
        <div label="작품 관리">
          작품관리 내용
          </div>

      </UploadTabs>

    </div>
    )
    }

export default UploadDashboard;