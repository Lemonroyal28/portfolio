import { languages } from '@/data/languages';

export default function LanguagesSection() {
  return (
    <section id="languages">
      <div className="container">
        <h2 className="section-title">Languages</h2>
        {languages.map((lang, index) => (
          <div key={index} className="lang-row">
            <div className="lang-name">{lang.name}</div>
            <div className="lang-level">{lang.proficiency}</div>
            <div className="lang-bar">
              <div className="lang-fill" style={{ width: `${lang.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
