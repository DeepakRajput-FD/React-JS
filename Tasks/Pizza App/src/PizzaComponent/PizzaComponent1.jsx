import React, { useEffect, useState } from "react";

export default function PizzaComponent1() {
  let [Name, setName] = useState("");
  let [pizza, setpizaa] = useState("");
  let [pasta, setpasta] = useState("");

  let [Showpizza, setshowpizza] = useState("");
  let [Showpasta, setshowpasta] = useState("");

  let [pizzacontent, setpizzacontent] = useState("");
  let [pastacontent, setpastacontent] = useState("");

  // how many buy user
  let [howmanypizza, sethowmanypizza] = useState("");
  let [howmanypasta, sethowmanypasta] = useState("");

  let [change, setchange] = useState(false);

  // Arrays
  let [users, Setusers] = useState([]);

  let [pastaArr, SetpastaArr] = useState([]);

  // variable
  let large_pizza = 10.99;

  let large_pasta = 9.5;

  // boolean

  let [change1, setchange1] = useState(false);

  let [sorrymsg, setsorrymsg] = useState("");

  let date = new Date();
  let obj = {
    name: Name,
    howmuchpizza: howmanypizza,
    howmuchpasta: howmanypasta,
    pizzaSale: Showpizza,
    pastaSale: Showpasta,
    total: Number(Showpasta + Showpizza),
    time: date.getUTCDate(),
  };
  let pizzaFun = (e) => {
    // console.log(e.target.value);

    let pizvalue = e.target.value;

    setshowpizza(large_pasta * pizvalue);
    sethowmanypizza(pizvalue);

    if (pizvalue >= 4) {
      // console.log('you won 1.5lt of soft drink free');
      setpizzacontent("you won 1.5lt of soft drink free");
    } else {
      setpizzacontent(
        "***Buy 4 or more pizza and get 1.5lt of soft drink free***"
      );
      console.log(
        " ***Buy 4 or more pizza and get 1.5lt of soft drink free***"
      );
    }
  };

  let pastaFun = (e) => {
    let pastavalue = e.target.value;

    sethowmanypasta(pastavalue);
    // console.log(pastavalue);
    setshowpasta(large_pasta * pastavalue);
    if (pastavalue >= 4) {
      setpastacontent("you won 2 bruschetta free.");
      //   console.log('you won 2 bruschetta free');
    } else {
      setpastacontent("Buy 4 or more pastas and get 2 bruschetta free.");
      // console.log('Buy 4 or more pastas and get 2 bruschetta free.');
    }
  };

  let handleSubmit = () => {
    setchange1(!change1);
  };

  useEffect(() => {
    let allRecords = JSON.parse(localStorage.getItem("BillingSystem")) || [];
    Setusers(allRecords);
    console.log(pastaArr);
  }, []);

  let pastaImgArr = [];
  let handleSend = () => {
    console.log("right");
    Setusers([...users, obj]);

    localStorage.setItem("BillingSystem", JSON.stringify([...users, obj]));

    setName("");

    setchange1(!change1);
  };

  let notsend = () => {
    console.log("Sorry");
    setchange1(!change1);

    setsorrymsg("sorry for this inconveince");
  };

  return (
    <div className="parentDiv">
      <div>
        <div className="joint">
          <div className="MybillSystem">
            <label htmlFor="">Enter Your Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />
            <h4>{Name}</h4>
            <br />

            <label htmlFor="">Enter number or pizza order you want : </label>
            <input type="text" onChange={(e) => pizzaFun(e)} />
            <br />

            {Showpizza ? (
              <h5>
                your pizza order amount is : {Showpizza + "AUD"}
                <br />
                {pizzacontent}
              </h5>
            ) : (
              ""
            )}
            <br />

            <label htmlFor="">Enter number or pasta order you want :</label>
            <input type="text" onChange={(e) => pastaFun(e)} />
            <br />

            {Showpasta ? (
              <h5>
                your pasta order amount is : {Showpasta + "AUD"}
                <br />
                {pastacontent}
              </h5>
            ) : (
              ""
            )}

            <button onClick={handleSubmit}>Add In Bill System</button>

            <button onClick={() => setchange(!change)}>Show Bill</button>
          </div>

          <div>
            <div className="d-flex offer flex-column">
              <h4>OFFER ZONE</h4>

              <div className="offercontent">

                <h4>***Buy 4 or more pizza and get 1.5lt of soft drink free***
                </h4>
                <h4>***Buy 4 or more pastas and get 2 bruschetta free.***</h4>
                <h4 id="icecream">
                  ***Buy 4 or more pizzas and pastas and get 2 chocco brownies
                  ice cream free.
                </h4>

              </div>
            </div>
            <div className="Images">
              <img src="PizzaImage1.png" alt="" id="pizzaimage1" />
              <img src="PastaImage1.jpg" id="PastaImage1" alt="" />
            </div>
          </div>
        </div>

        {change ? (
          <div className="AllCards">
            {users.map((e, i) => {
              let pizzaImage = [];
              let pastaImage = [];
              let softdrink=[];
              for (let index = 0; index < e.howmuchpizza; index++) {
                pizzaImage.push(
                  <img
                    src="PizzaImage1.png"
                    className="mx-2 m-2"
                    width={"100px"}
                    height={"100px"}
                    alt="img"
                  />
                );
              }
              for (let index = 0; index < e.howmuchpasta; index++) {
                pastaImage.push(
                  <img src="PastaImage1.jpg" className="mx-2 m-2" alt="img" />
                );
              }

                if (e.howmuchpizza>=4&&e.howmuchpasta>=4)
                 {
                   softdrink.push(<img src="soft.png" alt="softdrink" id="soft1" />)
                }

              return (
                <div className="card" key={i}>
                  <div className="card-body" >
                    <h6>order No.{i + 1}</h6>
                    <h5 className="card-title">{e.name}</h5>

                    <div className="d-flex justify-content-around p-1 bg-danger text-white align-items-center  ">
                      <h5>pizza</h5>
                      <h5>{e.howmuchpizza + "pcs"}</h5>
                      <h5>{e.pizzaSale + "AUD"}</h5>
                    </div>

                    <div className="d-flex justify-content-around p-1 bg-warning text-black align-items-center  ">
                      <h5>pasta</h5>
                      <h5>{e.howmuchpasta + "pcs"}</h5>
                      <h5>{e.pastaSale + "AUD"}</h5>
                    </div>

                    <div key={i} className="pizaaimg">{pizzaImage}</div>

                    <div key={i} className="pastaimg" >{pastaImage}</div>

                    <div key={i} className="softimg" >{softdrink}</div>

                    <h5>total bill : {e.total + "AUD"} </h5>
                    {e.howmuchpizza >= 4 && e.howmuchpasta >= 4 ? (
                      <h5> Free 2 choco brownies ice cream</h5>
                    ) : (
                      ""
                    )}
                    <h5>{e.time + " June"}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>

      {change1 ? (
        <div className="box">
          <div>Are You sure</div>

          <h5>Your details</h5>

          <h5>{` Name : ${obj.name}`}</h5>
          <h5>{`buy pizza : ${obj.howmuchpizza} `}</h5>
          <h5>{` buy pasta : ${obj.howmuchpasta}`}</h5>
          <h5>{`Pizza Price : ${obj.pizzaSale + " AUD"}`}</h5>
          <h5>{` pasta Price :  ${obj.pastaSale + " AUD"}`}</h5>
          <h5>{` Total Bill :  ${obj.total + " AUD"}`}</h5>

          <button onClick={handleSend}>Ok</button>
          <button onClick={notsend}>cancel</button>
        </div>
      ) : (
        ""
      )}

      <h5 className="sorry">{sorrymsg}</h5>
    </div>
  );
}
