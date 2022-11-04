
export default function paulPage() {
    return (
      <div className='flex w-full flex-col justify-center items-center'>
        <title>Paul Rodriguez</title>
        <link rel='icon' href='/favicon.ico' />

        <main className='flex w-full flex-col justify-center items-center gap-4'>
          <h1 className="card-title">Hello, Im Paul Rodriguez</h1>
     
          {/* Avatar */}
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://avatars.githubusercontent.com/u/83256976?v=4" alt="Paul Rodriguez's Github Avatar"/>
            </div>
          </div>

          <p className='description test'>
            Stuff and things here we are
          </p>

          <button className="btn">hey</button>

          <a className='button text-green-500' href='/'>

            <p> Back to Home Page</p>

          </a>
        </main>


        <style jsx global>{`

        `}</style>
      </div>
    );
}