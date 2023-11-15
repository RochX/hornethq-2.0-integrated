import ProgressBar from "../ProgressBar/ProgressBar";
import "./LiberalArtsTracker.css";

const lib_arts_progess_bars = [
  <ProgressBar bgcolor="red" completed={50} title="STEM" />,
  <ProgressBar bgcolor="#44ADA5" completed={20} title="Social Sciences" />,
  <ProgressBar bgcolor="blue" completed={50} title="Humanities" />,
  <ProgressBar bgcolor="purple" completed={30} title="Fine Arts" />,
  <ProgressBar bgcolor="green" completed={60} title="PE" />
]

function LiberalArtsTracker() {
  return (
    <div className="lib-art-tracker">
      <ProgressBar bgcolor="#EA6820" completed={40} title="Graduation Progress" />
      <div className="lib-art-tracker-subset">
        {style_progress_bars(lib_arts_progess_bars)}
      </div>
    </div>
  )
}

function style_progress_bars(progress_bars) {
  const pbar_width = 100/progress_bars.length;
  const pbar_styling = {
    width: `${pbar_width}%`
  }

  const styled_progress_bars = progress_bars.map((pbar, index) => {
    const pbar_id = "pbar_" + index;
    return (
     <div className="styled-pbar" style={pbar_styling} id={pbar_id} key={pbar_id}>
       {pbar}
     </div>
    );
 });

 return styled_progress_bars;
}

export default LiberalArtsTracker;