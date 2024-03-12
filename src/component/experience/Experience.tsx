import React from "react";
import "./Experience.scss";
import { Tabs, Timeline } from "antd";
import { DownCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import UseRespon from "../../hook/useRessponsive";
const items = [
  {
    key: "1",
    label: "Study Process",
    children: (
      <div>
        <Timeline
        className="timeline"
          mode="alternate"
          items={[
            {
                dot: (
                    <DownCircleOutlined
                      style={{ fontSize: "26px", color: "rgba(161, 173, 213, 0.833)" }}
                    />
                  ),
              children: (
                <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                 className="timeline__content">
                    <a href="https://github.com/Vinh364676/watchstore">
                    <h3 className="timeline__content__technology">Html Css PhP</h3>
                  <h4 className="timeline__content__project">Watch store management website</h4>
                  <p className="timeline__content__date">January 2022 – April 2022</p>
                  <span className="timeline__content__text">
                    This watch store website, built with HTML, CSS, and PHP,
                    offers a seamless online shopping experience. It allows easy
                    product management for administrators and ensures efficient
                    order processing for customers.
                  </span>
                    </a>
                  
                </div>
              ),
              
            },
            {
              children: (
                <div className="timeline__content" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                    <a href="https://github.com/Vinh364676/watch-store">
                    <h3 className="timeline__content__technology">Reactjs and DocNet</h3>
                  <h4 className="timeline__content__project">Smartphone store management website</h4>
                  <p className="timeline__content__date">December 2022 – February 2023</p>
                  <span className="timeline__content__text">
                    The ReactJS website selling phones uses DocNet to call the
                    backend API, ensuring a smooth and consistent shopping
                    experience. API calls are mainly related to product and
                    order management, and online payments.
                  </span>
                    </a>
                 
                </div>
              ),
              dot: (
                <DownCircleOutlined
                  style={{ fontSize: "26px", color: "rgba(161, 173, 213, 0.833)" }}
                />
              ),
            },
            {
              
              children: (
                <div className="timeline__content" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                    <a href="https://github.com/Vinh364676/watch-store">
                    <h3 className="timeline__content__technology">Reactjs and Spring Boot</h3>
                  <h4 className="timeline__content__project">Watch store management website</h4>
                  <p className="timeline__content__date">May 2023 – October 2023</p>
                  <span className="timeline__content__text">
                    ReactJS creates a flexible user interface, while Spring Boot
                    handles the powerful backend, helping with efficient product
                    and order management. This combination ensures a good
                    shopping experience and a stable system.
                  </span>
                    </a>
                 
                </div>
              ),
              dot: (
                <CheckCircleOutlined 
                  style={{ fontSize: "26px", color: "rgba(161, 173, 213, 0.833)" }}
                />
              ),
            },
          ]}
        />
      </div>
    ),
  },
];
const itemMobile = [
  {
    key: "1",
    label: "Study Process",
    children: (
      <div>
      <Timeline
      className="timeline"
        // mode="alternate"
        items={[
          {
            children: <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
             className="timeline__content">
                <a href="https://github.com/Vinh364676/watchstore">
                <h3 className="timeline__content__technology">Html Css PhP</h3>
              <h4 className="timeline__content__project">Watch store management website</h4>
              <p className="timeline__content__date">January 2022 – April 2022</p>
              <span className="timeline__content__text">
                This watch store website, built with HTML, CSS, and PHP,
                offers a seamless online shopping experience. It allows easy
                product management for administrators and ensures efficient
                order processing for customers.
              </span>
                </a>
              
            </div>,
             dot: (
              <DownCircleOutlined 
                style={{ fontSize: "26px", color: "rgba(161, 173, 213, 0.833)" }}
              />
            ),
          },
          {
            children:  <div className="timeline__content" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
                <a href="https://github.com/Vinh364676/watch-store">
                <h3 className="timeline__content__technology">Reactjs and DocNet</h3>
              <h4 className="timeline__content__project">Smartphone store management website</h4>
              <p className="timeline__content__date">December 2022 – February 2023</p>
              <span className="timeline__content__text">
                The ReactJS website selling phones uses DocNet to call the
                backend API, ensuring a smooth and consistent shopping
                experience. API calls are mainly related to product and
                order management, and online payments.
              </span>
                </a>
             
            </div>,
            dot: (
              <DownCircleOutlined 
                style={{ fontSize: "26px", color: "rgba(161, 173, 213, 0.833)" }}
              />
            ),
          },
          
          {
            children:  <div className="timeline__content" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
                <a href="https://github.com/Vinh364676/watch-store">
                <h3 className="timeline__content__technology">Reactjs and Spring Boot</h3>
              <h4 className="timeline__content__project">Watch store management website</h4>
              <p className="timeline__content__date">May 2023 – October 2023</p>
              <span className="timeline__content__text">
                ReactJS creates a flexible user interface, while Spring Boot
                handles the powerful backend, helping with efficient product
                and order management. This combination ensures a good
                shopping experience and a stable system.
              </span>
                </a>
             
            </div>,
            dot: (
              <CheckCircleOutlined 
                style={{ fontSize: "26px", color: "rgba(161, 173, 213, 0.833)" }}
              />
            ),
          },
          
         
        ]}
      />
    </div>
    ),
  },
];
function Experience() {
  const {isMobile} = UseRespon();
  return (
    <div id="experience" className="experience">
      <h5 className="contact__title experience__title">Learning </h5>
      <div className="contact__line"></div>
      <Tabs defaultActiveKey="1" items={isMobile ?itemMobile :items} centered className="experience__content"/>
    </div>
  );
}

export default Experience;
