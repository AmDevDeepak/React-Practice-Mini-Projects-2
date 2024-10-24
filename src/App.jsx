import FilterByCategories from "./Components/FilterByCategories/FilterByCategory";
import { BMICalculator } from "./Components/BMICalculator/BMICalculator";
import DebounceAPI from "./Components/Debounce/DebounceAPI";
import Clock from "./Components/DigitalClock/Clock";
import DragAndDrop from "./Components/DragAndDrop/DragAndDrop";
import FileUpload from "./Components/FileUpload/FileUpload";
import FormValidation from "./Components/FormValidation/FormValidation";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
import NestedComments from "./Components/NestedComments/NestedComments";
import PaginationTest from "./Components/Pagination/PaginationTest";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import Quiz from "./Components/Quiz/Quiz";
import PdfViewer from "./Components/ReactPDF/PdfViewer";
import Sorting from "./Components/SortingAlphabetically/Sorting";
import ProgressBarTest from "./Components/StepProgressBar/ProgressBarTest";
import StopWatchTest from "./Components/StopWatch/StopWatchTest";
import TipCalculator from "./Components/TipCalculator/TipCalculator";
import TooltipTest from "./Components/Tooltip/TooltipTest";
function App() {
  return (
    <>
      <PaginationTest />
      <Clock />
      <StopWatchTest />
      <ProgressBarTest />
      <TooltipTest />
      <FilterByCategories />
      <TipCalculator />
      <MusicPlayer />
      <ProgressBar />
      <BMICalculator />
      <DragAndDrop />
      <FormValidation />
      <FileUpload />
      <Quiz />
      <NestedComments />
      <PdfViewer />
      <DebounceAPI />
      <Sorting />
    </>
  );
}

export default App;
