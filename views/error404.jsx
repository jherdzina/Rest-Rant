const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img src="/images/Ebs-404.png" width={350} height={450} alt="Most adorable doggo with tortilla on her head"/>
              </div>
              <p>Omg, there's a tortilla on my head!!!</p>
          </main>
      </Def>
    )
  }

module.exports = error404