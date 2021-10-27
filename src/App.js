import { useState} from 'react';
import Digits from './calcComp/digits';
import Display from './calcComp/dipslay';
import Operators from './calcComp/operators';

function App() {
      const [calc, setCalc] = useState("");
      const [result, setResult] = useState("");

      const ops = ['/','*','+','-','C','DEL','.'];

      const updateCalc = value => {
         if (value == 'C'){
            setCalc('')
            return;
         }
         if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
         )
         {
            return;
         }
         setCalc(calc + value);

         if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
         }
      }
         const createDigits = () => {
            const digits = [];

            for (let i = 1; i<10; i++) {
               digits.push(
                  <button 
                        onClick={ () => updateCalc(i.toString())}
                        key={i}>
                        {i}
                  </button>
               )
            }
            return digits;
         }
         const calculate = () => {
            setCalc(eval(calc).toString());
         }

         const DeleteLast = () => {
            if (calc == '') {
               return;
            }
            const value = calc.slice(0,-1);

            setCalc(value);
         }

            

  return (
     <div className="App">
        <div className="calculater">

           
           <Display result={result} calc={calc}/>
           <Operators updateCalc={updateCalc} deleteLast={DeleteLast}/>
           <Digits updateCalc={updateCalc} createDigits={createDigits} calculate={calculate} />
           

        </div>
     </div>
  );
}

export default App;
