import BackButton from "./components/common/BackButton";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import EmailScreen from "./components/screens/EmailScreen";
import ChartScreen from "./components/screens/ChartScreen"
import RecoveryPlanProgress from "./components/screens/RecoveryPlanProgress ";
function App() {
 return (
   <div>
    {/* <EmailScreen/> */}
    {/* <ChartScreen/> */}
    <RecoveryPlanProgress/>
   </div>
 )
}

export default App;