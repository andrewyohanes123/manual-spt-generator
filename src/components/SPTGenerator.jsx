import React from 'react'
import { Document, Page, View, Text, StyleSheet, Font, Image } from '@react-pdf/renderer'
import moment from 'moment'
import terbilang from '../modules/terbilang'
import "moment/locale/id"

Font.register({
  family: 'TimesNewRoman', fonts: [
    { src: require('../fonts/times.ttf') },
    { src: require('../fonts/timesi.ttf'), fontStyle: 'italic' },
    { src: require('../fonts/timesbi.ttf'), fontStyle: 'italic', fontWeight: 'bold' },
    { src: require('../fonts/timesbd.ttf'), fontWeight: 'bold' },
  ]
})

Font.register({ family: 'Arial', src: require('../fonts/arialbd.ttf') })

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    paddingHorizontal: 25,
    fontFamily: 'TimesNewRoman',
    flex: 1,
    flexGrow: 1,
    paddingVertical: 10
    // justifyContent: 'space-around'
    // alignItems: 'flex-end'
  },
  header: {
    flexGrow: 0,
    marginTop: 150,
    textAlign: 'center'
  },
  headerTitle: {
    fontSize: 20,
    // fontFamily: 'Times New Roman'
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  headerSubtitle: {
    fontSize: 15,
    // fontFamily: 'Times New Roman',
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    flexGrow: 1,
    marginTop: 15
  },
  contentText: {
    fontSize: 11
  },
  mainContent: {
    flex: 0,
    marginVertical: 10,
    // justifyContent: 'space-around',
    // alignItems: 'flex-start',
    // flexDirection: 'row',
    flexGrow: 0,
  },
  mainContentDiv: {
    // flex: 0,
    // flexGrow: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 10
  },
  mainContentParagraph: {
    marginVertical: 5,
    flex: 0,
    flexDirection: 'row'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexFlow: 1
  },
  footerContent: {
    flex: 0,
    flexDirection: 'column',
    marginTop: 10
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  header2: {
    flex: 0,
    flexGrow: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    paddingBottom: 5,
    marginTop: 10,
    paddingHorizontal: 6,
    // fontFamily: 'Arial'
  },
  headerLogo: {
    width: 50,
    // flex: 0,
    // flexGrow: 0
    // height: undefined
  },
})

const roman_numerals = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII'
];

const assistants = [
  'ASISTEN PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT SEKRETARIS DAERAH KABUPATEN MINAHASA TENGGARA',
  'ASISTEN PEREKONOMIAN DAN PEMBANGUNAN SEKRETARIS DAERAH KABUPATEN MINAHASA TENGGARA',
  'ASISTEN ADMINISTRASI UMUM SEKRETARIS DAERAH KABUPATEN MINAHASA TENGGARA',
];

