import React, { useState } from 'react'
import cardsObj from '../../../utils/cardObjects/new';
import { Container } from './style';
import "./stylesheet.css"
import { ReactComponent as Clock } from "../../icons/clock.svg"
import { ReactComponent as Remark } from "../../icons/Remark.svg"
import { ReactComponent as User } from "../../icons/user.svg"
import { ReactComponent as X } from "../../icons/x.svg"

const Card = () => {
    const [card, setCard] = useState(cardsObj)
    return (
        <Container>
            <Container.col1>
                <div style={{
                    display: "flex",
                    flexDirection: "row",

                    alignItems: "center",

                }}>
                    <p style={{
                        marginRight: '12px',
                        opacity: "70%"
                    }}>Yangi</p>
                    <div style={{
                        width: "30px",
                        height: "20px",
                        backgroundColor: 'white',
                        borderRadius: "4px",
                        display: 'flex',
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <p style={{
                            opacity: "70%",
                        }}>{card.length}</p>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "234px",
                    height: "50px",
                    backgroundColor: "white",
                    borderRadius: "6px",

                }}>
                    <div className='bigCircle'></div>
                    <p style={{ fontWeight: "700" }}>1,123,000 KRW</p>
                </div>
                {card.map((value) => (
                    <div key={value.id} style={{
                        width: "234px",
                        height: "345px",
                        backgroundColor: "white",
                        marginTop: "8px",
                        borderRadius: "6px",

                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            padding: "0",
                            marginBottom: "18px"
                        }}>

                            <div className='ordnum' style={{ width: "60px", height: "30px" }}>{value.orderNum}</div>
                            <div className='remark' style={{
                                marginTop: "18px",
                                marginLeft: "10px",
                                marginRight: "0",
                                width: "30px",
                                height: "30px"
                            }}><Remark /></div>
                            <div style={{
                                marginLeft: "40px",
                                marginTop: "25px",
                                display: "flex",
                                alignItems: "center"
                            }}><Clock /><p style={{
                                margin: "0",
                                marginLeft: "8px"
                            }}>{value.time}</p></div>
                        </div>
                        <div style={{
                            borderTop: "1px solid rgb(172, 170, 170)",
                            borderBottom: "1px solid rgb(172, 170, 170)",
                            margin: "0 auto",
                            width: "202px",

                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <div style={{
                                    display: 'flex'
                                }}>
                                    <User style={{ marginTop: "19px" }} />
                                    <div style={{
                                        marginTop: "19px",
                                        marginLeft: "22px"
                                    }}>{value.customer}</div>

                                </div>

                            </div>

                            <p style={{
                                marginTop: "5px",
                                marginLeft: "33px",
                                opacity: "70%",
                                fontSize: "12px"
                            }}>{value.phoneNum}</p>

                            <div style={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <p style={{
                                    margin: "0",
                                    fontSize: "11px"
                                }}>Total amount:</p>
                                <div className='littleCircle' style={{
                                    margin: "0",
                                    marginLeft: "61px",
                                    marginRight: "8px"
                                }}></div>
                                <p style={{ margin: "0" }}>{value.paymentType}</p>
                            </div>
                            <p style={{
                                margin: "0",
                                fontWeight: "700",
                                marginBottom: "18px"
                            }}>{value.total}</p>
                            <div>
                                <div>
                                    <p>Operator</p>
                                    <p>{value.operator}</p>
                                </div>
                                <div className='x' ><X /></div>

                            </div>
                        </div>
                    </div>
                ))}
            </Container.col1>
            <Container.col2><div style={{
                display: "flex",
                flexDirection: "row",

                alignItems: "center"
            }}>
                <p style={{

                    marginRight: '12px',
                    opacity: "70%"
                }}>Yangi</p>
                <div style={{
                    width: "30px",
                    height: "20px",
                    backgroundColor: 'white',
                    borderRadius: "4px",
                    display: 'flex',
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <p style={{
                        opacity: "70%",
                    }}>{card.length}</p>
                </div>
            </div></Container.col2>
            <Container.col3><div style={{
                display: "flex",
                flexDirection: "row",

                alignItems: "center"
            }}>
                <p style={{

                    marginRight: '12px',
                    opacity: "70%"
                }}>Yangi</p>
                <div style={{
                    width: "30px",
                    height: "20px",
                    backgroundColor: 'white',
                    borderRadius: "4px",
                    display: 'flex',
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <p style={{
                        opacity: "70%",

                    }}>{card.length}</p>
                </div>
            </div></Container.col3>
            <Container.col4><div style={{
                display: "flex",
                flexDirection: "row",

                alignItems: "center"
            }}>
                <p style={{

                    marginRight: '12px',
                    opacity: "70%"
                }}>Yangi</p>
                <div style={{
                    width: "30px",
                    height: "20px",
                    backgroundColor: 'white',
                    borderRadius: "4px",
                    display: 'flex',
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',


                }}>

                    <p style={{
                        opacity: "70%",

                    }}>{card.length}</p>
                </div>
            </div></Container.col4>
        </Container>
    )
}
export default Card;