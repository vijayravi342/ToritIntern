import React, { Component } from 'react'
import { Menudata } from './menuData';
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import DoneIcon from '@material-ui/icons/Done';



const CardContainer = styled.div`
margin-top: 10px;
margin-left: 10px;
overflow: hidden;
width: 100%;
max-width: 1500px;
height: 250px;
display: grid;
align-items: center;
justify-content: center;
@media screen and (max-width: 768px){
    width: 680px;
    padding: 0.5rem calc((100vw-1200px)/2);
    transform: translate(2%,0%);
}


`
const CardTitle = styled.p`
margin-right: 400px;
@media screen and (max-width: 768px){
    
    width: 100px;
    font-size: 16px;
    font-weight: 600;

 }
`
const CardTechnology = styled.p`
@media screen and (max-width: 768px){
    margin-top: -5px;
    width: 100px;
    font-size: 13px;
    font-weight: 500;

 }
`
const CardProgress = styled.p`
margin-left: -100px;
@media screen and (max-width: 768px){
    
    font-size: 12px;
    font-weight: 600;

 }
`
const CardDate = styled.p`
margin-left: 20px;
@media screen and (max-width: 768px){
    
    font-size: 12px;
    font-weight: 600;

 }
`
const CardDue = styled.p`
margin-left: 100px;
@media screen and (max-width: 768px){
    margin-left: 60px;
    font-size: 12px;
    font-weight: 600;

 }
`
const CardName = styled.p`
margin-right: 100px;
@media screen and (max-width: 768px){
    
    font-size: 12px;
    font-weight: 600;

 }

`
const CardNumber = styled.p`
margin-top: 10px;
color: #999999;
@media screen and (max-width: 768px){
    
    font-size: 12px;
    font-weight: 600;

 }
`
const CardEmail = styled.p`
margin-top: 10px;
margin-left: 20px;
color: #999999;
@media screen and (max-width: 768px){
    
    font-size: 12px;
    font-weight: 600;

 }
`
const CardTotal = styled.p`
@media screen and (max-width: 768px){
    
    font-size: 12px;
    font-weight: 600;

 }
`
const CardPaid = styled.p`
color: rgba(0,128,0,0.8);
@media screen and (max-width: 768px){
    
    font-size: 12px;
    font-weight: 600;

 }
`
const Map = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px){
    padding: 0.5rem calc((100vw-1200px)/2);
    font-size: 12px;
    font-weight: 600;
    margin-left: -60px;
  }
  
    
    

 
`
const Pro = styled.div`
width: 200px;
  margin-left: -30px;
  margin-right: 60px;
  @media screen and (max-width: 768px){
    margin-left: 260px;
    margin-top: -100px;
    width: 100px;
    transform: translate(60%,-10%);

 }
`
const CardDetails = styled.div`
display: grid;
  grid-template-columns: 1fr  ;
`
const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 130px;
  @media screen and (max-width: 768px){
    display: grid;
    margin-left: 100px;
    transform: translate(-16%,-14%);
 }
`
const Progress = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
      margin-left: -270px;
      transform: translate(1%, -20%);
  }
`
const DetailsSection = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 700px;
  height: 100px;
  @media screen and (max-width: 768px){
    width: 580px;
    margin-left: -90px;
    height: 90px;
 }
  
`
const DetailSection = styled.div`
align-items: center;
  display: grid;
  justify-content: center;
  width: 400px;
  @media screen and (max-width: 768px){
    width: 200px;
    margin-left: -10px;
    margin-right: 50px;
 }
`
const Details = styled.div`
display: flex;
`
const DetilSection = styled.div`
align-items: center;
  display: grid;
  border-left: 2px solid #b3b3b3;
  justify-content: center;
  width: 300px;
  height: 90px;

  @media screen and (max-width: 768px){
    width: 150px;
 }

`
const TotalSection = styled.div`
 margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;

@media screen and (max-width: 768px){
   margin-left: 100px;
   margin-top: 7px;
 }

`
const TotalsSection = styled.div`
 margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;

@media screen and (max-width: 768px){
   margin-left: 100px;
   margin-top: -15px;
 }

`
const Mil = styled.label`
 margin-left: 40px;
 @media screen and (max-width: 768px){
     margin-left: -50px;
 }
`
const Due = styled.label`
 text-align-last: center;
  margin-left: 40px;
  width: 40px;
  height: 25px;
  background-color: coral;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: white;

  @media screen and (max-width: 768px){
      margin-left: 10px;
      font-size: 10px;
      font-weight: 600;
      width: 25px;
      height: 18px
  }
`

