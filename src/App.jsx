import { useState } from "react";
import { ArrowRight, ChevronDown, MapPin, Phone, Clock } from "lucide-react";

const pratos = [
  { nome: "Funge com Ovo e Chouriço", tipo: "Especialidade", preco: "6.500 Kz", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85", desc: "Funge cremoso acompanhado de ovo e chouriço." },
  { nome: "Cosmopolitan Burger", tipo: "Hambúrguer", preco: "7.500 Kz", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85", desc: "Carne premium, queijo, cebola caramelizada e molho da casa." },
  { nome: "Filete da Casa", tipo: "Carne", preco: "10.500 Kz", img: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=900&q=85", desc: "Filete grelhado com legumes e molho especial." },
];

const entradas = [
  { nome: "Camarão ao Alho", preco: "5.500 Kz", img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85" },
  { nome: "Salada Cosmopolita", preco: "4.000 Kz", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=85" },
];

function Card({ item }) {
  return <article className="card">
    <img src={item.img} alt={item.nome} />
    <div className="card-content">
      <span>{item.tipo || "Entrada"}</span>
      <h3>{item.nome}</h3>
      {item.desc && <p>{item.desc}</p>}
      <strong>{item.preco}</strong>
    </div>
  </article>;
}

export default function App() {
  const [open, setOpen] = useState(false);
  return <div>
    <header className="header">
      <a className="logo" href="#inicio">Sonhos <i>Cosmopolitas</i></a>
      <button className="mobile-btn" onClick={() => setOpen(!open)} aria-label="Abrir menu">☰</button>
      <nav className={open ? "nav open" : "nav"}>
        {["Início","Entradas","Pratos","Bebidas","Contacto"].map((x) =>
          <a key={x} href={"#" + ({Início:"inicio",Entradas:"entradas",Pratos:"pratos",Bebidas:"bebidas",Contacto:"contacto"}[x])} onClick={() => setOpen(false)}>{x}</a>
        )}
        <a className="nav-cta" href="#contacto">Reservar</a>
      </nav>
    </header>

    <main>
      <section id="inicio" className="hero">
        <div className="hero-overlay"/>
        <div className="hero-content">
          <p className="kicker">RESTAURANTE • LUANDA</p>
          <h1>Sabores que<br/><em>contam histórias.</em></h1>
          <p>Uma experiência gastronómica com alma, criada para bons momentos e grandes encontros.</p>
          <div className="actions">
            <a className="btn primary" href="#pratos">Ver o menu <ArrowRight size={18}/></a>
            <a className="btn secondary" href="#contacto">Fazer reserva</a>
          </div>
        </div>
      </section>

      <section id="entradas" className="section">
        <div className="section-head">
          <p className="kicker">PARA COMEÇAR</p><h2>Entradas</h2><p>Pequenos pratos para abrir o apetite.</p>
        </div>
        <div className="grid two">{entradas.map(x => <Card key={x.nome} item={x}/>)}</div>
      </section>

      <section id="pratos" className="section dark">
        <div className="section-head light">
          <p className="kicker">DESTAQUES DA CASA</p><h2>Pratos principais</h2><p>Receitas marcantes para transformar a refeição em memória.</p>
        </div>
        <div className="grid three">{pratos.map(x => <Card key={x.nome} item={x}/>)}</div>
      </section>

      <section id="bebidas" className="section">
        <div className="section-head"><p className="kicker">PARA ACOMPANHAR</p><h2>Bebidas</h2></div>
        <div className="drinks">
          {[["Sprite","1.000 Kz"],["Água","800 Kz"],["Cerveja","2.000 Kz"],["Smirnoff","2.500 Kz"],["Champanhe","12.000 Kz"],["Cosmopolitan","4.500 Kz"]].map(([n,p]) =>
            <div key={n}><span>{n}</span><b>{p}</b></div>
          )}
        </div>
      </section>

      <section id="contacto" className="contact">
        <div><p className="kicker">VISITE-NOS</p><h2>Uma mesa espera por si.</h2><p>Faça a sua reserva e venha viver o sabor dos Sonhos Cosmopolitas.</p></div>
        <div className="contact-info">
          <p><MapPin size={18}/> Luanda, Angola</p><p><Phone size={18}/> +244 900 000 000</p><p><Clock size={18}/> Seg–Dom • 11h–23h</p>
          <a className="btn primary" href="https://wa.me/244900000000">Reservar pelo WhatsApp</a>
        </div>
      </section>
    </main>

    <footer><span>Sonhos <i>Cosmopolitas</i></span><small>© 2026 • Restaurante & Gastronomia</small></footer>
  </div>;
}