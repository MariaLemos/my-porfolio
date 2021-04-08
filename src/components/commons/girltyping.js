import styled from "styled-components";
import { FaCode } from "react-icons/fa";
const GirlTyping = () => {
  return (
    <Scene>
      <Hair>
        <div className="hair">
          <div className="head">
            <div className="hair3"></div>
          </div>
        </div>
        <div className="hair hair2">
          <div className="neck"></div>
        </div>
      </Hair>
      <ArmRight>
        <div className="parte1"></div>
        <div className="parte2"></div>
      </ArmRight>
      <Body>
        <div className="body"></div>
        <Note>
          {" "}
          <FaCode />
        </Note>
      </Body>

      <ArmLeft>
        <div className="parte1"></div>
        <div className="parte2"></div>
      </ArmLeft>
    </Scene>
  );
};
const Scene = styled.div`
  display: grid;
  width: 200px;
  height: 170px;
  margin: 0 auto;
  grid-template-areas:
    "head head head"
    "armright body armleft";
  grid-template-columns: 50px 100px 50px;
  --haircolor: #222;
  --skincolor: pink;
  --shirtcolor: #9844b7;
`;

const Hair = styled.div`
  grid-area: head;
  margin: auto;
  .hair {
    background-color: var(--haircolor);
    height: 80px;
    width: 70px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    display: flex;
  }
  .hair2 {
    height: 20px;
    margin-top: -12px;
    margin-bottom: -5px;
    border-radius: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .hair3 {
    background-color: var(--haircolor);
    height: 15px;
    width: 50px;
    border-bottom-right-radius: 15px;
  }
  .head {
    background-color: var(--skincolor);
    height: 60px;
    width: 50px;
    border-radius: 40px;
    margin: 10px auto;
    box-sizing: border-box;
  }
  .neck {
    background-color: var(--skincolor);
    height: 20px;
    width: 18px;
    margin: auto;
    z-index: 2;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    position: relative;
  }
`;
const Arm = styled.div`
  position: relative;
  z-index: 1;
  .parte1,
  .parte2 {
    width: 18px;
  }
  .parte1 {
    background-color: var(--shirtcolor);
    height: 60px;
  }
  .parte2 {
    background-color: var(--skincolor);
    border-radius: 10px;
    height: 45px;
    position: relative;
    top: -25px;
  }
`;
const Body = styled.div`
  grid-area: body;

  .body {
    height: 15px;
    width: 90px;
    border-radius: 10px;
    margin: auto;
    background: var(--shirtcolor);
  }
`;
const ArmLeft = styled(Arm)`
  grid-area: armleft;
  right: 15%;
  .parte1 {
    transform: rotate(-36deg);
  }
  .parte2 {
    transform: rotate(60deg);
    right: -5px;
    animation: typingleft 2s linear infinite;
  }
  @keyframes typingleft {
    0% {
      transform: rotate(70deg);
    }
    50% {
      transform: rotate(50deg);
    }
    100% {
      transform: rotate(70deg);
    }
  }
`;
const ArmRight = styled(Arm)`
  grid-area: armright;
  right: -75%;
  .parte1 {
    transform: rotate(36deg);
  }
  .parte2 {
    transform: rotate(-60deg);
    right: 5px;
    animation: typingright 2s linear infinite;
  }
  @keyframes typingright {
    0% {
      transform: rotate(-70deg);
    }
    50% {
      transform: rotate(-50deg);
    }
    100% {
      transform: rotate(-70deg);
    }
  }
`;
const Note = styled.div`
  width: 100px;
  height: 70px;
  background-color: #c6c6c6;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
`;
export default GirlTyping;
