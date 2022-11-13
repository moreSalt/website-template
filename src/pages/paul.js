
export default function paulPage() {
    console.log("Well well well, what do we have here? If you like what you see send me an email")
    return (
      <div className='flex w-full flex-col justify-center items-center min-h-screen'>
        <title>Paul Rodriguez</title>
        <link rel='icon' href='/favicon.ico' />

        <main className='flex w-full flex-col justify-center items-center gap-4'>


          <h1 className="text-3xl font-bold flex-wrap">Hello, I'm Paul Rodriguez</h1>
     
          {/* Avatar */}
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://avatars.githubusercontent.com/u/83256976?v=4" alt="Paul Rodriguez's Github Avatar"/>
            </div>
          </div>

          {/* Links */}
          <div className="btn-group">
            <a className="btn btn-sm hover:btn-primary" href="https://github.com/moreSalt" target="_blank">Github</a>
            <a className="btn btn-sm hover:btn-primary" href="https://gitlab.com/bannedSubnet" target="_blank">Gitlab</a>
            <a className="btn btn-sm hover:btn-primary" href="mailto:mildmoose@pm.me" target="_blank">Email</a>
          </div>

          {/* Bio */}
          <p className='flex-wrap'>
            I am a CS student at CU Boulder and full stack developer with 2+ of experience.
          </p>

          {/* Tech stack */}
          <ul className="flex gap-2 flex-wrap">
            <li className="badge badge-primary">Javascript/Typescript</li>
            <li className="badge badge-primary">Node.js</li>
            <li className="badge badge-primary">Svelte/Sveltekit</li>
            <li className="badge badge-primary">HTML/CSS</li>
            <li className="badge badge-primary">Tailwind CSS</li>
            <li className="badge badge-primary">Git</li>
            <li className="badge badge-primary">C++</li>
            <li className="badge badge-primary">Pyhton</li>
            <li className="badge badge-primary">AWS</li>
            <li className="badge badge-primary">Supabase</li>
            <li className="badge badge-primary">PostgreSQL</li>
            <li className="badge badge-primary">MongoDB</li>
            <li className="badge badge-primary">Redis</li>
            <li className="badge badge-primary">Go</li>
          </ul>

          {/* Home */}
          <a className='underline' href='/'>
            Back to Home Page
          </a>
        </main>
      </div>
    );
}