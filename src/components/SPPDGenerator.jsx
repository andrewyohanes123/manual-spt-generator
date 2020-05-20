import React from 'react'
import { Document, Page, View, Text, StyleSheet, Font } from '@react-pdf/renderer'
import SPPDPage from './SPPDPage'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 12,
    paddingHorizontal: 15,
  },
  block: {
    flex: 1,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: 'white'
  },
  header: {
    flex: 0,
    flexGrow: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    paddingBottom: 5
  },
  headerLogo: {
    width: 55,
    // flex: 0,
    // flexGrow: 0
    // height: undefined
  },
  content: {
    fontFamily: 'TimesNewRoman',
    fontSize: 12,
  },
  mainContent: {
    flexGrow: 0,
    flexDirection: 'row',
    // flexWrap: 'wrap'
  },
  mainContentBlock: {
    padding: 2,
    paddingHorizontal: 8,
    borderColor: 'black',
    borderWidth: 1,
    textOverflow: 'hidden',
    marginLeft: -1,
    marginTop: -1
  }
})

Font.register({ family: 'Arial', src: require('../fonts/arialbd.ttf'), fontWeight: 'bold' })
Font.register({
  family: 'TimesNewRoman', fonts: [
    { src: require('../fonts/times.ttf') },
    { src: require('../fonts/timesi.ttf'), fontStyle: 'italic' },
    { src: require('../fonts/timesbi.ttf'), fontStyle: 'italic', fontWeight: 'bold' },
    { src: require('../fonts/timesbd.ttf'), fontWeight: 'bold' },
  ]
})

