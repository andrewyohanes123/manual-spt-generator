import React from 'react'
import { Form, Input, InputNumber, Col, Row, Card, Typography, Button, DatePicker, Select, Tooltip } from 'antd'
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'

const { Item, List } = Form;
export const SPTForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  return (
    <>
      <Form layout="vertical" onFinish={onSubmit} form={form}>
        <Row gutter={[32, 32]}>
          <Col md={12}>
            <Typography.Title level={4}>Pengikut</Typography.Title>
            <List name="users">
              {(users, { add, remove }) => (
                <>
                  <Tooltip title="Tambah Pengikut" placement="bottomLeft">
                    <Button size="small" icon={<PlusCircleOutlined />} onClick={() => add()}></Button>
                  </Tooltip>
                  {users.map((user, i) => (
                    <Card style={{ margin: '10px 0' }} {...user} extra={<Button danger type="primary" onClick={() => remove(user.name)} size="small" icon={<DeleteOutlined />} />} key={i} size="small">
                      <Item fieldKey={[user.fieldKey, 'name']} name={[user.name, "name"]} hasFeedback label="Nama" rules={[{ required: true, message: 'Masukkan nama pegawai' }]}>
                        <Input placeholder="Nama" />
                      </Item>
                      <Item name={[user.name, "nip"]} fieldKey={[user.fieldKey, 'nip']} hasFeedback label="NIP" rules={[{ type: 'integer', message: 'Masukkan NIP yang valid' }]}>
                        <InputNumber placeholder="Masukkan NIP" style={{ width: '100%' }} />
                      </Item>
                      <Item fieldKey={[user.fieldKey, 'role']} name={[user.name, "role"]} hasFeedback label="Jabatan" rules={[{ required: true, message: 'Masukkan jabatan' }]}>
                        <Input placeholder="Jabatan" />
                      </Item>
                      <Item name={[user.name, "rank"]} fieldKey={[user.fieldKey, 'nip']} hasFeedback label="Pangkat/Golongan/Ruang">
                        <Input placeholder="Pangkat/Golongan/Ruang" />
                      </Item>
                    </Card>
                  ))}
                </>
              )}
            </List>
          </Col>
          <Col md={12}>
            <Item name="skpd" hasFeedback label="SKPD" rules={[{ required: true, message: 'Masukkan Nama SKPD' }]}>
              <Input placeholder="Nama SKPD" />
            </Item>
            <Item name="type" hasFeedback label="Tipe Surat" rules={[{ required: true, message: 'Pilih Tipe Surat' }]}>
              <Select placeholder="Pilih Tipe Surat">
                <Select.Option value={2}>Luar Daerah, Dalam Provinsi</Select.Option>
                <Select.Option value={3}>Dalam Daerah</Select.Option>
              </Select>
            </Item>
            <Item name="transport" hasFeedback label="Moda Transportasi" rules={[{ required: true, message: 'Pilih Moda Transportasi' }]}>
              <Select mode="multiple" placeholder="Pilih Moda Transportasi">
                <Select.Option value="Angkutan Darat">Angkutan Darat</Select.Option>
                <Select.Option value="Angkutan Laut">Angkutan Laut</Select.Option>
                <Select.Option value="Angkutan Udara">Angkutan Udara</Select.Option>
              </Select>
            </Item>
            <Item name="go_from" hasFeedback label="Tempat Berangkat" rules={[{ required: true, message: 'Masukkan Tempat Keberangkatan' }]}>
              <Input placeholder="Tempat Berangkat" />
            </Item>
            <Item name="destination" hasFeedback label="Tempat Tujuan" rules={[{ required: true, message: 'Masukkan Tempat Tujuan' }]}>
              <Input placeholder="Tempat Tujuan" />
            </Item>
            <Item name="intention" hasFeedback label="Maksud Perjalanan Dinas" rules={[{ required: true, message: 'Masukkan Maksud Perjalanan Dinas' }]}>
              <Input.TextArea rows={5} placeholder="Maksud Perjalanan Dinas" />
            </Item>
            <Item name="start_date" hasFeedback label="Tanggal Berangkat" rules={[{ required: true, message: 'Pilih Tanggal Keberangkatan' }]}>
              <DatePicker placeholder="Tanggal Keberangkatan" style={{ width: '100%' }} />
            </Item>
            <Item name="end_date" hasFeedback label="Tanggal Tiba/Kembali" rules={[{ required: true, message: 'Pilih Tanggal Tiba/Kembali' }]}>
              <DatePicker placeholder="Tanggal Tiba/Kembali" style={{ width: '100%' }} />
            </Item>
            <Item name="fee_from" hasFeedback label="Detail Pembebanan Anggaran" rules={[{ required: true, message: 'Masukkan Detail Pembebanan Anggaran' }]}>
              <Input placeholder="Masukkan Detail Pembebanan Anggaran" />
            </Item>
          </Col>
          <Col md={24}>
            <Button type="primary" htmlType="submit" block>Buat SPT &amp; SPPD</Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
