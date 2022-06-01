import Link from "next/link";
import { Fragment, useState } from "react";
import MainNavigation from "../componentes/logo";
export default function Home({ sala, setSala }) {
  return (
    <div className="fullpage">
      <Fragment>
        <MainNavigation />
        <div className="paginit">
          <div className="nomeDoJogador">
            <h3>Your Name:</h3>
          </div>
          <div className="input">
            <input
              value={sala.NomeDoJogador}
              type="text"
              onChange={(evento) =>
                setSala((prev) => ({
                  ...prev,
                  NomeDoJogador: evento.target.value,
                }))
              }
            />
          </div>
          <br />
          <div className="organizarButoes">
            <Link href="/criarsala">
              <button className="butoes" disabled={sala.NomeDoJogador == ""}>
                New Room
              </button>
            </Link>
            <Link href="/procurarsala">
              <button className="butoes" disabled={sala.NomeDoJogador == ""}>
                Search Room
              </button>
            </Link>
            <Link href="/regras">
              <button className="butoes">Rules</button>
            </Link>
            <Link href="/baralhos">
              <button className="butoes">Decks</button>
            </Link>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
