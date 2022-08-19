const Frame = ({ title, img_link }) => {
  return (
    <div className=" relative w-full">
      <div className="  opacity-60 w-full relative shadow-[inset_21px -105px 154px -70px_rgba(0,0,0,0.6)] ">
        <img
          className=" w-full h-40 rounded-2xl object-cover relative -z-10"
          src={img_link}
          alt="image"
        />
      </div>

      <p className=" text-white absolute bottom-2 w-full px-3 text-lg leading-tight">
        {title}
      </p>
    </div>
  );
};

export default Frame;
