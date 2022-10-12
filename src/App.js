import { Fragment } from 'react';
import style from './App.module.css';
import styles from './App.scss'
function App() {
  return (
    <div>
      <body>
      <noscript>
      <img
        src="https://shynet-ku7u.onrender.com/ingress/da20d77c-efc5-4d68-8e0d-b78b74024c48/pixel.gif"
      />
    </noscript>
    <script
      defer
      src="https://shynet-ku7u.onrender.com/ingress/da20d77c-efc5-4d68-8e0d-b78b74024c48/script.js"
    ></script>
    {/* <!-- Google Tag Manager (noscript) --> */}
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WDXDVMP"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
    {/* <!-- End Google Tag Manager (noscript) --> */}
    <button onclick="topFunction()" id="myBtn" title="Go to top">
      <span class="iconify upbtn" data-icon="mdi:arrow-up-bold"></span>
    </button>

      </body>
      <main>
      <div className={style.first_section}>
        <div className="left-section">
          <p className={style.main_header}>ഐഡിയ ആണ് മെയിൻ!</p>
          <p className={style.tagline}>
            Young Innovators Programme (YIP) is a specially designed programme
            under Kerala Development and Innovation Strategic Council (K-DISC).
            The programme aims to empower future innovators to innovate new
            products, services or models to meet emerging requirements,
            unarticulated needs, or existing market needs of the society more
            effectively through an innovative challenge.
          </p>
          {/* <!-- <a
            target="_blank"
            href="#"
            ><button className="ctabtn">Registrations Closed!</button></a
          > --> */}

        </div>

        <div className={style.right_section}>
          <img src="assets/Illustration.png" alt="" className={style.illustration} />
        </div>
      </div>
    

      <div className={style.second_section}>
        <div className={style.bulb_container}>
          <img className={style.paper_bulb}src="./assets/Paper Bulb.png" alt="" />
        </div>

        <div className={style.image_container}>
          <div className={style.s1s2}>
            <div className={style.s1}>
              <p className={style.sheader}>Who all can Participate</p>
              <p className={style.stext}>
                Students studying in 8th Standard, College Students and working
                Professionals who are interested in innovation upto the age of
                35 can participate.
              </p>
            </div>
            <div className={style.s2}>
              <p className={style.sheader}>Funding of 30Cr</p>
              <p className={style.stext}>
                The most important thing in the development of an Idea is the
                availability of funding at the correct time. If funding is your
                issue, don't worry we have you covered.
              </p>
            </div>
          </div>

          <iframe
            className={style.yt_video}
            src="https://www.youtube.com/embed/cHK16ItlY3w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className={style.s3s4}>
            <div className={style.s3}>
              <p className={style.sheader}>Amazing Prizes</p>
              <p className={style.stext}>
                YIP is offering financial support of Rs.25000 to 8000 teams
                getting selected in the District level and Rs.50000 to 2000
                teams getting selected in the state level.
              </p>
            </div>
            <div className={style.s4}>
              <p className={style.sheader}>How to Register</p>
              <p className={style.stext}>
                You can join in and submit your ideas as a team consisting
                minimum two and maximum five members before February 15th 2022.
                Each Ideator can exist in 2 teams at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.third_section} id="timeline">
        <p className={style.tsheading}>YIP Idea Registration Procedure</p>
        <div className={style.timeline_container}>
          <div className={style.timeline}>
            <div
              className="timeline__event animated fadeInUp delay-3s timeline__event--type1"
            >
              <div className="timeline__event__icon">
                <img
                  src="assets/procedure/prereg.png"
                  alt=""
                  className={style.lni_cake}
                />
              </div>
              <div className="timeline__event__date">
                Pre<br />
                Registration
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">Step One</div>
                <div className="timeline__event__description">
                  <p>
                    <a
                      href="https://yip.kerala.gov.in/yipapp/index.php/Idea2021/?utm_source=mulearn&utm_medium=link&utm_campaign=mulearn_directv1&utm_id=yip21v1&utm_term=new_reg"
                      ><span> <b>Click Here</b> </span></a
                    >
                    to go to the Pre-Registration page. Enter all your details
                    in the Pre-Registration Form and Complete the OTP
                    Verification. By Now you would have recived an email with
                    login credentials, you can now login with that.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="timeline__event animated fadeInUp delay-2s timeline__event--type2"
            >
              <div className="timeline__event__icon">
                <img
                  src="assets/procedure/studentreg.png"
                  alt=""
                  className={style.lni_cake}
                />
              </div>
              <div className="timeline__event__date">
                Ideator <br />
                Registration
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">Step Two</div>
                <div className="timeline__event__description">
                  <p>
                    <a href="https://yip.kerala.gov.in/yipapp/index.php/Init/"
                      ><span> <b>Click Here to Login</b> </span></a
                    >
                    ,After Logging in Click the Open the left navbar option and
                    from the options listed there click the
                    <b>Profile Completion</b> option. Fill in all your details
                    correctly and according to the mentioned specifications.
                    Finally Submit the form and click OK.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="timeline__event animated fadeInUp delay-1s timeline__event--type3"
            >
              <div className="timeline__event__icon">
                <img
                  src="assets/procedure/yip-voc.png"
                  alt=""
                  className={style.lni_cake}
                />
              </div>
              <div className="timeline__event__date">
                Voice of <br />
                Customer
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">Step Three</div>
                <div className="timeline__event__description">
                  <p>
                    After completing your Profile and submitting it, You can
                    check the left navbar again to find the
                    <b>Voice of Customer(VOC)</b> option. By clicking that you
                    will be directed to the course page where you can complete
                    it.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="timeline__event animated fadeInUp timeline__event--type1"
            >
              <div className="timeline__event__icon">
                <img src="assets/procedure/team.png" alt="" className={style.lni_cake} />
              </div>
              <div className="timeline__event__date">
                Team<br />
                Formation
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">Step Four</div>
                <div className="timeline__event__description">
                  <p>
                    After completing the VOC Course and attending the quiz
                    there.
                    <b
                      >You can form a team consisting of minimum 2 members and
                      maximum 5 members by clicking the Group Formation Button
                      from the left navbar. Only one person from a group is
                      required to form the group</b
                    >
                    while the other members can join it using the team's name
                    and password.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="timeline__event animated fadeInUp delay-3s timeline__event--type1"
            >
              <div className="timeline__event__icon">
                <img
                  src="assets/procedure/ideafind.png"
                  alt=""
                  className={style.lni_cake}
                />
              </div>
              <div className="timeline__event__date">
                Idea <br />
                Submission
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">Step Five</div>
                <div className="timeline__event__description">
                  <p>
                    After forming a team and finding an idea which suits the
                    given themes, the <b>person who formed the team</b> can
                    submit the idea by going to the
                    <b>Idea Submission Option</b> from his/her Navbar.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="timeline__event animated fadeInUp delay-2s timeline__event--type2"
            >
              <div className="timeline__event__icon">
                <img
                  src="assets/procedure/approved.png"
                  alt=""
                  className={style.lni_cake}
                />
              </div>
              <div className="timeline__event__date">
                Institutional <br />
                Approval
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">Step Six</div>
                <div className="timeline__event__description">
                  <p>
                    After the submission of the idea, it requires the approval
                    of the repective Institution and you may contact the
                    concerned authority for the approval of your idea.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="timeline__event animated fadeInUp delay-1s timeline__event--type3"
            >
              <div className="timeline__event__icon">
                <img
                  src="assets/procedure/evaluation.png"
                  alt=""
                  className={style.lni_cake}
                />
              </div>
              <div className="timeline__event__date">
                Preliminary <br />
                Evaluation
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">Step Seven</div>
                <div className="timeline__event__description">
                  <p>
                    Once your Idea is approved by the institution, it is put
                    forward for a preliminary evaluation and
                    <b>8000 teams</b> are selected from District Level and
                    <b>2000 teams</b> are selected from State Level and are
                    awarded prizes upto <b>Rs.50000</b>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="timeline__event animated fadeInUp timeline__event--type1"
            >
              <div className="timeline__event__icon">
                <img
                  src="assets/procedure/winner annoucement.png"
                  alt=""
                  className={style.lni_cake}
                />
              </div>
              <div className="timeline__event__date">
                Winner<br />
                Annoucement
              </div>
              <div className="timeline__event__content">
                <div className="timeline__event__title">Step Eight</div>
                <div className="timeline__event__description">
                  <p>
                    Finally the winners are annouced and out of the 2000 teams
                    selected at state level
                    <b
                      >900 teams are provided financial and mentoring support
                      for the next 3 years.</b
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
</div>
  );
}

export default App;
