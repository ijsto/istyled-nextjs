import Jumbo from '../components/dataDisplay/Jumbo';

export default () => {
  return (
    <div style={{ maxWidth: '90%', margin: '0 auto' }}>
      <Jumbo>
        <h1>iNextJS + Styled-Components /></h1>
      </Jumbo>

      <input placeholder="Type in something nice" type="text" />

      <a
        href="https://ijs.to/courses/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Learn code on iJS.to</h2>
      </a>
      <ul>
        <li>
          <a
            href="https://ijs.to/courses/nextjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/react"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/graphql"
            target="_blank"
            rel="noopener noreferrer"
          >
            GraphQL
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/"
            target="_blank"
            rel="noopener noreferrer"
          >
            and other courses
          </a>
        </li>
      </ul>
    </div>
  );
};
