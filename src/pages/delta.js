export default function deltaPage() {
    console.log("Well well well, what do we have here? If you like what you see send me an email")
    return (
      <div className='flex w-full flex-col justify-center items-center min-h-screen'>
        <title>Delta</title>
        <link rel='icon' href='/favicon.ico' />

        <main className='flex w-full flex-col justify-center items-center gap-4'>


          <h1 className="text-3xl font-bold flex-wrap">What can I say, they just do it better</h1>
     
          {/* Avatar */}
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdigistatement.com%2Fwp-content%2Fuploads%2F2019%2F12%2Flogo-delta-airlines.jpg&f=1&nofb=1&ipt=fc9c92fa68029cbcca78223ebc89ff591ea8bd88f111ac1ccaec66226a45fb0c&ipo=images" alt="Delta logo"/>
            </div>
          </div>

          {/* Bio */}
          <p className='flex-wrap'>
            Their in-flight meals taste like food. The lines are shorter. They renovated many of their terminals to look <span className="text-success">nice</span>. When they mess up you are compensated without even asking.
          </p>

          {/* Home */}
          <a className='underline' href='/'>
            Back to Home Page
          </a>
        </main>
      </div>
    );
}