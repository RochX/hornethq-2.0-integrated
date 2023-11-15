import ProgressBar from "../ProgressBar/ProgressBar";
import "./LiberalArtsTracker.css";

const progess_bars = [
  <ProgressBar bgcolor="red" completed={50} title="STEM" />,
  <ProgressBar bgcolor="#44ADA5" completed={20} title="Social Sciences" />,
  <ProgressBar bgcolor="blue" completed={50} title="Humanities" />,
  <ProgressBar bgcolor="purple" completed={30} title="Fine Arts" />,
  <ProgressBar bgcolor="green" completed={60} title="PE" />
]

function LiberalArtsTracker() {
  const pbar_width = 100/progess_bars.length;
  const pbar_styling = {
    width: `${pbar_width}%`
  }

  const styled_progress_bars = progess_bars.map((pbar, index) => {
     const pbar_classname = "pbar_" + index;
     return (
      <div className={pbar_classname} style={pbar_styling}>
        {pbar}
      </div>
     );
  });

  return (
    <div className="lib-art-tracker">
      <ProgressBar bgcolor="#EA6820" completed={40} title="Graduation Progress" />
      <div className="lib-art-tracker-subset">
        {styled_progress_bars}
      </div>
    </div>
  )
}

export default LiberalArtsTracker;