const SPTGenerator = ({ report }) => {
  const capitalize_Words = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  const d1 = moment(report.start_date).format('DD MMMM ')
  const d2 = moment(report.end_date).format('DD MMMM YYYY')
  const date = `${d1} s/d ${d2}`
  let diff = moment(report.end_date).diff(moment(report.start_date), 'days') + 1;
  moment.locale('id');

  return (
    <>
      <Document title={`SPT ${new Date().toISOString()}`} producer="Andrew Yohanes" creator={`TagConn ${new Date().getFullYear()}`} author="Andrew Yohanes" subject="Test">
        <Page
          verticalRuler={false}
          horizontalRuler={false}
          size="FOLIO"
          style={[styles.page, { paddingTop: 10 }]}
          horizontalRulerSteps={10}
          verticalRulerSteps={10}
        >
          {
            (report.type === 2) ?
              <View style={styles.header}>
                <Text style={styles.headerTitle}>BUpati Minahasa Tenggara</Text>
                <Text style={styles.headerSubtitle}>Surat Perintah Tugas</Text>
                <Text style={styles.headerSubtitle}>Nomor: <Text style={{ color: 'white' }}>_______-</Text>/SPT/DP/WKLB/{roman_numerals[new Date(report.start_date).getMonth()]}-{new Date(report.start_date).getFullYear()} </Text>
              </View>
              :
              <>
                <View style={styles.header2}>
                  <View style={{ flex: 1, flexGrow: 1 }}>
                    <Image src={require('../MITRA.jpg')} style={styles.headerLogo} />
                  </View>
                  <View style={{ fontSize: 12, flex: 6, flexGrow: 6 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'normal' }}>PEMERINTAH KABUPATEN MINAHASA TENGGARA</Text>
                    <Text style={{ textAlign: 'center', fontFamily: 'Arial', fontWeight: 'bold', marginVertical: 3, textTransform: 'uppercase', fontSize: 13 }}>Sekretariat Daerah</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: 'normal' }}>Jalan Raya Ratahan - Belang Kelurahan Wawali Kecamatan Ratahan</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: 'normal' }}>website : www.mitrakab.go.id, email : info@mitrakab.go.id</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: 'normal' }}>RATAHAN&nbsp;&nbsp;&nbsp;KODE POS. 95695</Text>
                  </View>
                  <View style={{ flex: 0, flexGrow: 0, width: 70, height: 70 }}>
                    {/* <Image src={require('../KOMINFO.jpg')} style={[styles.headerLogo, { width: 70 }]} /> */}
                  </View>
                </View>
                <Text style={[styles.headerSubtitle, { textAlign: 'center' }]}>Surat Perintah Tugas</Text>
                <Text style={styles.headerSubtitle}>Nomor: <Text style={{ color: 'white' }}>________</Text>/SPT/DD/AST-3/{roman_numerals[new Date(report.start_date).getMonth()]}-{new Date(report.start_date).getFullYear()} </Text>
              </>
          }
          <View style={styles.content}>
            <Text style={styles.contentText}>{
              report.type === 3 ?
                capitalize_Words(`${assistants[2]}`)
                :
                "Wakil Bupati Minahasa Tenggara"
            }, dengan ini menugaskan kepada: </Text>
            <View style={[styles.mainContent]}>
              {/* org 2 */}
              {report.users.map((row, i) => (<React.Fragment key={i}>
                <View style={[styles.mainContentParagraph, { marginVertical: 2.5 }]}>
                  <View style={styles.mainContentDiv}>
                    <Text style={styles.contentText}>{i + 1}</Text>
                  </View>
                  <View style={[styles.mainContentDiv, { flex: 1 }]}>
                    <Text style={styles.contentText}>Nama</Text>
                    <Text style={styles.contentText}>Pangkat / Gol</Text>
                    <Text style={styles.contentText}>NIP</Text>
                    <Text style={styles.contentText}>Jabatan</Text>
                  </View>
                  <View style={styles.mainContentDiv}>
                    <Text style={styles.contentText}>:</Text>
                    <Text style={styles.contentText}>:</Text>
                    <Text style={styles.contentText}>:</Text>
                    <Text style={styles.contentText}>:</Text>
                  </View>
                  <View style={[styles.mainContentDiv, { flex: 3 }]}>
                    <Text style={styles.contentText}>{row.name}</Text>
                    {
                      <>
                        {typeof row.rank === 'undefined' ?
                          <Text style={styles.contentText}>-</Text>
                          :
                          <Text style={styles.contentText}>{`${row.rank}`}</Text>}
                      </>
                    }
                    <Text style={styles.contentText}>{typeof row.nip === 'undefined' ? "-" : row.nip}</Text>
                    <Text style={styles.contentText}>{
                      row.role
                    }</Text>
                  </View>
                </View>
              </React.Fragment>))}
              {/* org 2 */}
              {/* Tujuan */}
              <View break style={[styles.mainContentParagraph, { marginVertical: 1, paddingHorizontal: 5, marginTop: 10 }]}>
                <View style={styles.mainContentDiv}>
                  <Text style={styles.contentText}>&nbsp;</Text>
                </View>
                <View style={[styles.mainContentDiv, { flex: 1 }]}>
                  <Text style={styles.contentText}>Tujuan</Text>
                </View>
                <View style={styles.mainContentDiv}>
                  <Text style={styles.contentText}>:</Text>
                </View>
                <View style={[styles.mainContentDiv, { flex: 3 }]}>
                  <Text style={styles.contentText}>{report.destination}</Text>
                </View>
              </View>
              {/* tujuan */}
              {/* Maksud */}
              <View style={[styles.mainContentParagraph, { marginVertical: 0, paddingHorizontal: 5 }]}>
                <View style={styles.mainContentDiv}>
                  <Text style={styles.contentText}>&nbsp;</Text>
                </View>
                <View style={[styles.mainContentDiv, { flex: 1 }]}>
                  <Text style={styles.contentText}>Maksud</Text>
                </View>
                <View style={styles.mainContentDiv}>
                  <Text style={styles.contentText}>:</Text>
                </View>
                <View style={[styles.mainContentDiv, { flex: 3, textAlign: 'justify' }]}>
                  <Text style={styles.contentText}>{report.intention}</Text>
                </View>
              </View>
              {/* Maksud */}
              {/* Jlh hari */}
              <View style={[styles.mainContentParagraph, { marginVertical: 1, paddingHorizontal: 5 }]}>
                <View style={styles.mainContentDiv}>
                  <Text style={styles.contentText}>&nbsp;</Text>
                </View>
                <View style={[styles.mainContentDiv, { flex: 1 }]}>
                  <Text style={styles.contentText}>Jumlah hari</Text>
                </View>
                <View style={styles.mainContentDiv}>
                  <Text style={styles.contentText}>:</Text>
                </View>
                <View style={[styles.mainContentDiv, { flex: 3 }]}>
                  <Text style={styles.contentText}>{diff} ({terbilang(diff)}) hari, Tanggal {date}</Text>
                </View>
              </View>
              {/* Jlh hari */}
              {/* Pembebanan biaya */}
              <View style={[styles.mainContentParagraph, { marginVertical: 1, paddingHorizontal: 5 }]}>
                <View style={styles.mainContentDiv}>
                  <Text style={styles.contentText}>&nbsp;</Text>
                </View>
                <View style={[styles.mainContentDiv, { flex: 1 }]}>
                  <Text style={styles.contentText}>Pembebanan Biaya</Text>
                </View>
                <View style={styles.mainContentDiv}>
                  <Text style={styles.contentText}>:</Text>
                </View>
                <View style={[styles.mainContentDiv, { flex: 3 }]}>
                  <Text style={styles.contentText}>{report.fee_from}</Text>
                </View>
              </View>
              {/* Pembebanan biaya */}
              {/* pre footer */}
              <View break style={[styles.mainContentParagraph, { marginVertical: 12, paddingHorizontal: 5 }]}>
                <View style={styles.mainContentDiv}>
                  <Text style={styles.contentText}>Demikian Perintah Tugas ini dibuat untuk dilaksanakan dengan penuh tanggung jawab.</Text>
                </View>
              </View>
              {/* pre footer */}
              {/* footer */}
              {
                (report.type === 2) ?
                  <View break style={[styles.footerContainer, { marginTop: report.users.length > 1 ? 25 : 75, position: 'relative' }]}>
                    <View style={[styles.footer, { paddingHorizontal: 10, marginRight: 20 }]}>
                      <View style={[styles.footerContent, { width: 230 }]}>
                        <Text style={styles.contentText}>Dikeluarkan di : Ratahan</Text>
                        <Text style={styles.contentText}>Pada tanggal   :</Text>
                        <View style={[styles.footerContent, { alignItems: 'center' }]}>
                          <Text style={{ fontSize: 13.5, marginTop: 5, marginBottom: 90 }}>Wakil Bupati Minahasa Tenggara,</Text>
                          <Text style={{ fontSize: 13.5 }}>JESAJA JOCKE LEGI</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  :
                  <View break style={[styles.footerContainer, { marginTop: report.users.length > 1 ? 25 : 75, position: 'relative', }]}>
                    <View style={[styles.footer, { paddingHorizontal: 10, marginRight: 20 }]}>
                      <View style={[styles.footerContent]}>
                        <Text style={styles.contentText}>Dikeluarkan di : Ratahan</Text>
                        <Text style={styles.contentText}>Pada tanggal   : </Text>
                        <View style={[styles.footerContent, { width: 225, textAlign: 'center', justifyContent: 'center', }]}>
                          <Text style={{ fontSize: 11.5, marginTop: 5, }}>a.n. Bupati Minahasa Tenggara,</Text>
                          <Text style={{ fontSize: 11.5, }}>Sekretariat Daerah</Text>
                          <Text style={{ fontSize: 11.5, }}>U.b.</Text>
                          <Text wrap={false} break style={{ fontSize: 11.5, textAlign: 'center', }}>{capitalize_Words(assistants[2])},</Text>
                          <Text style={{ fontSize: 11.5, marginTop: 90, textDecoration: 'underline', fontWeight: 'bold', textAlign: 'center' }}>DRS FRITS HEIN MOKORIMBAN</Text>
                          <Text style={{ fontSize: 11, marginTop: 2, textAlign: 'center' }}>NIP. 196402261990071001</Text>
                        </View>
                      </View>
                    </View>
                  </View>
              }
              {/* footer */}
            </View>
          </View>
        </Page>
      </Document>
    </>
  )
}

export default SPTGenerator
