import react from "react";
import "../css/Banner_1.scss";
import Logo from "../airpodslistenwatchhero22.jpg";
import Box_img from "../Untitled2.png";
import Box_img2 from "../anh2.jpg";
import Box_img3 from "../anh3.jpg";
import Box_img4 from "../222.png";
import AppleWatch from "../applewatchairpods.jpg";
import AirPods from "../AirPods6780x536.jpg";

function Banner_1() {
  return (
    <div className="box">
      <div className="section-1">
        {/* <img src={Logo} alt="" /> */}
        <div className="section-1_textBox">
          <div className="section-1_title">
            <span>HARD TO HEAR NO MORE</span>
            <div className="section-1_textBox-color"></div>
          </div>
          <p className="section-1_subText">
            AirPods don't hurt as much as EarPods, but they need an adjustment
            period.
          </p>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2_textBox">
          <div className="section-2_bigText">
            Always Complaining About This Big, Big World
          </div>
          <div className="section-2_smallText">
            Apple's AirPods are awesome and have some amazing features , but
            they're pretty much the same size and design as EarPods. EarPods
            hurt (at least for some of us). So, it stands to reason that AirPods
            would, too — except they don't ... mostly.
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="section-3_textBox">
          <div className="section-3_text">But what if they fall out?</div>
        </div>
      </div>

      <div className="section-4">
        <div className="section-4_box">
          <div className="section-4_boxItem">
            <div className="section-4_boxItem_text">
              If you've followed what I write on iMore, you've probably realized
              that I'm one of those people that always complains about how big
              things don't fit me right. I've got small hands. I've got thin
              wrists. My feet are little. I might be giving you an incorrect
              image of my size. I'm not actually small.
            </div>
            <div className="section-4_boxItem_img">
              <img className="img1" src={Box_img2} alt="" />
            </div>
          </div>
          <div className="section-4_boxItem">
            <div className="section-4_boxItem_img">
              <img className="img2" src={Box_img4} alt="" />
              <p>Its an adjustment period</p>
              <button>read more</button>
            </div>
            <div className="section-4_boxItem_img">
              <img className="img3" src={Box_img} alt="" />
            </div>
          </div>
          <div className="section-4_boxItem">
            <div className="section-4_boxItem_img">
              <img className="img4" src={Box_img3} alt="" />
            </div>
            <div className="section-4_boxItem_text">
              I'm guessing that's why Apple's EarPods have always felt so
              uncomfortable to me. It must be that my ear canal is also smaller
              than average. The EarPods are hard, with absolutely no padding, so
              they cause me a lot of pain if I wear them for too long. I'll
              sometimes end up with a headache. So, when Apple announced the new
              AirPods, I was both excited and disappointed.
            </div>
          </div>
        </div>
      </div>

      <div className="section-5">
        <div className="textBox">
          <p>When will the AirPod 2 headphones come out?</p>
        </div>
      </div>

      <div className="section-6">
        <div className="section-6_Box">
          <div className="section-6_Box_left">
            <ul>
              <p>Over-ear headphones are best for:</p>
              <li>
                Sound quality: Generally speaking, you get better sound from
                over-ears, although at the higher prices, there are amazing
                in-ears, too.
              </li>
              <li>Comfort: You don’t have to stick anything in your ears.</li>
              <li>
                Not blocking you in: Open-backed headphones let ambient sound in
                (and your music out). This is good if you don’t want to feel
                blocked in, but can also be annoying for other people. Also,
                useless in noisy places.
              </li>
              <li>They don’t fall out of your ears.</li>
              <button>read more</button>
            </ul>
          </div>
          <div className="section-6_Box_right_top">
            <img src={AppleWatch} alt="" />
          </div>
          <p className="section-6_Box_right_bottom_1">
            Once you have decided on that, you have to choose between in-ear and
            over-the-head. There are advantages to both.
          </p>
          <div className="section-6_Box_right_bottom_2">
            <img src={AirPods} alt="" />
          </div>
        </div>
      </div>

      <div className="section-7">
        <div className="section-7_Box">
          <h1 className="section-7_text">Its an Adjustment Period</h1>
          <p>
            Apple successfully turned what I consider to be an awkwardly
            designed in-ear audio device into something I enjoy wearing 90
            percent of the time. If you're like me and find EarPods to be
            uncomfortable, and you haven't bought AirPods because you're worried
            about them hurting your ears, I can confidently say they are
            significantly more comfortable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner_1;
