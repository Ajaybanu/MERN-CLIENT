import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Aj.Times app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
         malayalathinayi onn amarthuka english n aayi 2 amarthuga hindi kayi 3 amarthuga tamil n aayi 4 amarthuga ith vaayich mooji egil back adikuka
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;