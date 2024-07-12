import React from "react";

export default function FeaturesComponent() {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mt-3">
                <ul className="cateogries d-flex align-items-center gap-3 ">
                    <li>
                        <h3>Featured cateogries</h3>
                    </li>
                    <li>Coke & Milk </li>
                    <li>Coffee & Teas</li>
                    <li>Pet Foods</li>
                    <li>Vegetables</li>
                </ul>

                <ul className="d-flex gap-2 mx-3">
                    <li>
                        <i class="bi bi-chevron-left border p-2 rounded-5"></i>
                    </li>
                    <li>
                        <i class="bi bi-chevron-right border p-2 rounded-5"></i>
                    </li>
                </ul>
            </div>

            <div className="allcards d-flex justify-content-between">
                <div className="border p-2 card" style={{background:'rgb(248 233 231)'}} >
                    <img src="apple.png" alt="" />
                    <h5>Red Apple</h5>
                    <p>21 items</p>
                </div>

                <div className="border p-2 card" style={{background:'rgb(251 242 234)'}}>
                    <img src="Snack.png" alt="" />
                    <h5>Snack</h5>
                    <p>24 items</p>
                </div>

                <div className="border p-2 card" style={{background:'rgb(252 244 253)'}}>
                    <img src="tomato.png" alt="" />
                    <h5>Vegetables</h5>
                    <p>26 items</p>
                </div>

                <div className="border p-2 card" style={{background:'rgb(241 249 226)'}}>
                    <img src="strawberry.png" alt="" />
                    <h5>Strawberry</h5>
                    <p>24 items</p>
                </div>

                <div className="border p-2 card" style={{background:'rgb(241 249 226)'}}>
                    <img src="Blackplum.png" alt="" />
                    <h5>Black plum</h5>
                    <p>24 items</p>
                </div>

                <div className="border p-2 card" style={{background:'rgb(255 252 235)'}}>
                    <img src="custard.png" alt="" />
                    <h5>Custard Apple</h5>
                    <p>26 items</p>
                </div>

                <div className="border p-2 card" style={{background:'rgb(254 239 236)'}}>
                    <img src="coffe.png" alt="" />
                    <h5>Coffee & Tea</h5>
                    <p>26 items</p>
                </div>

                <div className="border p-2 card" style={{background:'rgb(235 253 234)'}}>
                    <img src="headphone.png" alt="" />
                    <h5>Headphone</h5>
                    <p>26 items</p>
                </div>

                <div className="border p-2 card"  style={{background:'rgb(238 245 221)'}}>
                    <img src="burger.png" alt="" />
                    <h5>Coke & Milk</h5>
                    <p>26 items</p>
                </div>

                <div className="border p-2 card" style={{background:'rgb(253 250 233)'}}>
                    <img src="Kiwi.png" alt="" />
                    <h5>Organic Kiwi</h5>
                    <p>28 items</p>
                </div>
            </div>
        </div>
    );
}
