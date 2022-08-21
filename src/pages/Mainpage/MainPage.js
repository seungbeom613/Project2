import React, {useEffect, useState} from 'react';
import { style } from './MainPageStyle';
import { GoCalendar } from "react-icons/go";
import { IoAirplaneSharp } from "react-icons/io5";

export const MainPage=()=>{
    const [imgNum,setImgNum]=useState(0);
    function showImage(){
        setImgNum(imgNum+1);
        console.log(imgNum);
    }
    useEffect(()=>{
        if(imgNum===3) {
            setImgNum(0);
        }
        setTimeout(showImage,10000);
    })
    return(
            <Container>
                <Header>
                    <TopHeader>
                        <SM1>이벤트</SM1>
                        <SM1>로그인</SM1>
                    </TopHeader>
                    <Menu>
                        <Logo/>
                        <M1>예약</M1>
                        <M1>기능</M1>
                    </Menu>
                </Header>
                <Content>
                    <Booking>
                        <Menu2>
                            <M2> <IoAirplaneSharp/> 항공권 예약</M2>
                            <M2> <GoCalendar/> 예약 조회</M2>
                        </Menu2>
                    </Booking>
                    <Slide>
                        <ITM1 imgNum={imgNum}/>
                        <ITM2 imgNum={imgNum}/>
                        <ITM3 imgNum={imgNum}/>
                    </Slide>
                </Content>
                <Footer>
                    COPYRIGHT @ASIANA IDT
                </Footer>
            </Container>
    );
};
const {Container,Header,Content,Footer,TopHeader,Menu,SM1,Logo,M1,Slide,ITM1,ITM2,ITM3,Booking,Menu2,M2}=style;
