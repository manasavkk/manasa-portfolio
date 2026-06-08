const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent":  "#c13230",
  "aboutBg": "#8ab9a9",
  "font":    "Playfair"
}/*EDITMODE-END*/;

const FONT_MAP = {
  "Playfair":  '"Playfair Display", Georgia, serif',
  "Cormorant": '"Cormorant Garamond", Georgia, serif',
  "DM Serif":  '"DM Serif Display", Georgia, serif'
};

function PortfolioTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.accent]);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--forest-dark', t.aboutBg);
  }, [t.aboutBg]);

  React.useEffect(() => {
    const family = FONT_MAP[t.font] || FONT_MAP["Playfair"];
    document.documentElement.style.setProperty('--font-display', family);
  }, [t.font]);

  return (
    <TweaksPanel>
      <TweakSection label="Accent color" />
      <TweakColor label="Color" value={t.accent}
        options={['#c13230','#850503','#c5830e','#8ab9a9']}
        onChange={v => setTweak('accent', v)} />
      <TweakSection label="About section" />
      <TweakColor label="Background" value={t.aboutBg}
        options={['#8ab9a9','#6a9a8a','#c13230','#1a2d44']}
        onChange={v => setTweak('aboutBg', v)} />
      <TweakSection label="Typography" />
      <TweakRadio label="Display font" value={t.font}
        options={['Playfair', 'Cormorant', 'DM Serif']}
        onChange={v => setTweak('font', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(
  React.createElement(PortfolioTweaks)
);