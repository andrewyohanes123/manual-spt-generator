import React from 'react'
import { Page, View, Text, StyleSheet, Font, Image } from '@react-pdf/renderer'
import moment from 'moment'
import terbilang from '../modules/terbilang'

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

export default function SPPDPage({ report, user }) {
  let diff = moment(report.end_date).diff(moment(report.start_date), 'days') + 1;
  return (
    <>
      <Page style={styles.page} size="FOLIO">
        <View style={styles.header}>
          <View style={{ flex: 1, flexGrow: 1 }}>
            <Image src={require('../MITRA.jpg')} style={styles.headerLogo} />
          </View>
          <View style={{ fontSize: 12, flex: 6, flexGrow: 6 }}>
            <Text style={{ textAlign: 'center' }}>PEMERINTAH KABUPATEN MINAHASA TENGGARA</Text>
            <Text break style={{ textAlign: 'center', fontFamily: 'Arial', fontWeight: 'bold', marginVertical: 3, textTransform: 'uppercase', fontSize: 13 }}>BADAN PENGELOLAAN KEUANGAN DAN PENDAPATAN DAERAH</Text>
            <Text style={{ textAlign: 'center', fontSize: 10 }}>Jalan Raya Ratahan - Belang Kelurahan Wawali Kecamatan Ratahan</Text>
            <Text style={{ textAlign: 'center', fontSize: 10 }}>website : www.mitrakab.go.id, email : info@mitrakab.go.id</Text>
            <Text style={{ textAlign: 'center', fontSize: 10 }}>RATAHAN&nbsp;&nbsp;&nbsp;KODE POS. 95695</Text>
          </View>
          <View style={{ flex: 0, flexGrow: 0, width: 70, height: 70 }}>
            {/* <Image src={require('../KOMINFO.jpg')} style={[styles.headerLogo, { width: 70 }]} /> */}
          </View>
        </View>
        <View style={styles.content}>
          <View style={{ flexGrow: 0, flexDirection: 'row' }}>
            <View style={{ flexGrow: 1, padding: 5 }} />
            <View style={{ flexGrow: 1, padding: 5, flexDirection: 'column', paddingLeft: 10 }} >
              <Text>Lembar :</Text>
              <Text>Nomor  :</Text>
            </View>
          </View>
          <View style={{ marginVertical: 5, flexGrow: 0 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12, textAlign: 'center' }}>SURAT PERINTAH PERJALANAN DINAS (SPPD)</Text>
          </View>
          <View style={{ marginVertical: 5, flexGrow: 0, paddingTop: 5, marginBottom: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 11.5 }}>NOMOR/TANGGAL SPT:</Text>
          </View>
          {/*  */}
          <View style={styles.mainContent}>
            <View style={[styles.mainContentBlock, { flexGrow: 0 }]}>
              <Text>1</Text>
            </View>
            <View style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text>Pengguna Anggaran / Kuasa Pengguna Anggaran</Text>
            </View>
            <View fixed style={[styles.mainContentBlock, { flex: 1, textTransform: 'uppercase' }]}>
              <Text style={{ textTransform: 'uppercase', fontSize: 11.5 }} break>KEPALA BADAN PENGELOLAAN KEUANGAN DAN PENDAPATAN DAERAH KABUPATEN MINAHASA TENGGARA</Text>
            </View>
          </View>
          <View style={styles.mainContent}>
            <View style={[styles.mainContentBlock, { flex: 0 }]}>
              <Text>2</Text>
            </View>
            <View style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text>Nama / NIP Pelaksana SPPD</Text>
            </View>
            <View fixed style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text break>{user.name}</Text>
              <Text break>{user.nip}</Text>
            </View>
          </View>
          {/*  */}
          <View style={[styles.mainContent, { borderBottomColor: 'transparent' }]}>
            <View style={[styles.mainContentBlock, { flex: 0, borderBottomColor: 'white', paddingBottom: 0 }]}>
              <Text>3</Text>
            </View>
            <View style={[styles.mainContentBlock, { flex: 1, borderBottomColor: 'white', paddingBottom: 0 }]}>
              <Text break>a. Pangkat / Golongan</Text>
              <Text break>b. Jabatan / Instansi</Text>
            </View>
            <View fixed style={[styles.mainContentBlock, { flex: 1, borderBottomColor: 'white', paddingBottom: 0 }]}>
              {typeof user.rank === 'undefined' ?
                <Text>a. -</Text>
                :
                <Text break>a. {user.rank}</Text>
              }
              <Text style={{ fontSize: 11 }} break>b. {user.role}</Text>
            </View>
          </View>
          <View style={[styles.mainContent, { borderTopColor: 'transparent', marginTop: -3 }]}>
            <View style={[styles.mainContentBlock, { flex: 0, borderTopColor: 'white', paddingTop: 0 }]}>
              <Text style={{ color: 'white' }}>3</Text>
            </View>
            <View style={[styles.mainContentBlock, { flex: 1, borderTopColor: 'white', paddingTop: 0 }]}>
              <Text>c. Tingkat Biaya Perjalanan Dinas</Text>
            </View>
            <View fixed style={[styles.mainContentBlock, { flex: 1, borderTopColor: 'white', paddingTop: 0 }]}>
              <Text break>c.</Text>
            </View>
          </View>
          {/*  */}
          <View style={styles.mainContent}>
            <View style={[styles.mainContentBlock, { flex: 0 }]}>
              <Text>4</Text>
            </View>
            <View style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text>Maksud Perjalanan Dinas</Text>
            </View>
            <View fixed style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text style={{ textAlign: 'justify', fontSize: 10.5 }} break>{report.intention}</Text>
            </View>
          </View>
          {/*  */}
          <View style={styles.mainContent}>
            <View style={[styles.mainContentBlock, { flex: 0 }]}>
              <Text>5</Text>
            </View>
            <View style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text>Moda Transportasi</Text>
            </View>
            <View fixed style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text break>{[...report.transport].join(', ')}</Text>
            </View>
          </View>
          {/*  */}
          <View style={styles.mainContent}>
            <View style={[styles.mainContentBlock, { flex: 0 }]}>
              <Text>6</Text>
            </View>
            <View style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text>a. Tempat Berangkat</Text>
              <Text>b. Tempat Tujuan</Text>
            </View>
            <View fixed style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text break>{!report.go_from ? `Ratahan` : report.go_from}</Text>
              <Text style={{ fontSize: 11 }} break>{report.destination}</Text>
            </View>
          </View>
          {/*  */}
          <View style={styles.mainContent}>
            <View style={[styles.mainContentBlock, { flex: 0 }]}>
              <Text>7</Text>
            </View>
            <View style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text>a. Lama Perjalanan Dinas</Text>
              <Text>b. Tanggal Berangkat</Text>
              <Text>c. Tanggal Harus Kembali/Tiba di Tempat Baru *)</Text>
            </View>
            <View fixed style={[styles.mainContentBlock, { flex: 1 }]}>
              <Text break>{diff} ({terbilang(diff)}) Hari</Text>
              <Text break>{moment(report.start_date).format("DD MMMM YYYY")}</Text>
              <Text break>{moment(report.end_date).format("DD MMMM YYYY")}</Text>
            </View>
          </View>
          {/*  */}
          <View style={styles.mainContent}>
            <View style={[styles.mainContentBlock, { flex: 0 }]}>
              <Text>8</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ borderColor: 'black', borderWidth: 1, paddingVertical: 2, marginVertical: -1, marginHorizontal: -1, paddingLeft: 8 }}>
                <Text>Pengikut : Nama</Text>
              </View>
              <View style={{ padding: 2, margin: -1, borderBottomWidth: 1, borderBottomColor: 'black', marginBottom: 0 }}>
                <Text style={{ marginVertical: 2, marginLeft: 8 }}>1. </Text>
                <Text style={{ marginVertical: 2, marginLeft: 8 }}>2. </Text>
              </View>
            </View>
            <View style={{ borderColor: 'black', borderWidth: 1, flex: 1, flexDirection: 'row', marginTop: -1 }}>
              <View style={{ flex: 1, flexDirection: 'column', }}>
                <View style={{ flex: 0, padding: 2, textAlign: 'center', borderColor: 'black', borderWidth: 1, marginLeft: -1, marginTop: -1, paddingLeft: 8 }}>
                  <Text>Tanggal</Text>
                </View>
                <View style={{ flex: 1, borderColor: 'black', borderWidth: 1, marginLeft: -1, marginTop: -1, marginBottom: -1 }}></View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ flex: 0, padding: 2, textAlign: 'center', borderColor: 'black', borderWidth: 1, marginLeft: -1, marginTop: -1, marginRight: -1 }}>
                  <Text>Keterangan</Text>
                </View>
                <View style={{ flex: 1, borderColor: 'black', borderWidth: 1, marginLeft: -1, marginTop: -1, marginBottom: -1, marginRight: -1 }}></View>
              </View>
            </View>
          </View>
          <View style={styles.mainContent}>
            <View style={[styles.mainContentBlock, { flex: 0 }]}>
              <Text>9</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              {/*  */}
              <View style={{ flex: 1, flexDirection: 'row' }}>
                {/*  */}
                <View style={{ flex: 1, margin: -1, borderRightWidth: 1, borderRightColor: 'black', padding: 2, paddingLeft: 8 }}>
                  <Text>Pembebanan Anggaran</Text>
                </View>
                <View style={{ flex: 1, margin: 0, borderRightWidth: 1, borderRightColor: 'black', padding: 2, paddingLeft: 8 }}>
                  <Text style={{ color: 'black' }}>{report.fee_from}</Text>
                </View>
              </View>
              {/*  */}
              <View style={{ flex: 1, flexDirection: 'row' }}>
                {/*  */}
                <View style={{ flex: 1, margin: -1, borderRightWidth: 1, borderRightColor: 'black', padding: 2, paddingLeft: 8 }}>
                  <Text>a. SKPD/UPTD</Text>
                </View>
                <View style={{ flex: 1, margin: 0, borderRightWidth: 1, borderRightColor: 'black', padding: 2, paddingLeft: 8, fontSize: 11.5 }}>
                  <Text>a. BADAN PENGELOLAAN KEUANGAN DAN PENDAPATAN DAERAH</Text>
                </View>
              </View>
              {/*  */}
              <View style={{ flex: 1, flexDirection: 'row' }}>
                {/*  */}
                <View style={{ flex: 1, margin: -1, borderRightWidth: 1, borderRightColor: 'black', padding: 2, paddingLeft: 8 }}>
                  <Text>b. Nomor DPA/DPPA</Text>
                </View>
                <View style={{ flex: 1, margin: 0, borderRightWidth: 1, borderRightColor: 'black', padding: 2, paddingLeft: 8 }}>
                  <Text>b.</Text>
                </View>
              </View>
              {/*  */}
              <View style={{ flex: 1, flexDirection: 'row', height: 35 }}>
                {/*  */}
                <View style={{ flex: 1, margin: -1, borderRightWidth: 1, borderRightColor: 'black', padding: 2, paddingLeft: 8 }}>
                  <Text>c. Nama Kegiatan</Text>
                </View>
                <View style={{ flex: 1, margin: 0, borderRightWidth: 1, borderRightColor: 'black', padding: 2, paddingLeft: 8 }}>
                  <Text>c.</Text>
                </View>
              </View>
              {/*  */}
              <View style={{ flex: 1, flexDirection: 'row' }}>
                {/*  */}
                <View style={{ flex: 1, margin: -1, borderRightWidth: 1, borderRightColor: 'black', padding: 2, paddingLeft: 8, borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 0 }}>
                  <Text>d. Kode Rekening</Text>
                </View>
                <View style={{ flex: 1, margin: 0, borderRightWidth: 1, borderRightColor: 'black', padding: 2, paddingLeft: 8, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                  <Text>d.</Text>
                </View>
              </View>
            </View>
          </View>
          {/*  */}
          <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'stretch', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <View style={{ flex: 0, marginTop: 15, flexDirection: 'column', width: 270 }}>
              <View style={{ flex: 0, alignItems: 'flex-start', borderBottomColor: 'black', borderBottomWidth: 0.5, marginBottom: 8, paddingBottom: 2 }}>
                <Text>Dikeluarkan di : Ratahan</Text>
                <Text>Tanggal        : </Text>
              </View>
              <View style={{ flex: 0, alignItems: 'center', }}>
                <Text style={{ fontSize: 11.5, fontWeight: 'bold' }}>a.n {'Bupati Minahasa Tenggara'.toUpperCase()}</Text>
                <Text break style={{ textTransform: 'uppercase', fontSize: 11.5, fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
                  KEPALA BADAN
                </Text>
                <Text style={{ fontSize: 11.5, fontWeight: 'bold' }}>KABUPATEN MINAHASA TENGGARA</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', textDecoration: 'underline', marginTop: 40, }}>MECKY R. T. TUMIMOMOR, SE, MSi</Text>
                <Text style={{ fontSize: 11, fontWeight: 'bold', }}>Pembina Utama Muda/IV/c</Text>
                <Text style={{ fontSize: 11, fontWeight: 'bold', }}>NIP. 196603281994031005</Text>
              </View>
            </View>
          </View>
          {/*  */}
        </View>
      </Page>
    </>
  )
}
