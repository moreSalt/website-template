
export default function examplePage() {
  return (
    <div className='container'>
      <title>Parker Secrest</title>
      <link rel='icon' href='/favicon.ico' />

      <main>
        <div className='underline'>
          <h1 className='title'>Hi, I'm Parker</h1>
        </div>
        <img
          className='pic'
          src='https://thispersondoesnotexist.com/image'
          alt='me'
        />

        <p className='description'>
          My name is Parker Secrest. I am a freshman studying Computer Science at the University of Colorado: Boulder.
          Most of my experience consists of C++ and Java. In my free time I enjoy playing the piano, listening to music, and skiing.
        </p>
        <div className='icons'>
          <a href="https://github.com/pjsecrest" target="_blank"><img className="icon" src="https://img.icons8.com/nolan/64/github.png" /></a>
          <a href="https://twitter.com/pjsecrest" target="_blank"><img className="icon" src="https://img.icons8.com/nolan/64/twitter-circled.png"/></a>
          <a href="https://www.linkedin.com/in/parker-secrest/" target="_blank"><img className="icon" src="https://img.icons8.com/nolan/64/linkedin-circled.png"/></a>
        </div>

        <a className='button' href='/'>
          <p>Back to Home Page</p>
        </a>
      </main> 

      <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .icons {
            display: flex;
            flex-direction: row;
          }
          .icon {
            transform: scale(.85);
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
            text-align: center;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            margin-top: .5rem;
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

      <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }


        `}</style>
    </div>
  );
}