import React from "react";

export default function NavBar1() {
    return (
        <div>
            <nav>
                <ul className="d-flex justify-content-between mt-2 navlist4">
                    <ul className="d-flex gap-3">
                        <li>About us</li>
                        <li>My Account</li>
                        <li>Wishlist</li>
                        <li>Order Tracking</li>
                    </ul>

                    <ul>
                        <li>
                            Get great devices up to 50% off{" "}
                            <span className="px-2 text-success">View details</span>{" "}
                        </li>
                    </ul>

                    <ul className="d-flex gap-3 mx-2">
                        <li>
                            Need help call us <span className="text-success">1800 1200</span>{" "}
                        </li>
                        <li>
                            {" "}
                            <i class="bi bi-globe"></i> English
                        </li>
                        <li>
                            {" "}
                            <i class="bi bi-chevron-down"></i> USD
                        </li>
                    </ul>
                </ul>

                <ul className="d-flex justify-content-between align-items-center navlist2">
                    <ul>
                        <li>
                            <img src="nest.png" alt="image" id="img1" />
                        </li>
                    </ul>

                    <ul className="inputes">
                        <li>
                            <input type="text" placeholder="Search" id="input1" />
                            <label className="label1">All cateogries </label>
                            <i className="bi bi-search search1 "></i>
                        </li>
                    </ul>

                    <ul className="d-flex gap-2 align-items-center mx-2 navlist1">

                        <li>
                            <select>
                                <option>Your Loaction</option>
                                <option>Ahmedabad</option>
                                <option>Surat</option>
                            </select>
                        </li>

                        <li >
                            <i class="bi bi-arrow-repeat px-1"></i>
                            <span>Compare</span>
                        </li>

                        <li>
                            <i class="bi bi-heart px-1"></i>
                            <span>Wishlist</span>
                        </li>

                        <li>
                        <i class="bi bi-cart2 px-1"></i>
                        <span>Cart</span>
                        </li>

                        <li>
                        <i class="bi bi-person px-1"></i>
                        <span>Account</span>
                        </li>

                    </ul>
                </ul>

                <ul className="d-flex justify-content-between align-items-center navlist3 sm-flex-wrap">

                    <ul className="d-flex align-items-center gap-3 list1 ">
                        <button className="px-3 py-1 rounded bg-success text-white"> <i class="bi bi-microsoft"></i> Browse All cateogries  <i class="bi bi-chevron-down"></i> </button>
                        <li><i class="bi bi-cloud-upload px-1"></i>Hot Deals</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop <i class="bi bi-chevron-down"></i></li>
                        <li>Vendors <i class="bi bi-chevron-down"></i></li>
                        <li>Mega Menu <i class="bi bi-chevron-down"></i></li>
                        <li>Blog <i class="bi bi-chevron-down"></i></li>
                        <li>Pages <i class="bi bi-chevron-down"></i></li>
                        <li>Contact</li>
                    </ul>

                    <ul className="d-flex align-items-center list2">
                        <li><i className="bi bi-headset headset1"></i></li>
                        <li className="px-2">
                            <h4 className="text-success">1900-888</h4>
                            <p>24/7 support Center</p>
                        </li>
                    </ul>

                </ul>

            </nav>
        </div>
    );
}
