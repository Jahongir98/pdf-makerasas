import {Button, Col, DatePicker, Form, Input, Row} from "antd";
import axios from "axios";
import dayjs from "dayjs";


const UserCreate = () => {

    const [form] = Form.useForm()

    const submitData = async (values) => {

        try{
            console.log("values-> ", values, dayjs(values.date).format("YYYY-MM-DD"))
            // const response = await axios({
            //     url:`http://localhost:8080/api/create_certificate`,
            //     method:'POST',
            //     data: JSON.stringify(fields),
            //     headers: {
            //         "Content-Type": 'application/json'
            //     }
            // });

            // console.log("post data -> ", response)

        }catch(error){

        }
    }

    return (
        <div>
            <Form
                form={form}
                layout={"vertical"}
                onFinish={submitData}
            >
                <Row gutter={[12, 12]} >
                    <Col xl={8}>
                        <Form.Item name={"author"} label={"F.I.SH"}>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xl={8}>
                        <Form.Item name={"speciality"} label={"Mutaxasisligi"}>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xl={8}>
                        <Form.Item name={"date"} label={"Hujjat sanasi"}>
                            <DatePicker style={{width:'100%'}} />
                        </Form.Item>
                    </Col>
                </Row>
                <Button type={"primary"} htmlType={"submit"}>Saqlash</Button>
            </Form>
        </div>
    )

}

export default  UserCreate;