class Cards extends Component {
  state = {
    selected: false,
    notSelected: '',
  }
 



  render() {
    const { selected, notSelected} = this.state;
    return (
      <>

        {Menudata.map((items, index) => (
          <CardContainer onClick={() => { this.setState({ selected: !selected, notSelected: index }) }} style={{ background: selected === false && notSelected===index ? '#fff5e6' : 'white' }} >
            <Map>
              <div>
                <Pro>
                  <CircularProgressbar value={items.ProgressPercentage} text={`${items.ProgressPercentage}%`} styles={buildStyles({
                    rotation: 0,
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `${items.ProgressPercentage < 100 ? 'rgba(255, 165, 0)' : 'rgba(0,128,0)'}`,
                    //   pathColor: `rgba(255, 165, 0, ${items.ProgressPercentage / 100})`,
                    textColor: '#000',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} /></Pro>
              </div>
              <CardDetails>
                <div  >
                  <CardTop>
                    <CardTitle key={index}>{items.Title}</CardTitle>
                    <CardTechnology key={index}>{items.Technology}</CardTechnology>
                  </CardTop>
                  <Progress>
                    <CardProgress style={{
                      color: `${items.ProgressPercentage < 100 ? 'rgba(255, 165, 0)' : 'rgba(0,128,0)'}`,
                      margin: `${items.ProgressPercentage < 100 ? ' 0 110px 0px 0px' : '0 280px 0px 0'}`
                    }}>{`${items.ProgressPercentage < 100 ? `${items.Progress}` : 'Completed'}`}
                    </CardProgress>

                    <Mil>{`${items.ProgressPercentage < 100 ? 'Next Milestone Date :' : ''}`}</Mil>
                    <CardDate>{`${items.ProgressPercentage < 100 ? ` ${items.Milestone} ` : ''}`}</CardDate>


                    <CardDue style={{ color: `${items.ProgressPercentage < 100 ? 'rgba(255, 165, 0)' : 'rgba(0,128,0)'}` }}>{items.Due}</CardDue>

                    <Due style={{ background: `${items.ProgressPercentage < 100 ? 'rgba(255, 165, 0)' : 'rgba(0,128,0)'}` }}>{`${items.ProgressPercentage < 100 ? 'Due' : `Paid`}`}</Due>
                  </Progress>
                </div>
                <div>

                  <DetailsSection onClick={() => { this.setState({ selected: !selected, notSelected: index }) }} style={{ background: selected === false && notSelected===index ? 'white' : 'f2f2f2' }} >
                    <DetailSection>
                      <CardName>{items.Name}</CardName>
                      <Details>
                        <CardNumber>{items.PhoneNumber}</CardNumber>
                        <CardEmail>{items.Email}</CardEmail>
                      </Details>
                    </DetailSection>
                    <DetilSection>
                      <TotalSection>
                        <label className="total">Total cost :</label>
                        <CardTotal>{items.Total}</CardTotal>
                      </TotalSection>
                      <TotalsSection>
                        <label className="total" style={{ color: ' rgba(0,128,0,0.8)' }}>Total Paid :</label>
                        <CardPaid>{items.Paid}</CardPaid>
                      </TotalsSection>
                    </DetilSection>
                  </DetailsSection>
                </div>
              </CardDetails>
            </Map>
          </CardContainer>
        ))}



      </>
    )
  }
}

export default Cards;
