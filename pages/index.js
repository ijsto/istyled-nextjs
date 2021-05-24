import Jumbo from '../components/dataDisplay/Jumbo';

const App = () => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '90%' }}>
      <Jumbo>
        <h1>Next.js · styled-components. 💅</h1>
      </Jumbo>

      <input placeholder="Type in something nice" type="text" />

      <p>Learn to code on iJS.to</p>
      <p>Visit iJS.to</p>

      <ul>
        <li>Next.js</li>
        <li>React</li>
        <li>GraphQL</li>
        <li>and other courses</li>
      </ul>
    </div>
  );
};

export default App;