function SPPDGenerator({ report }) {
  return (
    <>
      <Document title="SPPD" author="TagConn">
        {report.users.map((req, i) => (
          <SPPDPage report={report} user={req} key={i} />
        ))}
        <Page style={[styles.page, styles.content]} size="FOLIO">
          {/*  */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, margin: -1, borderColor: 'black', borderWidth: 1, padding: 2, marginTop: 0, marginBottom: -1 }}>

            </View>
            <View style={{ flex: 1, margin: 0, borderColor: 'black', borderWidth: 1, padding: 2, marginBottom: -1 }}>
              <Text>Berangkat Dari</Text>
              <Text>(Tempat Kedudukan)</Text>
              <Text>Pada Tanggal</Text>
              <Text>Ke</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 5 }}>
                KEPALA BADAN
              </Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 40, textDecoration: 'underline', }}>MECKY R. T. TUMIMOMOR, SE, MSi</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>NIP. 196603281994031005</Text>
            </View>
          </View>
          {/*  */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, margin: -1, borderColor: 'black', borderWidth: 1, padding: 2, marginTop: 0, marginBottom: -1 }}>
              <Text>II. Tiba di</Text>
              <Text>Pada Tanggal</Text>
              <Text>Kepala</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'normal', marginTop: 53, textDecoration: 'underline', }}>(…………………………………………………….)</Text>
              <Text style={{ textAlign: 'left', fontWeight: 'normal', paddingLeft: 20 }}>NIP.</Text>
            </View>
            <View style={{ flex: 1, margin: 0, borderColor: 'black', borderWidth: 1, padding: 2, marginBottom: -1 }}>
              <Text>Berangkat Dari</Text>
              <Text>Ke</Text>
              <Text>Pada Tanggal</Text>
              <Text>Kepala </Text>
              <Text style={{ textAlign: 'center', fontWeight: 'normal', marginTop: 40, textDecoration: 'underline', }}>(…………………………………………………….)</Text>
              <Text style={{ textAlign: 'left', fontWeight: 'normal', paddingLeft: 20 }}>NIP. </Text>
            </View>
          </View>
          {/*  */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, margin: -1, borderColor: 'black', borderWidth: 1, padding: 2, marginTop: 0, marginBottom: -1 }}>
              <Text>III. Tiba di</Text>
              <Text>Pada Tanggal</Text>
              <Text>Kepala</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'normal', marginTop: 53, textDecoration: 'underline', }}>(…………………………………………………….)</Text>
              <Text style={{ textAlign: 'left', fontWeight: 'normal', paddingLeft: 20 }}>NIP. </Text>
            </View>
            <View style={{ flex: 1, margin: 0, borderColor: 'black', borderWidth: 1, padding: 2, marginBottom: -1 }}>
              <Text>Berangkat Dari</Text>
              <Text>Ke</Text>
              <Text>Pada Tanggal</Text>
              <Text>Kepala </Text>
              <Text style={{ textAlign: 'center', fontWeight: 'normal', marginTop: 40, textDecoration: 'underline', }}>(…………………………………………………….)</Text>
              <Text style={{ textAlign: 'left', fontWeight: 'normal', paddingLeft: 20 }}>NIP. </Text>
            </View>
          </View>
          {/*  */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, margin: -1, borderColor: 'black', borderWidth: 1, padding: 2, marginTop: 0, marginBottom: -1 }}>
              <Text>IV. Tiba di</Text>
              <Text>Pada Tanggal</Text>
              <Text>Kepala</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'normal', marginTop: 53, textDecoration: 'underline', }}>(…………………………………………………….)</Text>
              <Text style={{ textAlign: 'left', fontWeight: 'normal', paddingLeft: 20 }}>NIP. </Text>
            </View>
            <View style={{ flex: 1, margin: 0, borderColor: 'black', borderWidth: 1, padding: 2, marginBottom: -1 }}>
              <Text>Berangkat Dari</Text>
              <Text>Ke</Text>
              <Text>Pada Tanggal</Text>
              <Text>Kepala </Text>
              <Text style={{ textAlign: 'center', fontWeight: 'normal', marginTop: 40, textDecoration: 'underline', }}>(…………………………………………………….)</Text>
              <Text style={{ textAlign: 'left', fontWeight: 'normal', paddingLeft: 20 }}>NIP. </Text>
            </View>
          </View>
          {/*  */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, margin: -1, borderColor: 'black', borderWidth: 1, padding: 2, marginTop: 0, marginBottom: -1 }}>
              <Text>V. Tiba di</Text>
              <Text>(Tempat Kedudukan)</Text>
              <Text>Pada Tanggal</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 18 }}>
                KEPALA BADAN
              </Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 40, textDecoration: 'underline', }}>MECKY R. T. TUMIMOMOR, SE, MSi</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>NIP. 196603281994031005</Text>
            </View>
            <View style={{ flex: 1, margin: 0, borderColor: 'black', borderWidth: 1, padding: 2, marginBottom: -1 }}>
              <Text style={{ textAlign: 'justify' }}>Telah diperiksa dengan keterangan bahwa perjalanan tersebut dilakukan atas perintah Pejabat Berwenang dan semata-mata untuk kepentingan jabatan dalam jangka waktu yang sesingkat-singkatnya</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 5 }}>PPK,</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 40, textDecoration: 'underline', }}>IRENE HANNA DEBORA RUMANGU, SE</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>NIP. 198609072014022002</Text>
            </View>
          </View>
          {/*  */}
          <View style={{ flex: 0, flexDirection: 'row' }}>
            <View style={{ flex: 1, margin: -1, borderColor: 'black', borderWidth: 1, padding: 2, marginTop: 0, marginBottom: -1 }}>
              <Text style={{ marginBottom: 10 }}>VI. Catatan lain lain: </Text>
            </View>
            <View style={{ flex: 1, margin: 0, borderColor: 'black', borderWidth: 1, padding: 2, marginBottom: -1 }}>

            </View>
          </View>
          <View style={{ flex: 0, flexDirection: 'row' }}>
            <View style={{ flex: 1, margin: -1, borderColor: 'black', borderWidth: 1, padding: 2, marginTop: 0, marginRight: 0 }}>
              <Text style={{ marginBottom: 2 }}>VII. Perhatian </Text>
              <Text style={{ textAlign: 'justify' }}>Pejabat yang berwenang menerbitkan SPPD, pegawai yang melakukan perjalanan dinas, para pejabat yang mengesahkan tanggal berangkat/tiba, serta pihak yang terlibat dalam penerbitan SPPD bertanggung-jawab berdasarkan peraturan-peraturan keuangan negara apabila menderita rugi akibat kesalahan, kelalaian, dan kealpaanya.</Text>
            </View>
          </View>
          {/*  */}
        </Page>
      </Document>
    </>
  )
}

export default SPPDGenerator;
