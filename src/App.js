import React from 'react';
import { Row, Col, Typography, message } from 'antd'
import { pdf } from '@react-pdf/renderer'
import moment from 'moment'
import { saveAs } from 'file-saver'
import { SPTForm } from './components/Form';
import SPTGenerator from './components/SPTGenerator'
import "antd/dist/antd.css"
import 'moment/locale/id'
import SPPDGenerator from './components/SPPDGenerator';

function App() {
  document.title = "Buat SPT & SPPD";

  moment.locale('id')

  const downloadPDF = async (report) => {
    try {
      const blob = await pdf(<SPTGenerator report={report} />).toBlob();
      const sppd = await pdf(<SPPDGenerator report={report} />).toBlob();
      saveAs(blob, `SPT ${new Date().toISOString()}.pdf`);
      saveAs(sppd, `SPPD ${new Date().toISOString()}.pdf`);
    } catch (e) {
      message.error(e.toString());
    }
  }

  return (
    <>
      <Row align="middle" justify="center">
        <Col style={{ paddingTop: 15 }} md={16}>
          <Typography.Title>Buat SPT &amp; SPPD</Typography.Title>
          <SPTForm onSubmit={downloadPDF} />
        </Col>
      </Row>
    </>
  );
}

export default App;
