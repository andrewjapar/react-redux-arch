import { CButton, CButtonGroup, CCard, CCardBody, CCardFooter, CCol, CProgress, CRow } from '@coreui/react';
import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai';
import OrderChart from './OrderChart';

interface Props {}

const Dashboard: React.FC<Props> = ({}) => {

    return (
        <CCard>
        <CCardBody>
            <CRow>
                <CCol sm="5">
                    <h4 id="traffic" className="card-title mb-0">Total Order</h4>
                    <div className="small text-muted">September 2020</div>
                </CCol>
                <CCol sm="7" className="d-none d-md-block">
                    <CButton color="primary" className="float-right">
                    <AiOutlineCloudDownload />
                    </CButton>
                    <CButtonGroup className="float-right mr-3">
                    {
                        ['Day', 'Month', 'Year'].map(value => (
                        <CButton
                            color="outline-secondary"
                            key={value}
                            className="mx-0"
                            active={value === 'Month'}
                        >
                            {value}
                        </CButton>
                        ))
                    }
                    </CButtonGroup>
                </CCol>
            </CRow>
            <OrderChart style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Success Orders</div>
              <strong>1.223 Orders (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    );
}

export default Dashboard