import React, { useEffect } from "react";
import "../styles/intro.css";
import Logo from "../assets3/logo.svg";
import { AiOutlineGlobal } from "react-icons/ai";
import { Box } from "../components/Box";
import Jumbo from "../data/jumbo.json";
import { Faq } from "../components/Faq";
import FAQ from "../data/faq.json";
import { useNavigate } from "react-router-dom";
import { GetStartedBox } from "../components/GetStartedBox";

function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const btn = document.querySelectorAll("#barBtn");
    const detail = document.querySelectorAll(".detail");

    btn.forEach((item, itemIndex) => {
      item.addEventListener("click", () => {
        detail.forEach((de, deIndex) => {
          if (itemIndex === deIndex) {
            de.classList.toggle("active");
          }
        });
      });
    });
  });

  return (
    <>
      <header className="introHeader">
        <div className="headerNav">
          <div className="headerWrapper">
            <img src={Logo} alt="logo" className="logo" />
            <div className="buttonContainer">
              <button>
                <AiOutlineGlobal /> English
              </button>
              <button onClick={() => navigate("/login")}>Sign In</button>
            </div>
          </div>
        </div>

        <div className="titles">
          <p className="title">
            Unlimited movies, TV <br /> shows and more.
          </p>
          <p className="subtitle">Watch anywhere. Cancel anytime.</p>
          <p className="bottomTitle">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <GetStartedBox />
      </header>
      <hr id="hr" />
      <main id="introMain">
        {Jumbo.map((item) => (
          <Box
            id={item.id}
            title={item.title}
            desc={item.subTitle}
            image={item.image}
          />
        ))}

        <hr id="hr" />
        <div className="faqSection">
          <h4 className="faqTitle">Frequently Asked Questions</h4>
          <div className="faqContainer">
            {FAQ.map((item) => (
              <Faq key={item.id} title={item.header} desc={item.body} />
            ))}
          </div>
        </div>
        <div className="boxContainer">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <GetStartedBox />
        </div>
      </main>
    </>
  );
}

export default Intro;
