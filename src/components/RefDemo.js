import React,{useRef,useState} from "react";

const RefDemo = () => {
    const [show, setShow] = useState(false);
    // const [refName, setRefName] = useState("");
    const name = useRef(null)
    const submitForm = (e)=>{
        e.preventDefault();
        console.log(name.current.value);
        const refName = name.current.value;
        refName === "" ? alert("first enter") : setShow(true)

    }
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" ref={name}/>
        </div>
        <br />
        <button type="submit">Login</button>
      </form>

      <h1>{
          show ? `your name is ${name.current.value}` : ""
      }</h1>
    </div>

  );
};

export default RefDemo;
