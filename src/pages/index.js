import Head from 'next/head'
export default function Home() {
  return (
    <div className="w-full p-4 flex-col flex justify-between items-center min-h-screen">
      <Head>
        <title>Parker and Paul</title>
        <link rel='icon' href='./favicon.ico' />
      </Head>

      <main className="w-full p-4 flex-col flex justify-center items-center gap-4 w-1/2">
        <h1 className='text-3xl font-bold'>Parker and Paul Made A Website</h1>

        <p className='text-center leading-loose'>
          We made this little thing for our computer science class CSCI-1000
        </p>

        <div className='grid grid-cols-2 gap-4 auto-rows-fr'>

          <a 
            href='/parkerSecrest' 
            className='card card-compact shadow-xl border rounded-md hover:bg-base-200'
          >
            <div className="card-body">
              <h3 className="card-title">Parker &rarr;</h3>
              <p>Click here to check out Parker</p>
            </div>
          </a>

          <a 
            href='/paul' 
            className='card card-compact shadow-xl border rounded-md hover:bg-base-200'
          >
            <div className="card-body">
              <h3 className="card-title">Paul &rarr;</h3>
              <p>Click here to check out Paul</p>
            </div>
          </a>


          <a 
            href='https://catalog.colorado.edu/courses-a-z/csci/' target="_blank"
            className='card card-compact shadow-xl border rounded-md hover:bg-base-200'
          >
            <div className="card-body">
              <h3 className="card-title">CSCI-1000 &rarr;</h3>
              <p>Learn more about CSCI-1000</p>
            </div>
          </a>
          <a
            href='https://github.com/moreSalt/website-template'
            target="_blank"
            className='card card-compact shadow-xl border rounded-md hover:bg-base-200'>
              <div className="card-body">
                <h3 className="card-title">Project Resources &rarr;</h3>
                <p>
                  Our Github repo, we were given a template to expand upon.
                </p>
              </div>
          </a>
          <a
            href='https://www.colorado.edu/cs/'
            target="_blank"
            className='card card-compact shadow-xl border rounded-md hover:bg-base-200'>
              <div className="card-body">
                <h3 className="card-title">CU Boulder CS &rarr;</h3>
                <p>Checkout the CU Boulder Computer Science department</p>
              </div>
          </a>
          <a href='./delta' className='card card-compact shadow-xl border rounded-md hover:bg-base-200'>
            <div className="card-body">
              <h3 className="card-title">Delta &rarr;</h3>
              <p>We needed to create another page, so here is why I prefer flying Delta</p>
            </div>
          </a>
        </div>
      </main>

      <footer>
        <p>Made with luv</p>
      </footer>
    </div>
  );
}
