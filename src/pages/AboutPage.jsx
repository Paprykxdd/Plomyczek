import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page-container">
      
      {/* Nagłówek strony */}
      <header className="about-header">
        <h1>Poznaj Wydawnictwo Za Górami</h1>
        <p className="about-subtitle">Tworzymy książki z sercem, dla małych i dużych odkrywców.</p>
      </header>

      {/* Sekcja: Nasza Misja */}
      <section className="mission-section">
        <div className="mission-content">
        <h2>Dawno, dawno temu…</h2>
        <p>
        Dawno, dawno temu, za górami, za lasami i za siedmioma dolinami pojawiła się na świecie malutka dziewczynka..
        </p>
        <p>Dziewczynka ta urodziła się z rzadkim zespołem genetycznym. I to od niej wszystko się
           zaczęło… Przeżycia związane z pojawieniem się tej wyjątkowej osóbki zrodziły pomysł, aby
           pomagać innym dzieciom.</p>
        <p>Tak powstała książka „Wyjątkowy smok Płomyczek” – historia inspirowana tą niezwykłą
           dziewczynką. Wówczas cały nakład książki został przekazany charytatywnie Stowarzyszeniu
           Opieki Hospicyjnej Ziemi Częstochowskiej w ramach akcji „Polowanie na smoka”, a środki
           zgromadzone podczas akcji wspomogły opiekę nad małymi pacjentami hospicjum.</p>
        <p>Choć historia miała na tym się zakończyć, stało się zupełnie inaczej – dzieci pokochały
           Płomyczka i wciąż pytały: „Co było dalej?”
           Dlatego postanowiliśmy założyć wydawnictwo.</p>
        <p>Zmieniać świat na lepsze – strona po stronie, serce po sercu.</p>
        </div>
        <div className="mission-image">
          <img src="/img/Logo.png" alt="Zespół wydawnictwa" />
        </div>
      </section>

      {/* Sekcja: Wartości (z ikonami Font Awesome) */}
      <section className="values-section">
        <h2>Nasza misja</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="icon-circle"><i class="fa-solid fa-book-open"></i></div>
            <h3>Tworzymy książki, które:</h3>
            <p>
                <ul>
                    <li>wzmacniają w dzieciach poczucie własnej wartości,</li>
                    <li>uczą empatii i akceptacji,</li>
                    <li>pokazują, że każdy jest wyjątkowy,</li>
                    <li>wspierają rozmowy o emocjach i różnorodności,</li>
                    <li>wspierają rodziców w codziennym wychowaniu.</li>
                </ul>
            </p>
          </div>
          <div className="value-card">
            <div className="icon-circle"><i className="fa-solid fa-heart"></i></div>
            <h3>Nasze wartości</h3>
            <p>
                <ul>
                    <li><i className="fa-regular fa-star"></i><strong>Akceptacja</strong> – uczymy, że inność jest naturalna i piękna.</li>
                    <li><i className="fa-regular fa-star"></i><strong>Empatia</strong> – pomagamy dzieciom zrozumieć emocje swoje i innych.</li>
                    <li><i className="fa-regular fa-star"></i><strong>Różnorodność</strong> – pokazujemy, że świat jest pełen kolorów i każdy z nich ma znaczenie.</li>
                    <li><i className="fa-regular fa-star"></i><strong>Wrażliwość</strong> – wspieramy otwarte, czułe rozmowy o o emocjach i trudnych tematach</li>
                </ul>
            </p>
            </div>
        </div>
      </section>
      <section className="mission-section mission-reverse">
        <div className="mission-content">
        <h2>Dlaczego założyliśmy wydawnictwo</h2>
          <p>
           Z miłości do książek i dlatego, że zobaczyliśmy, jak wielką wartość ma Płomyczek. Okazało
           się, że nie tylko wsparło hospicjum, ale także dzieci i rodziców. Zobaczyliśmy, ile dobra
           niesie ta opowieść i jak bardzo jest potrzebna.
          </p>
          <p>
          Nasze książki:
          <ul>
            <li>uczą dzieci empatii i akceptacji siebie oraz innych,</li>
            <li>pokazują, że różnice między nami są wartością, a nie przeszkodą,</li>
            <li>towarzyszą dzieciom w odkrywaniu emocji i budowaniu pewności siebie.</li>
          </ul>
          </p>
          <p>Każda publikacja jest starannie przygotowana – pięknie ilustrowana, solidnie wydana i pełna
             przesłania, które pomaga dzieciom uwierzyć w siebie i zaakceptować innych.</p>
        <h2>W co wierzymy?</h2>
            <p>Każda książka może być iskrą, która rozświetli czyjś dzień. Historia może stać się początkiem
               zmiany, a jedno małe serce, poruszone odpowiednią opowieścią, potrafi uczynić świat
               piękniejszym.</p>
            <p>Wierzymy, że poprzez dobre książki możemy zmieniać świat na lepsze!</p>
            
             
        </div>
        {/*<div className="mission-image">
          {/* Placeholder na zdjęcie procesu twórczego 
          <img src="https://placehold.co/600x400/3a5a40/ffffff?text=Proces+Twórczy" alt="Proces powstawania książki" />
        </div>*/}   
      </section>

      {/* Sekcja: Kontakt */}
      <section className="contact-section">
        <h2>Skontaktuj się z nami</h2>
        <p>Masz pytania? Chcesz nawiązać współpracę? Napisz do nas!</p>
        <div className="contact-details">
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <span>kontakt@zagorami.pl</span>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <span>+48 123 456 789</span>
          </div>
          <div className="contact-item">
            <i className="fa-brands fa-instagram"></i>
            <span>@wydawnictwo_za_gorami</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;