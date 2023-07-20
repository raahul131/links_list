import ME from "../assets/me.png";

const Head = () => {
  return (
    <>
      <img
        className="mt-12 w-44 h-44 rounded-full text-center block justify-center m-auto duration-700 transform hover:scale-110 cursor-pointer"
        src={ME}
        alt="me"
      />

      <div className="justify-center text-center mt-5 text-white font-mono text-xl ">
        <h3 className="font-bold">Rahul Ray Yadav</h3>
        <p className="font-normal">A Passionate web developer.</p>

       
      </div>
    </>
  );
};

export default Head;
