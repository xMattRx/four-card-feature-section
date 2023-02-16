import styles from './App.module.scss';
import Calculor from './Assets/icon-calculator.svg';
import Karma from './Assets/icon-karma.svg';
import Supervisor from './Assets/icon-supervisor.svg';
import Builder from './Assets/icon-team-builder.svg';
import Block from './Components/Block';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Container}>
        <h1 className={styles.Title}>Reliable, efficient delivery <span>Powered by Technology</span></h1>
        <p className={styles.Description}>Our Artificial intelligence powered tools use millions of project data paints to ensure that your project is successful</p>

        <div className={styles.blocksContainer}>
          <div className={styles.blockContainer}>
            <Block color={'hsl(180, 62%, 55%)'} title={'Supervisor'} text={'Monitors activity to identify project roadblocks'} image={Supervisor} />
          </div>
          <div className={styles.blockContainer}>
            <Block color={'hsl(0, 78%, 62%)'} title={'Team Builder'} text={'Scans our talent network to create the optimal team for your project'} image={Builder} />
            <Block color={'hsl(34, 97%, 64%)'} title={'Karma'} text={'Regularly evaluates our talent to ensure quality'} image={Karma} />
          </div>
          <div className={styles.blockContainer}>
            <Block color={'hsl(212, 86%, 64%)'} title={'Calculator'} text={'Uses data from past projects to provide better delivery estimates'} image={Calculor} />
          </div>
        </div>  

      </div>
    </div>
  );
}

export default App;
