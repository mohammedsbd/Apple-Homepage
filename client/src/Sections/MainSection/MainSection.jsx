import React from 'react'
import Alertsection from '../Alertsection/Alertsection.jsx'
import Firstsection from "../Firstsection/Firstsection.jsx";
import Secondsection from "../Secondsection/Secondsection.jsx";
import Thridsection from "../Thirdsection/Thridsection.jsx";
import Forthsection from "../Forthsection/Forthsection.jsx";
import Fifthsection from "../Fifthsection/Fifthsection.jsx";
import Sixthsection from '../Sixthsection/Sixthsection.jsx'
import TheLastSecotion from "../TheLastSecotion/TheLastSecotion.jsx"; 

function MainSection() {
  return (
    <>
      <Alertsection />
      <Firstsection />
      <Secondsection />
      <Thridsection />
      <Forthsection />
      <Fifthsection />
      <Sixthsection />
      <TheLastSecotion/>
    </>
  );
}

export default MainSection
