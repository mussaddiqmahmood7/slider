import { Chapter, Footer } from './Parts';
export default function Paths() {
  const rows = [
    [
      'Local employment',
      'Team + feedback',
      'Delivery + collaboration',
      'Salary cycle',
    ],
    [
      'Remote employment',
      'Portfolio + writing',
      'Async work + time zones',
      'Salary / contract terms',
    ],
    [
      'Freelance projects',
      'Portfolio + client search',
      'Scope + invoices',
      'Project-based',
    ],
    [
      'Your own product',
      'Problem + customer discovery',
      'Sales + support + cash flow',
      'Uncertain until demand',
    ],
  ];
  return (
    <div className="slide-content paths-slide">
      <Chapter number="09">WORK / FOUR PATHS, DIFFERENT TRADEOFFS</Chapter>
      <h1>
        A path is also
        <br />
        <em>a set of responsibilities.</em>
      </h1>
      <table className="paths-table">
        <caption>
          Qualitative career guidance · terms vary by role and agreement
        </caption>
        <thead>
          <tr>
            <th>Path</th>
            <th>Entry point</th>
            <th>You also own</th>
            <th>Pay rhythm</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={cell}>{cell}</th>
                ) : (
                  <td key={cell}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="paths-takeaway">
        Choose the work—and the uncertainty—you can sustain.
      </p>
      <Footer section="SPEAKER SYNTHESIS · NO INCOME PROMISES" />
    </div>
  );
}
