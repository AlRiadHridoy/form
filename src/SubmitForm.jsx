import React, { useState } from "react";

function SubmitForm() {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    text: "",
  });

  const { fname, lname, email, phone, text } = userData;

  const chngState = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const postData = async (event) => {
    event.preventDefault();
    if ((fname, lname, email, phone, text)) {
      const res = await fetch(
        "https://form-5ca2f-default-rtdb.firebaseio.com/form.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            lname,
            email,
            phone,
            text,
          }),
        }
      );
      if (res) {
        setUserData({ fname: "", lname: "", email: "", phone: "", text: "" });
        console.log(userData);
        alert("Your submission completed successfully!");
      }
    } else {
      alert("Fill all the ");
    }
  };

  return (
    <>
      <div className="min-h-screen min-w-screen py-14 flex justify-center items-center text-white bg-[#bebebe]">
        <div
          className="mx-4 form_container flex justify-center items-center w-full h-full max-w-[50rem] min-h-[32rem]
          rounded-xl bg-[#0F172A] shadow-gray-900 text-rose-100"
        >
          <form action="" className="w-full">
            <ul className="grid sm:grid-cols-2 gap-4 sm:gap-10 p-10">
              <li className="box">
                <label htmlFor="fname">First Name</label>
                <input
                  className="input_style"
                  id="fname"
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={chngState}
                />
              </li>
              <li className="box">
                <label htmlFor="lname">Last Name</label>
                <input
                  className="input_style"
                  id="lname"
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={chngState}
                />
              </li>
              <li className="box">
                <label htmlFor="email">Email</label>
                <input
                  className="input_style"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={chngState}
                />
              </li>

              <li className="box">
                <label htmlFor="phone">Phone</label>
                <input
                  className="input_style"
                  id="phone"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={chngState}
                />
              </li>
              <li className="box sm:col-span-full">
                <label htmlFor="text">What's on your mind</label>
                <textarea
                  className="input_style resize-none"
                  id="text"
                  type="text"
                  name="text"
                  rows="4"
                  value={text}
                  onChange={chngState}
                />
              </li>
              <li>
                <input
                  className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md justify-items-start px-5 py-3 cursor-pointer"
                  type="submit"
                  value="Submit"
                  onClick={postData}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}

export default SubmitForm;
