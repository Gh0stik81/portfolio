type Filter = 'all' | 'code' | 'graphic' | 'video';

/** Klientsky filter bento mriežky. Bez JS sú viditeľné všetky práce. */
export function initFilter(): void {
  const bar = document.querySelector<HTMLElement>('[data-filter-bar]');
  const cards = document.querySelectorAll<HTMLElement>('[data-work]');
  const empty = document.querySelector<HTMLElement>('[data-bento-empty]');
  if (!bar || cards.length === 0) return;

  const buttons = bar.querySelectorAll<HTMLButtonElement>('[data-filter]');

  const apply = (filter: Filter) => {
    let visible = 0;
    cards.forEach((card) => {
      const show = filter === 'all' || card.dataset.type === filter;
      card.hidden = !show;
      if (show) visible++;
    });
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
    });
    if (empty) empty.hidden = visible > 0;
  };

  bar.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-filter]');
    if (button) apply(button.dataset.filter as Filter);
  });

  // Klik na klip na osi: zruš filter, aby bola cieľová karta viditeľná.
  document.querySelectorAll('[data-clip]').forEach((clip) => {
    clip.addEventListener('click', () => apply('all'));
  });
}
