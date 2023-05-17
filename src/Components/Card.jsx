import cardImg from "../assets/images/image-equilibrium.jpg";
import avatar from "../assets/images/image-avatar.png";
import clockIcon from "../assets/images/icon-clock.svg";
import eyeIcon from "../assets/images/icon-view.svg";
import ethereumIcon from "../assets/images/icon-ethereum.svg";

export default function Card() {
  return (
    <>
      <main className="d-flex justify-content-center align-items-center my-5">
        <section id="card" className="p-4 rounded-3">
          <div className="img mb-3 position-relative">
            <img src={cardImg} alt="" className="w-100 rounded-3" />
            <div className="overlay rounded-3">
              <span className="icon">
                <img src={eyeIcon} alt="" className="w-100"/>
              </span>
            </div>
          </div>
          <div className="desc">
            <h1 className="h3">Equilibrium #3429</h1>
            <p>
              Our Equilibrium collection promotes <br/>
              balance and calm.
            </p>
          </div>
          <div className="detailed d-flex justify-content-between align-items-center">
            <div className="detailedRight d-flex align-items-center gap-2">
              <img src={ethereumIcon} alt="" className="w-50"/>
              <span className="txt">0.042 ETH</span>
            </div>
            <div className="detailedLeft d-flex align-items-center gap-2">
              <img src={clockIcon} alt="" className="w-50" />
              <span className="txt">3 days left</span>
            </div>
          </div>
          <div className="border my-3"></div>
          <div className="info d-flex align-items-center">
            <div className="image">
              <img src={avatar} alt="" className="w-50 rounded-circle" />
            </div>
            <p>
              Creation of <span className="text-white fw-bolder">Jules Wyvern</span>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
