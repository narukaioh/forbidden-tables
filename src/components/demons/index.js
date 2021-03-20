import PageDefault from "../../pages/page-default";
import { demon } from "./demon";
import "./demon.css";

const Demon = ({ entity }) => {
  console.log(entity?.attacks)
  return (
    <div className="demon">
      <section>
        <h2>A Forma do demônio</h2>
        <div>
          <p><strong>Forma</strong>: {entity?.form?.name}</p>
          <p><strong>Força</strong>: {entity?.form?.strength}</p>
          <p><strong>Agilidade</strong>: {entity?.form?.agility}</p>
          <p><strong>Astúcia</strong>: {entity?.form?.wits}</p>
          <p><strong>Armadura</strong>: {entity?.form?.armor}</p>
          {entity?.form?.effect === "-" ? null : (
            <div className="box-effect">
              <strong>Efeito</strong>
              <p>{entity?.form?.effect}</p>
            </div>
          )}
        </div>
      </section>

      <section>
        <h2>A Habilidade do demônio</h2>
        {entity?.skills.map((skill, i) => {
          return (
            <>
              <div key={i} className="box-effect skills">
                <div>
                <strong>Habilidade</strong>
                <p>{skill?.name}</p>
                </div>
                <div>
                <strong>Efeito</strong>
                <p>{skill?.effect}</p>
                </div>
              </div>
            </>
          );
        })}
      </section>

      <section>
        <h2>Os ataques do demônio</h2>
        {entity?.attacks.map((attack, i) => {
          return (
           <>
            <div key={i} className="box-effect skills">
                <p>
                  <strong>Ataque</strong>: {attack?.value}
                </p>
                <p>
                  <strong>Dados Base</strong>: {attack?.dices}
                </p>
                <p>
                  <strong>Dano de arma</strong>: {attack?.damage}
                </p>
                <p>
                  <strong>Alcance</strong> {attack?.range}
                </p>
            </div>
           </>
          )
        })}
      </section>

      <section>
        <h2>A habilidade especial do demônio</h2>
        <div>
          <div className="box-effect">
            <strong>Habilidade</strong>
            <p>{entity?.specialSkill?.name}</p>
          </div>
          <div className="box-effect">
            <strong>Efeito</strong>
            <p>{entity?.specialSkill?.effect}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>A fraqueza do demônio</h2>
        <div>
          <div className="box-effect">
            <strong>Fraqueza</strong>
            <p>{entity?.weekness?.name}</p>
          </div>
          <div className="box-effect">
            <strong>Efeito</strong>
            <p>{entity?.weekness?.effect}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const DemonsPage = () => {
  return (
    <PageDefault>
      <div>
        <h1>Gerador de Demônios</h1>
        <p>
          <button type="button">clique aqui para gerar outro demônio</button>
        </p>
        <Demon entity={demon} />
      </div>
    </PageDefault>
  );
};

export default DemonsPage;
