/* eslint-disable react/prop-types */
function Problematica(props) {
  return (
    <>
      <h2 className="font-bold text-5xl text-center mb-2 mt-4 md:mb-8 md:mt-16">
        {props.h2}
      </h2>
      <div className="flex justify-evenly flex-wrap md:text-start text-center p-6 md:p-0">
        <div className="flex flex-col max-w-[600px] justify-evenly md:items-start items-center">
          <h3 className="font-bold text-2xl mb-4 md:mb-0 md:text-3xl">
            {props.h3}
          </h3>
          <p className="md:text-lg">
            {props.txt}
          </p>
          <div>
            <ul className="list-disc list-inside mt-2 text-start">
              <li>{props.l1}</li>
              <li>{props.l2}</li>
              <li>{props.l3}</li>
              <li>{props.l4}</li>
            </ul>
          </div>
        </div>
        <img
          className="md:w-[444px] w-[250px] mt-6 rounded-xl"
          src={props.img}
          alt="placeholder"
        />
      </div>
    </>
  );
}

export default Problematica;
