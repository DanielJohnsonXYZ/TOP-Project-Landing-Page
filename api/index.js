const SOURCE = "https://cdn.jsdelivr.net/gh/DanielJohnsonXYZ/TOP-Project-Landing-Page@main/index.html";

module.exports = async function handler(_req, res) {
  try {
    const response = await fetch(SOURCE);
    if (!response.ok) throw new Error(`Source returned ${response.status}`);

    let html = await response.text();

    if (!html.includes('rel="icon" href="favicon.svg"')) {
      html = html.replace(
        '<link rel="stylesheet" href="styles.css">',
        '<link rel="icon" href="favicon.svg" type="image/svg+xml">\n  <link rel="stylesheet" href="styles.css">'
      );
    }

    if (!html.includes('pilot-credibility')) {
      html = html.replace(
        '</head>',
        '  <style>\n    .pilot-credibility { max-width: 720px; margin: 18px 0 0; padding-top: 16px; border-top: 1px solid rgba(21, 23, 19, 0.16); color: #50564e; font-size: 14px; line-height: 1.5; }\n    .pilot-credibility strong { color: #153d2a; }\n  </style>\n</head>'
      );
      html = html.replace(
        '        </div>\n      </div>\n\n      <aside class="diagnostic-card"',
        '        </div>\n        <p class="pilot-credibility"><strong>Independent pilot audits completed on Glorious, COROS and Hapbee</strong> across gaming hardware, sports wearables and wellness technology.</p>\n      </div>\n\n      <aside class="diagnostic-card"'
      );
    }

    if (!html.includes('href="privacy.html">Privacy</a>')) {
      html = html.replace(
        '      <a href="https://calendly.com/wescalestartups?utm_source=answer_engine_audit&amp;utm_medium=website&amp;utm_campaign=launch&amp;utm_content=footer"',
        '      <a href="privacy.html">Privacy</a>\n      <a href="https://calendly.com/wescalestartups?utm_source=answer_engine_audit&amp;utm_medium=website&amp;utm_campaign=launch&amp;utm_content=footer"'
      );
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=86400');
    res.status(200).send(html);
  } catch (error) {
    res.status(502).send(`Unable to load the site: ${error.message}`);
  }
};
