import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <header>
        <div>
          <img src="/logo.png" alt="Logo de Developing Solutions" />
        </div>
        <div>
          <nav>
            <ul>
              <li><Link href="#inicio">Inicio</Link></li>
              <li><Link href="#servicios">Servicios</Link></li>
              <li><Link href="#portafolio">Portafolio</Link></li>
              <li><Link href="#contactanos">Contáctanos</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <div>
            <h1>Transformamos ideas en tecnologías</h1>
            <p>Somos los socios tecnológicos de todas las startups y emprendedores</p>
          </div>
        </section>

        <section>
          <h2>Ellos confían en nosotros</h2>
          <div>
            <img src="/tu-plazita.jpg" alt="Logo de Tu Plazita" />
            <img src="/tu-plazita.jpg" alt="Logo de Tu Plazita" />
            <img src="/tu-plazita.jpg" alt="Logo de Tu Plazita" />
            <img src="/tu-plazita.jpg" alt="Logo de Tu Plazita" />
            <img src="/tu-plazita.jpg" alt="Logo de Tu Plazita" />
          </div>
          <div>
            <div>
              <img src="/guitarla.png" alt="Captura de la página de GuitaLa"/>
            </div>
            <div>
              <img src="/guitarla.png" alt="Captura de la página de GuitaLa"/>
            </div>
            <div>
              <img src="/guitarla.png" alt="Captura de la página de GuitaLa"/>
            </div>
            <div>
              <img src="/guitarla.png" alt="Captura de la página de GuitaLa"/>
            </div>
            <div>
              <img src="/guitarla.png" alt="Captura de la página de GuitaLa"/>
            </div>
          </div>
        </section>
        
        <section>
          <div>
            <h2>Contáctanos</h2>
            <h3>+51 932150391</h3>
            <h3>pooldeveloper08@gmail.com</h3>
          </div>
          <form>
            <input type="text" placeholder="Nombres" />
            <div>
              <input type="text" placeholder="Número"/>
              <input type="text" placeholder="Correo"/>
            </div>
            <input type="text" placeholder="Mensaje"/>
            <input type="submit" value="Enviar"/>
          </form>
        </section>
      </main>
      <footer>
        <p>Diseñado por Developing Solutions</p>
        <div>
          <p>Siguenos:</p>
          <FontAwesomeIcon icon={faFacebookF}/>
        </div>
      </footer>
    </>
  );
}
