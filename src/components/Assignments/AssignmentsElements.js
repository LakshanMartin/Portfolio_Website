import styled from "styled-components";

export const AssignmentsContainer = styled.div`
  height: auto; //1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 60px 0px;

  @media screen and (max-width: 768px) {
    height: auto; //1550px;
    padding-top: 100px;
  }

  @media screen and (max-width: 480px) {
    height: auto; //1600px;
    padding-top: 150px;
  }
`;

export const AssignmentsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const AssignmentsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 450px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const AssignmentsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const AssignmentsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AssignmentsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const AssignmentsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
