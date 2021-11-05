import React, { Component } from 'react'
import { newObj } from '../../utils/OrdersNewObj'
import { Container } from './Styled'
import "./orders.css"
import { ReactComponent as Clock } from "../icons/clock.svg"
import { ReactComponent as Remark } from "../icons/Remark.svg"
import { ReactComponent as User } from "../icons/user.svg"
import { ReactComponent as Telephone } from "../icons/telephone.svg"
import { ReactComponent as Vector } from "../icons/Vector.svg"
import { ReactComponent as Truck } from "../icons/truck.svg"
import { ReactComponent as X } from "../icons/x.svg"
import { ReactComponent as Tick } from "../icons/tick.svg"


export default class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: newObj,
        }
    }
    render() {

        return (
            <>
                {this.state.data.map((value) => (
                    <Container >
                        <Container.one>
                            <Container.one.colone className='col1'>
                                <div>
                                    <div className='ordnum'>{value.orderNum}</div>
                                    <div className='time'><Clock /><p style={{
                                        fontSize: "22px",

                                        lineHeight: "16px",
                                        marginBottom: "0",
                                        marginLeft: "12px",
                                        // marginTop: "0"
                                    }}>{value.time}</p></div>
                                </div>
                                <div className='remark'><Remark /></div>

                            </Container.one.colone>
                        </Container.one>
                        <Container.two>
                            <Container.two.rowone>
                                <User />
                                <p style={{
                                    margin: "0",
                                    marginLeft: "18.78px",
                                    width: "30px",

                                    fontSize: "20px",
                                    lineHeight: "20px",
                                    letterSpacing: "0.6666666865348816px",
                                    textAlign: "left"

                                }}>{value.customer}</p>
                            </Container.two.rowone>
                            <Container.two.rowtwo>
                                <Telephone className="telephone" />
                                <p style={{
                                    margin: "0",
                                    marginLeft: "18.78px",
                                    width: "30px",

                                    fontSize: "20px",
                                    lineHeight: "20px",
                                    letterSpacing: "0.6666666865348816px",
                                    textAlign: "left"
                                }}>{value.phoneNum}</p>
                            </Container.two.rowtwo>
                        </Container.two>
                        <Container.three>

                            <div>
                                <div style={{
                                    display: "flex",
                                    marginTop: '24px',
                                    marginLeft: "35px"
                                }}><Vector style={{
                                    opacity: "50%",
                                    width: "13px",
                                    height: "15px"
                                }} /> <p className='costs'>{value.cost}</p> </div>
                                <div style={{
                                    display: "flex",
                                    marginTop: '19px',
                                    marginLeft: "35px"
                                }}><Truck style={{
                                    opacity: "50%",
                                    width: "16px",
                                    height: "16px"
                                }} /> <p className='costs'>{value.deliveringCost}</p> </div>
                                <p className='totalAmount'>Total amount</p>
                                <div className='total'>{value.total}</div>
                            </div>
                            <div style={{
                                display: "flex",
                                margin: "0",
                                marginTop: "26px",
                                marginLeft: "16px",
                                height: "fit-content",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <div className='littleCircle'></div>
                                <p className='payment'>{value.paymentType}</p>
                            </div>
                        </Container.three>
                        <Container.four>

                            <div style={{}}>
                                <p style={{
                                    fontSize: "11px",
                                    lineHeight: "18px",
                                    letterSpacing: "0.36666667461395264px",
                                    textAlign: "left",
                                    marginTop: "22px",
                                    marginLeft: "35px",
                                    marginBottom: "0"
                                }}>Operator:</p>
                                <p style={{
                                    fontSize: "14px",
                                    lineHeight: "18px",
                                    letterSpacing: "0.36666667461395264px",
                                    textAlign: "left",
                                    marginTop: "1px",
                                    marginLeft: "35px",
                                    fontWeight: "600"
                                }}>{value.operator}</p>
                                <p style={{
                                    fontSize: "11px",
                                    lineHeight: "18px",
                                    letterSpacing: "0.36666667461395264px",
                                    textAlign: "left",
                                    marginTop: "22px",
                                    marginLeft: "35px",
                                    marginBottom: "0"
                                }}>Branch:</p>
                                <p className='branch'>Fast Food {value.branch}</p>
                            </div>
                            <div className='x'><X /></div>
                            <div className='tick'><Tick /></div>
                        </Container.four>

                    </Container>
                ))
                }
            </>
        )
    }
}
