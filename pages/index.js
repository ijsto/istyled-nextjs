import Jumbo from '../components/dataDisplay/Jumbo';

export default () => {
  return (
    <div style={{ maxWidth: '90%', margin: '0 auto' }}>
      <Jumbo>
        <h1>Next.js · styled-components. 💅</h1>
      </Jumbo>

      <input placeholder="Type in something nice" type="text" />

      <a href="https://ijs.to/" rel="noopener noreferrer" target="_blank">
        <p>Learn code on iJS.to</p>
      </a>
      <ul>
        <li>
          <a
            href="https://ijs.to/courses/nextjs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/react"
            rel="noopener noreferrer"
            target="_blank"
          >
            React
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/graphql"
            rel="noopener noreferrer"
            target="_blank"
          >
            GraphQL
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/"
            rel="noopener noreferrer"
            target="_blank"
          >
            and other courses
          </a>
        </li>
      </ul>
    </div>
  );
};
