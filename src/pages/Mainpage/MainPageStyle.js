import styled from 'styled-components';
import LogoImg from './../../assets/logo.jpeg'
import Image1 from './../../assets/newyork.jpg'
import Image2 from './../../assets/paris.jpg'
import Image3 from './../../assets/tokyo.jpg'

export const Container=styled.div`
    position: absolute;
  top:0;
  left:0;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const Header=styled.div`
  padding-top:10px;
  height:100px;
  margin-right:150px;
  margin-left:150px;
`;
export const Content=styled.div`
  height:fit-content;
`;
export const Footer=styled.div`
  height:150px;
  width: 100%;
  background-color: black;
  color: white;
`;
export const TopHeader=styled.div`
  height:25px;
  margin-right:50px;
  margin-top:10px;
  font-size:15px;
`;
export const Menu=styled.div`
  height:75px;
`;
export const SM1=styled.div`
  width: fit-content;
  border-right: 1px solid black;
  float:right;
  padding-right:15px;
  margin-right:15px;
  &:hover{
    color:red;
    font-weight: bolder;
    cursor: pointer;
  }
`;
export const Logo=styled.div`
    background-image:url(${LogoImg});
  background-size:cover;
  margin-top:-10px;
  margin-right: 30px;
  width:250px;
  height: 75px;
  float:left;
  &:hover{
    cursor:pointer;
  }
`;
export const M1=styled.div`
  z-index: 0;
  float:left;
  margin-right:30px;
  margin-left:30px;
  font-size: 20px;
  font-weight: bolder;
  padding-top:20px;
  &:hover{
    cursor:pointer;
  }
`;
export const Slide=styled.div`
  height: 1100px;
`;
export const ITM1=styled.div`
  z-index:-5;
  animation: ${({imgNum}) => (imgNum === 0 ? "fadein 3s" : "")};
  display: ${({imgNum}) => (imgNum !== 0 ? "none" : "")};
  background-image:url(${Image1});
  background-size:contain;
  background-repeat: no-repeat;
  object-fit: contain;
  height: 100%;
  width: 200%;
  @keyframes fadein {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
`;
export const ITM2=styled.div`
  z-index:-5;
  animation: ${({imgNum}) => (imgNum === 1 ? "fadein 3s" : "")};
  display: ${({imgNum}) => (imgNum !== 1 ? "none" : "")};
  background-image:url(${Image2});
  background-size:contain;
  background-repeat: no-repeat;
  object-fit: contain;
  height: 100%;
  width: 200%;
  @keyframes fadein {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
`;
export const ITM3=styled.div`
  z-index:-5;
  animation: ${({imgNum}) => (imgNum === 2 ? "fadein 3s" : "")};
  display: ${({imgNum}) => (imgNum !== 2 ? "none" : "")};
  background-image:url(${Image3});
  background-size:contain;
  background-repeat: no-repeat;
  object-fit: contain;
  height: 100%;
  width: 200%;
  @keyframes fadein {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Booking=styled.div`
  position: absolute;
  z-index: 5;
  margin-left:15%;
  margin-top:10%;
  background-color: white;
  height:500px;
  width: 1000px;
  opacity: 0.5;
  border-radius: 10px;
`;
export const Menu2=styled.div`
  padding-top:20px;
  font-size:30px;
  padding-left:30px;
`;
export const M2=styled.div`
  text-align: center;
  padding-top:13px;
  float:left;
  border:1px solid black;
  border-radius: 5px;
  margin-left:10px;
  height: 50px;
  width:250px;
  font-weight: bolder;
  &:hover{
    cursor:pointer;
    color:red;
  }
`;

export const style={
    Container,Header,Content,Footer,TopHeader,Menu,SM1,Logo,M1,Slide,ITM1,ITM2,ITM3,Booking,Menu2,M2,
};
